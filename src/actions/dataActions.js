import axios from "axios";

export const getGossips = async (dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.get(`/screams`);
    const response = await res.data;
    console.log(response);
    dispatch({ type: "SET_GOSSIPS", payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const getUserData = async (userHandle, dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.get(`/user/${userHandle}`);
    const response = await res.data;
    console.log(response);
    dispatch({ type: "SET_USER_DATA", payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const getGossip = async (screamId, dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.get(`/scream/${screamId}`);
    const response = await res.data;
    console.log(response);
    dispatch({ type: "SET_GOSSIP", payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const postComment = async (gossipId, newComment, dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.post(`/scream/${gossipId}/comment`, newComment);
    const response = await res.data;
    console.log(response);
    dispatch({ type: "SET_NEW_COMMENT", payload: response });
  } catch (err) {
    console.log(err.response);
    dispatch({ type: "SET_ERROR", payload: err.response.data.comment });
  }
};

export const postGossip = async (newGossip, dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.post(`/scream`, newGossip);
    const response = await res.data;
    console.log(response);
    dispatch({ type: "SET_NEW_GOSSIP", payload: response });
    window.location.href = "/";
  } catch (err) {
    console.log(err.response);
    dispatch({ type: "SET_ERROR", payload: err.response.data.body });
  }
};
