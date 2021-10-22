// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Card, Image } from "antd";

const { Meta } = Card;

export function Showmate(userid: string) {
  //https://ant.design/components/card/#
  let image = (
    <Image
      alt="example"
      src="https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png"
      width="120px"
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
