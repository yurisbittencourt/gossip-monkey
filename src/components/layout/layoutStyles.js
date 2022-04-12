import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  min-height: 100vh;
  padding: 0 15px;
  background-color: ${(props) => props.theme.background};
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 15px;
  border: 1px solid red;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 15px;
  border: 1px solid red;
`;
