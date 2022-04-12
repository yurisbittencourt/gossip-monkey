import styled from "styled-components";
import { Heart } from "@styled-icons/bootstrap/Heart";
import { HeartFill } from "@styled-icons/bootstrap/HeartFill";
import { ChatDots } from "@styled-icons/bootstrap/ChatDots";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 5px;
  border-left: 1px solid ${(props) => props.theme.gray};
  border-right: 1px solid ${(props) => props.theme.gray};
  border-bottom: 1px solid ${(props) => props.theme.gray};
  &:first-of-type {
    border-top: 1px solid ${(props) => props.theme.gray};
  }
  &:last-of-type {
    border-top: 1px solid ${(props) => props.theme.gray};
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const Main = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;

export const UserHandle = styled.h1`
  font-size: 24px;
`;

export const ImageWrapper = styled.div`
  width: 50px;
  height: 50px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
`;

export const UserImage = styled.img`
  width: 100%;
  height: auto;
`;

export const Body = styled.p`
  font-size: 18px;
  margin-left: 5px;
`;

export const CreatedAt = styled.p`
  font-size: 16px;
  margin-left: auto;
`;

export const Likes = styled.div`
  font-size: 16px;
`;

export const Comments = styled.div`
  font-size: 16px;
`;

export const LikeIcon = styled(Heart)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.main};
`;

export const LikeIconFill = styled(HeartFill)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.main};
`;

export const CommentIcon = styled(ChatDots)`
  width: 16px;
  height: 16px;
  color: ${(props) => props.theme.main};
`;
