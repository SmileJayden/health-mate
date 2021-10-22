import type { NextPage } from "next";
import { Card, Typography } from "antd";
import { Showmate } from "./api/showmate";
import { Profile } from "./api/profiles";

const gridStyle = {
  width: "45.5%",
  margin: "2.5% 1.5% 1.5% 3%",
};

const Home: NextPage = () => {
  let src = (
    <div>
      <div>{Profile("userid0")}</div>
      <Card title="My Mentees">
        <Card.Grid style={gridStyle}>{Showmate("userid1")}</Card.Grid>
        <Card.Grid style={gridStyle}>{Showmate("userid2")}</Card.Grid>
        <Card.Grid style={gridStyle}>{Showmate("userid3")}</Card.Grid>
        <Card.Grid style={gridStyle}>{Showmate("userid4")}</Card.Grid>
      </Card>
    </div>
  );

  return src;
};

export default Home;
