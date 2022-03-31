import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 15px;
  background-color: ${(props) => props.theme.background};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  align-self: center;
  border: 1px solid blue;
`;

export const Nav = styled.div``;

export const Info = styled.div``;
