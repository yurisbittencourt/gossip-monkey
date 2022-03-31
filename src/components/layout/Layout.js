import { Container, Main, Nav, Info } from "./layoutStyles";

export default function Layout({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Layout.Main = function LayoutMain({ children, ...props }) {
  return <Main {...props}>{children}</Main>;
};

Layout.Nav = function LayoutNav({ children, ...props }) {
  return <Nav {...props}>{children}</Nav>;
};

Layout.Info = function LayoutInfo({ children, ...props }) {
  return <Info {...props}>{children}</Info>;
};
