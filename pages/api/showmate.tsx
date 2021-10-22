// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Card, Image } from "antd";

const { Meta } = Card;

export function Showmate(width: number, userid: string) {
  //https://ant.design/components/card/#
  let src = (
    <Image
      alt="example"
      src="https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png"
      width={width}
    />
  );

  return src;
}
