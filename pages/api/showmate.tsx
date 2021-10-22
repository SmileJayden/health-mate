// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Card, Image } from "antd";

export function Showmate(userid: string) {
  let usertype = "Mentee";
  let imgsrc =
    "https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg";

  let image = (
    <Image
      alt="User image load failed."
      src={imgsrc}
      width="120px"
      height="127px"
    />
  );

  let src = (
    <div>
      <div style={{ display: "flex" }}>
        {image}
        <h3>My name is ABC.</h3>
      </div>
      <h3>Hi, friend!</h3>
      <h3>Description</h3>
    </div>
  );

  return src;
}
