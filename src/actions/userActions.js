import axios from "axios";

export const loginUser = async (loginInfo, dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.post("/login", loginInfo);
    const response = await res.data;
    console.log(response);
    setAuthHeader(response.token);
    dispatch({ type: "AUTHENTICATE" });
    getUser(dispatch);
    window.location.href = "/";
  } catch (err) {
    console.log(err);
    dispatch({ type: "SET_ERRORS", payload: err.response.data });
  }
};

export const logoutUser = (dispatch) => {
  localStorage.removeItem("GMToken");
  delete axios.defaults.headers.common["Authorization"];
  dispatch({ type: "UNAUTHENTICATE" });
  window.location.href = "/login";
};

export const getUser = async (dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.get("/user");
    const response = await res.data;
    console.log(response);
    dispatch({ type: "SET_USER", payload: response });
  } catch (err) {
    console.log(err);
  }
};

export const signupUser = async (signupInfo, dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.post("/signup", signupInfo);
    const response = await res.data;
    console.log(response);
    setAuthHeader(response.token);
    dispatch({ type: "AUTHENTICATE" });
    window.location.href = "/";
  } catch (err) {
    console.log(err);
  }
};

export function getAuthHeader() {
  const token = localStorage.getItem("GMToken");
  axios.defaults.headers.common["Authorization"] = token;
}

function setAuthHeader(t) {
  const token = `Bearer ${t}`;
  localStorage.setItem("GMToken", token);
  axios.defaults.headers.common["Authorization"] = token;
}

export const likeGossip = async (screamId, dispatch) => {
  try {
    const res = await axios.get(`/scream/${screamId}/like`);
    const response = await res.data;
    console.log(response);
    dispatch({ type: "SET_LIKE", payload: response });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const unlikeGossip = async (screamId, dispatch) => {
  try {
    const res = await axios.get(`/scream/${screamId}/unlike`);
    const response = await res.data;
    console.log(response);
    dispatch({ type: "SET_UNLIKE", payload: response });
  } catch (err) {
    console.log(err.response.data);
  }
};

export const editUserProfile = async (profileInfo, dispatch) => {
  dispatch({ type: "LOADING_ON" });
  try {
    const res = await axios.post(`/user`, profileInfo);
    const response = await res.data;
    console.log(response);
    dispatch({ type: "LOADING_OFF" });
  } catch (err) {
    console.log(err.response.data);
    dispatch({ type: "LOADING_OFF" });
  }
};
