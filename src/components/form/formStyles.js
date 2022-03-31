import styled, { keyframes } from "styled-components";

export const Container = styled.form`
  display: flex;
  flex-direction: column;
  align-self: center;
  width: 100%;
  max-width: 600px;
`;

export const Logo = styled.img`
  width: 80px;
  height: 80px;
  margin: 30px auto;
`;

export const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.main};
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  height: 50px;
  font-size: 24px;
  border: none;
  border-radius: 1px;
  border-bottom: solid 2px
    ${(props) => (props.error ? props.theme.error : props.theme.main)};
  background-color: ${(props) => props.theme.background};
  margin-top: 15px;
  padding: 15px 10px 0 10px;
  outline: none;
  text-align: center;
  &:focus {
    border-bottom: solid 3px
      ${(props) => (props.error ? props.theme.error : props.theme.main)};
  }
  &:hover {
    border-bottom: solid 3px
      ${(props) => (props.error ? props.theme.error : props.theme.main)};
  }
  &::placeholder {
    color: ${(props) => props.theme.discrete};
  }
`;

export const Error = styled.p`
  text-align: center;
  font-size: 16px;
  color: ${(props) => props.theme.error};
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  margin: 15px auto;
  font-size: 18px;
  font-weight: bold;
  color: ${(props) =>
    props.secondary ? props.theme.main : props.theme.background};
  background-color: ${(props) =>
    props.secondary ? props.theme.background : props.theme.main};
  border-radius: 999px;
  border: solid 3px ${(props) => props.theme.main};
  outline: none;
  cursor: pointer;
  &:hover {
    color: ${(props) =>
      props.secondary ? props.theme.main : props.theme.background};
    background-color: ${(props) =>
      props.secondary ? props.theme.light : props.theme.shade};
    border: solid 3px
      ${(props) => (props.secondary ? props.theme.main : props.theme.shade)};
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  animation: ${rotate360} 1s linear infinite;
  transform: translateZ(0);
  margin: auto;
  border-top: 3px solid ${(props) => props.theme.constrast};
  border-right: 3px solid ${(props) => props.theme.constrast};
  border-bottom: 3px solid ${(props) => props.theme.constrast};
  border-left: 3px solid ${(props) => props.theme.main};
  background: transparent;
  width: 28px;
  height: 28px;
  border-radius: 50%;
`;
