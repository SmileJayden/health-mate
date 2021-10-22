// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { Image, Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { gray } from "@ant-design/colors";

const introductionDiv = {
  borderBottom: "1px solid #f0f0f0",
};

const introductionStyle = {
  display: "flex",
  margin: "2% 0% 0% 1%",
};

const imageintroStyle = {
  margin: "0% 0% 0% 5%",
};

const textintroStyle = {
  margin: "3.5% 0% 0% 2.5%",
};

const ismentorStyle = {
  margin: "0% 0% 0.5% 7%",
};

export function Introduction(userid: string) {
  //https://ant.design/components/card/#
  let src = (
    <div style={introductionDiv}>
      <div style={introductionStyle}>
        <div style={imageintroStyle}>
          <Image
            alt="Introduction image load failed."
            src="https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png"
            width="90px"
          />
        </div>
        <div style={textintroStyle}>
          <h3>Hello, World!</h3>
          <h3>나랑 같이 운동할 사람?</h3>
        </div>
      </div>
      <div style={ismentorStyle}>
        <Tag icon={<CheckCircleOutlined />} color="success">
          Mentor
        </Tag>
      </div>
    </div>
  );

  return src;
}
