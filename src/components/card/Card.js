import {
  Container,
  Header,
  Main,
  Info,
  UserHandle,
  ImageWrapper,
  UserImage,
  Body,
  CreatedAt,
  Likes,
  Comments,
  LikeIcon,
  LikeIconFill,
  CommentIcon,
} from "./cardStyles";
import { useUserContext } from "../../context/userContext";

export default function Card({ children, ...props }) {
  return <Container {...props}>{children}</Container>;
}

Card.Header = function CardHeader({ children, ...props }) {
  return <Header {...props}>{children}</Header>;
};

Card.Main = function CardMain({ children, ...props }) {
  return <Main {...props}>{children}</Main>;
};

Card.Info = function CardInfo({ children, ...props }) {
  return <Info {...props}>{children}</Info>;
};

Card.UserHandle = function CardUserHandle({ children, ...props }) {
  return <UserHandle {...props}>{children}</UserHandle>;
};

Card.UserImage = function CardUserImage({ src, ...props }) {
  return (
    <ImageWrapper {...props}>
      <UserImage src={src} alt="User"></UserImage>;
    </ImageWrapper>
  );
};

Card.Body = function CardBody({ children, ...props }) {
  return <Body {...props}>{children}</Body>;
};

Card.CreatedAt = function CardCreatedAt({ children, ...props }) {
  return <CreatedAt {...props}>{children}</CreatedAt>;
};

Card.Likes = function CardLikes({ gossipId, children, ...props }) {
  const { user, userActions } = useUserContext();
  const fill = () => {
    if (user.likes && user.likes.find((like) => like.id === gossipId)) {
      return true;
    } else return false;
  };

  return (
    <Likes {...props}>
      {fill() ? <LikeIconFill /> : <LikeIcon />}
      {children}
    </Likes>
  );
};

Card.Comments = function CardComments({ children, ...props }) {
  return (
    <Comments {...props}>
      <CommentIcon />
      {children}
    </Comments>
  );
};
