import { logoutUser, loginUser, getUser } from "../actions/userActions";
import { axios } from "axios";
import jwtDecode from "jwt-decode";

export function checkToken() {
  const token = localStorage.GMToken;
  if (token) {
    const decodedToken = jwtDecode(token);
    if (decodedToken.exp * 1000 < Date.now()) {
      logoutUser();
    } else {
      loginUser();
      axios.defaults.headers.common["Authorization"] = token;
      getUser();
    }
  }
}
