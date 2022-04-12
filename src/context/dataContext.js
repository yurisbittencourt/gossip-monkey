import React from "react";
import {
  getGossips,
  getUserData,
  getGossip,
  postComment,
  postGossip,
} from "../actions/dataActions";

const initialDataState = {
  loading: false,
  gossips: [],
  user: {},
  gossip: {},
  error: "",
};

const DataContext = React.createContext();

export function DataProvider(props) {
  const [data, dispatch] = React.useReducer(dataReducer, initialDataState);
  const value = React.useMemo(() => [data, dispatch], [data]);
  return <DataContext.Provider value={value} {...props} />;
}

export function useDataContext() {
  const [data, dispatch] = React.useContext(DataContext);

  const dataActions = {
    loadGossips: () => getGossips(dispatch),
    loadUserData: (userHandle) => getUserData(userHandle, dispatch),
    loadGossip: (gossipId) => getGossip(gossipId, dispatch),
    sendNewComment: (gossipId, newComment) =>
      postComment(gossipId, newComment, dispatch),
    clearError: () => dispatch({ type: "CLEAR_ERROR" }),
    sendNewGossip: (newGossip) => postGossip(newGossip, dispatch),
  };
  return { data, dataActions };
}

function dataReducer(data, action) {
  switch (action.type) {
    case "SET_GOSSIPS":
      return {
        ...data,
        gossips: action.payload,
        loading: false,
      };
    case "LOADING_ON":
      return {
        ...data,
        loading: true,
      };
    case "LOADING_OFF":
      return {
        ...data,
        loading: false,
      };
    case "SET_USER_DATA":
      return {
        ...data,
        gossips: action.payload.screams,
        user: action.payload.user,
        loading: false,
      };
    case "SET_GOSSIP":
      return {
        ...data,
        gossip: action.payload,
        loading: false,
      };
    case "SET_NEW_COMMENT":
      return {
        ...data,
        loading: false,
        gossip: {
          ...data.scream,
          comment: [action.payload, ...data.scream.comments],
        },
      };
    case "SET_ERROR":
      return {
        ...data,
        loading: false,
        error: action.payload,
      };
    case "CLEAR_ERROR":
      return {
        ...data,
        error: "",
      };
    case "SET_NEW_GOSSIP":
      return {
        ...data,
        loading: false,
        gossips: [action.payload, ...data.screams],
      };
    default:
      return data;
  }
}
