// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Card, Image } from "antd";

export function Showmentee(userid: string) {
  // data loading
  let usertype = "Mentee";
  let imgsrc =
    "https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg";

  if (usertype != "Mentee") {
    throw new Error("Usertype is not a Mentee!");
  }
  let image = (
    <Image
      alt="Mentee image load failed."
      src={imgsrc}
      width="120px"
      height="127px"
    />
  );

  let src = (
    <div style={{ height: "192px" }}>
      <div style={{ display: "flex" }}>
        {image}
        <h3>My name is ABC.</h3>
      </div>
    </div>
  );

  return src;
}

export function Showmentor(userid: string) {
  // data loading
  let usertype = "Mentor";
  let imgsrc =
    "https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png";

  if (usertype != "Mentor") {
    throw new Error("Usertype is not a Mentor!");
  }
  let image = (
    <Image
      alt="Mentor image load failed."
      src={imgsrc}
      width="120px"
      height="127px"
    />
  );

  let src = (
    <div style={{ height: "192px" }}>
      <div style={{ display: "flex" }}>
        {image}
        <h3>I am your Mentor.</h3>
      </div>
    </div>
  );

  return src;
}

export function Showanalytics(userid: string, analyticstype: string) {
  let imgsrc = "https://walk4life.info/sites/default/files/graph.png";
  let image = (
    <Image alt="Analytics image load failed." src={imgsrc} height="150px" />
  );

  let src = <div style={{ height: "192px" }}>{image}</div>;

  return src;
}
