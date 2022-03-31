import { Layout, Form } from "../components";
import monkey from "../monkey.png";

export default function Login() {
  return (
    <Layout>
      <Form>
        <Form.Logo src={monkey} alt="Logo" />
        <Form.Title>Gossip Monkey</Form.Title>
        <Form.Input type="email" placeholder="Email" />
        <Form.Input type="password" placeholder="password" />
        <Form.Error>error</Form.Error>
        <Form.Button>Log in</Form.Button>
        <Form.Button secondary>Sign up</Form.Button>
      </Form>
    </Layout>
  );
}
