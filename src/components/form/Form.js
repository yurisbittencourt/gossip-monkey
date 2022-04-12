import {
  Container,
  Logo,
  Title,
  Input,
  Error,
  Button,
  Spinner,
} from "./formStyles";

export default function Form({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Form.Logo = function FormLogo({ src, alt, ...props }) {
  return <Logo src={src} alt={alt} {...props} />;
};

Form.Title = function FormTitle({ children, ...props }) {
  return <Title {...props}>{children}</Title>;
};

Form.Input = function FormInput({ children, ...props }) {
  return <Input {...props}>{children}</Input>;
};

Form.Error = function FormError({ children, ...props }) {
  return <Error {...props}>{children}</Error>;
};

Form.Button = function FormButton({ loading, children, ...props }) {
  return <Button {...props}>{loading ? <Spinner /> : children}</Button>;
};
