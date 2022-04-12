import { useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles, theme } from "./Styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, Signup } from "./pages";
import { useUserContext } from "./context/userContext";
import jwtDecode from "jwt-decode";
import axios from "axios";

export default function App() {
  const { user, userActions } = useUserContext();
  useEffect(() => {
    const token = localStorage.GMToken;
    if (token) {
      const decodedToken = jwtDecode(token);
      if (decodedToken.exp * 1000 < Date.now()) {
        userActions.logout();
      } else {
        if (!user.authenticated) {
          userActions.authenticate();
          axios.defaults.headers.common["Authorization"] = token;
          userActions.loadUser();
        }
      }
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route exact path="login" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
