import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
    font-family: 'Roboto', sans-serif;
}
`;
export const theme = {
  background: "#eee",
  main: "#673ab7",
  light: "#dacfed",
  shade: "#482880",
  contrast: "#fff",
  discrete: "#888",
  gray: "#ccc",
  title: "#000",
  error: "red",
  yellow: "#ffc107",
};

/*
  secondary: {
    main: "#ffc107",
    light: "#ffcd38",
    dark: "#b28704",
    contrast: "#fff",
    gray: "#888",
  },
*/
