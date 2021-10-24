import type { NextPage } from "next";
import { Card, Typography } from "antd";
import { Showmentee, Showmentor, Showanalytics } from "./api/information";
import Profile, { MemberType } from "@components/common/profile";

const gridStyle = {
  width: "45.5%",
  margin: "2.5% 1.5% 2% 3%",
};

const largegridStyle = {
  width: "95.5%",
  margin: "2.5% 1.5% 1.5% 3%",
};

const Home: NextPage = () => {
  return (
    <div>
      <Profile name={"장재영"} memberType={MemberType.MENTEE}></Profile>
      <Profile name={"서규호"} memberType={MemberType.MENTOR}></Profile>
    </div>
  );

  // data loading
  // let myuserid = "userid0";
  // let myusertype = "Mentor";
  // let mymentorid = null;
  // let src = null;
  //
  // // toggle mentor homepage and mentee homepage
  // if (1 == 0) {
  //   myuserid = "userid007";
  //   myusertype = "Mentee";
  //   mymentorid = "userid0";
  // }
  //
  // if (myusertype == "Mentor") {
  //   src = (
  //     <div>
  //       <div>{Profile(myuserid)}</div>
  //       <Card title="My Mentees">
  //         <Card.Grid style={gridStyle}>{Showmentee("userid1")}</Card.Grid>
  //         <Card.Grid style={gridStyle}>{Showmentee("userid2")}</Card.Grid>
  //         <Card.Grid style={gridStyle}>{Showmentee("userid3")}</Card.Grid>
  //         <Card.Grid style={gridStyle}>{Showmentee("userid4")}</Card.Grid>
  //       </Card>
  //     </div>
  //   );
  // } else if (myusertype == "Mentee") {
  //   src = (
  //     <div>
  //       <div>{Profile(myuserid)}</div>
  //       <Card title="My Activity">
  //         <Card.Grid style={largegridStyle}>{Showmentor(mymentorid)}</Card.Grid>
  //         <Card.Grid style={gridStyle}>
  //           {Showanalytics(myuserid, "walking")}
  //         </Card.Grid>
  //         <Card.Grid style={gridStyle}>
  //           {Showanalytics(myuserid, "weight")}
  //         </Card.Grid>
  //       </Card>
  //     </div>
  //   );
  // } else {
  //   throw new Error("User type is wrong!");
  // }
  //
  // return src;
};

export default Home;
