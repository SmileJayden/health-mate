// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Image, Tag, Typography, Popover } from "antd";
import {
  CheckCircleOutlined,
  CheckOutlined,
  HeartOutlined,
  FacebookOutlined,
  InstagramOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { gray } from "@ant-design/colors";

const introSection = {
  borderBottom: "5px solid #f0f0f0",
};

const myprofileStyle = {
  position: "relative",
  height: "57px",
  borderBottom: "1px solid #f0f0f0",
};

const introductionStyle = {
  display: "flex",
  margin: "2% 0% 1% 1.5%",
};

const informationStyle = {
  display: "flex",
  flexDirection: "column",
  width: "100%",
};

function userColor(usertype: string) {
  if (usertype == "Mentor") {
    return "green";
  } else if (usertype == "Mentee") {
    return "gray";
  } else {
    throw new Error("Usertype is wrong!");
  }
}

function checkDisplay(usertype: string, match: string) {
  let style = {
    position: "relative",
    height: "100%",
    marginLeft: "3.5%",
    display: "block",
  };
  if (usertype != match) {
    style.display = "none";
  }

  return style;
}

function snsiconStyle(left: string) {
  let style = {
    position: "absolute",
    bottom: "0",
    left: left,
    cursor: "pointer",
  };

  return style;
}

export default function Profile(userid: string) {
  // TODO :  implement user data loading.
  let usertype = "Mentor";
  let sentence1 =
    "Hi, I am a health trainer who has been exercising for 5 years.";
  let sentence2 =
    "The body is what you need to work on today. So let's get started!";
  let imgsrc =
    "https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png";

  // data loading example
  if (userid == "userid007") {
    usertype = "Mentee";
    sentence1 = "Hello, World!";
    sentence2 = "I am Mentee!!";
    imgsrc =
      " https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg";
  }
  console.log(userid);
  console.log(usertype);
  console.log(imgsrc);

  // Fully Implemented Code
  let img = (
    <div style={{ marginLeft: "5%" }}>
      <Image
        alt="Introduction image load failed."
        src={imgsrc}
        width="90px"
        height="95px"
      />
      <figcaption style={{ margin: "1% 0% 0% 9%" }}>
        <Tag
          icon={<CheckCircleOutlined />}
          style={{ cursor: "pointer" }}
          color={userColor(usertype)}
        >
          {usertype}
        </Tag>
      </figcaption>
    </div>
  );

  let displaymentor = checkDisplay(usertype, "Mentor");
  let displaymentee = checkDisplay(usertype, "Mentee");
  let src = (
    <div>
      <div style={myprofileStyle}>
        <h3
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            marginLeft: "3.5%",
          }}
        >
          My Profile
        </h3>
      </div>
      <div style={introSection}>
        <div style={introductionStyle}>
          {img}
          <div style={informationStyle}>
            <div style={{ margin: "4% 0% 0% 3.5%" }}>
              <h3>{sentence1}</h3>
              <h3>{sentence2}</h3>
            </div>

            <div style={checkDisplay(usertype, "Mentor")}>
              <Tag
                icon={<HeartOutlined />}
                style={snsiconStyle("0%")}
                color="red"
              >
                11.7k Followers
              </Tag>
              <Tag
                icon={<FacebookOutlined />}
                style={snsiconStyle("23%")}
                color="blue"
              >
                Facebook
              </Tag>
              <Tag
                icon={<InstagramOutlined />}
                style={snsiconStyle("40.5%")}
                color="#e95950"
              >
                Instagram
              </Tag>
              <Tag
                icon={<YoutubeOutlined />}
                style={snsiconStyle("58%")}
                color="#CC0000"
              >
                Youtube
              </Tag>
            </div>

            <div style={checkDisplay(usertype, "Mentee")}>
              <Tag
                icon={<FacebookOutlined />}
                style={snsiconStyle("0%")}
                color="blue"
              >
                Facebook
              </Tag>
              <Tag
                icon={<InstagramOutlined />}
                style={snsiconStyle("17.5%")}
                color="#e95950"
              >
                Instagram
              </Tag>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return src;
}
