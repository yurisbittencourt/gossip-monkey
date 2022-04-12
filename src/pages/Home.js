import { useEffect } from "react";
import { Layout, Card } from "../components";
import { useDataContext } from "../context/dataContext";
import { useUserContext } from "../context/userContext";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

export default function Home() {
  const { data, dataActions } = useDataContext();
  dayjs.extend(relativeTime);

  useEffect(() => {
    dataActions.loadGossips();
  }, []);

  return (
    <Layout>
      <Layout.Nav>Nav</Layout.Nav>
      <Layout.Main>
        {data.loading ? (
          <p>loading...</p>
        ) : (
          data.gossips.map((gossip) => (
            <Card key={gossip.screamId}>
              <Card.Header>
                <Card.UserHandle>{gossip.userHandle}</Card.UserHandle>
                <Card.CreatedAt>
                  {dayjs(gossip.createdAt).fromNow()}
                </Card.CreatedAt>
              </Card.Header>
              <Card.Main>
                <Card.UserImage src={gossip.userImage}></Card.UserImage>
                <Card.Body>{gossip.body}</Card.Body>
              </Card.Main>
              <Card.Info>
                <Card.Likes gossipId={gossip.screamId}>
                  {gossip.likeCount}
                </Card.Likes>
                <Card.Comments>{gossip.commentCount}</Card.Comments>
              </Card.Info>
            </Card>
          ))
        )}
      </Layout.Main>
      <Layout.Info>Info</Layout.Info>
    </Layout>
  );
}
