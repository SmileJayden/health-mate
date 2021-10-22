// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const introductionDiv = {
  borderBottom: "1px solid black",
};

const introductionStyle = {
  display: "flex",
  margin: "2% 0% 2% 4%",
};

const imageintroStyle = {
  margin: "0% 0% 0% 5%",
};

const textintroStyle = {
  margin: "2.5% 0% 3% 2.5%",
};

export function Introduction(userid: string) {
  //https://ant.design/components/card/#
  let src = (
    <div style={introductionDiv}>
      <div style={introductionStyle}>
        <div style={imageintroStyle}>
          <img
            alt="Introduction image load failed."
            src="https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png"
            height="90px"
          />
        </div>

        <div style={textintroStyle}>
          <h3>안녕하세요 운동을 좋아하는 XXX입니다.</h3>
          <h3>저와 함께 1일 1운동을 할 사람을 구합니다.</h3>
        </div>
      </div>
    </div>
  );

  return src;
}
