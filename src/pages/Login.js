import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/userContext";
import { Layout, Form } from "../components";
import monkey from "../monkey.png";

export default function Login() {
  const { user, userActions } = useUserContext();
  const [loginInfo, setLoginInfo] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setLoginInfo((loginInfo) => ({
      ...loginInfo,
      [e.target.type]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    userActions.login(loginInfo, navigate);
  };

  const handleClick = () => {
    navigate("/signup");
  };

  useEffect(() => {
    userActions.clearErrors();
  }, []); //eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Layout>
      <Form onSubmit={handleSubmit}>
        <Form.Logo src={monkey} alt="Logo" />
        <Form.Title>Gossip Monkey</Form.Title>
        <Form.Input
          type="email"
          placeholder="Email"
          value={loginInfo.email}
          onChange={handleChange}
        />
        <Form.Error>{user.errors.general} error</Form.Error>
        <Form.Input
          type="password"
          placeholder="password"
          value={loginInfo.password}
          error={user.errors.password}
          onChange={handleChange}
        />
        <Form.Error>{user.errors.general} error</Form.Error>
        <Form.Button type="submit" loading={user.loading}>
          Log in
        </Form.Button>
        <Form.Button secondary onClick={handleClick}>
          Sign up
        </Form.Button>
      </Form>
    </Layout>
  );
}
