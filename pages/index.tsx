import type { NextPage } from "next";
import { Card, Typography } from "antd";
import { Showmate } from "./api/showmate";
import { Introduction } from "./api/introduction";

const { Text } = Typography;

const cardStyle = {
  margin: "0% 0% 0% 0%",
  overflow: "hidden",
};

const gridStyle = {
  width: "45.5%",
  margin: "1.5% 1.5% 1.5% 3%",
};

const Home: NextPage = () => {
  let src = (
    <div>
      <div>{Introduction("userid0")}</div>
      <Card title="나의 멘티들" style={cardStyle}>
        <Card.Grid style={gridStyle}>{Showmate(200, "userid1")}</Card.Grid>
        <Card.Grid style={gridStyle}>{Showmate(200, "userid2")}</Card.Grid>
        <Card.Grid style={gridStyle}>{Showmate(200, "userid3")}</Card.Grid>
        <Card.Grid style={gridStyle}>{Showmate(200, "userid4")}</Card.Grid>
      </Card>
    </div>
  );

  return src;
};

export default Home;
