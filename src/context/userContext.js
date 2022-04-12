import React from "react";
import {
  loginUser,
  logoutUser,
  getUser,
  signupUser,
  likeGossip,
  unlikeGossip,
  editUserProfile,
} from "../actions/userActions";

const initialUserState = {
  authenticated: false,
  loading: false,
  credentials: {
    bio: "",
    createdAt: "",
    email: "",
    handle: "",
    imageUrl: "",
    location: "",
    website: "",
  },
  errors: {
    email: "",
    password: "",
    confirmPassword: "",
    handle: "",
    general: "",
  },
  likes: [],
  notifications: [],
};

const UserContext = React.createContext();

export function UserProvider(props) {
  const [user, dispatch] = React.useReducer(userReducer, initialUserState);
  const value = React.useMemo(() => [user, dispatch], [user]);
  return <UserContext.Provider value={value} {...props} />;
}

export function useUserContext() {
  const [user, dispatch] = React.useContext(UserContext);
  const userActions = {
    login: (loginInfo, history) => loginUser(loginInfo, history, dispatch),
    logout: () => logoutUser(dispatch),
    loadUser: () => getUser(dispatch),
    signup: (signupInfo, history) => signupUser(signupInfo, history, dispatch),
    setLike: (screamId) => likeGossip(screamId, dispatch),
    setUnlike: (screamId) => unlikeGossip(screamId, dispatch),
    clearErrors: () => dispatch({ type: "CLEAR_ERRORS" }),
    authenticate: () => dispatch({ type: "AUTHENTICATE" }),
    editProfile: (profileInfo) => editUserProfile(profileInfo, dispatch),
  };
  return { user, userActions };
}

function userReducer(user, action) {
  switch (action.type) {
    case "AUTHENTICATE":
      return {
        ...user,
        loading: false,
        authenticated: true,
      };
    case "UNAUTHENTICATE":
      return initialUserState;
    case "LOADING_ON":
      return {
        ...user,
        loading: true,
      };
    case "LOADING_OFF":
      return {
        ...user,
        loading: false,
      };
    case "SET_USER":
      return {
        ...user,
        authenticated: true,
        loading: false,
        ...action.payload,
      };
    case "SET_ERRORS":
      return {
        ...user,
        loading: false,
        errors: action.payload,
      };
    case "CLEAR_ERRORS":
      return {
        ...user,
        errors: {
          email: "",
          password: "",
          confirmPassword: "",
          handle: "",
          general: "",
        },
      };
    case "SET_LIKE":
      return {
        ...user,
        likes: [
          ...user.likes,
          {
            userHandle: user.credentials.handle,
            screamId: action.payload.screamId,
          },
        ],
      };
    case "SET_UNLIKE":
      return {
        ...user,
        likes: user.likes.filter(
          (like) => like.screamId !== action.payload.screamId
        ),
      };
    default:
      return user;
  }
}
