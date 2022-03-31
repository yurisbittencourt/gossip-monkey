import { Container } from "./cardStyles";

export default function Card({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
}
