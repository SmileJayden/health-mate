import ProfileImage from "@components/common/profile/profileImgae";
import {
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { ReactNode } from "react";
import styles from "./index.module.scss";

console.log(styles);

export enum MemberType {
  MENTOR = "mentor",
  MENTEE = "mentee",
}

type Props = {
  memberType: MemberType;
  name: string;
};

type TagItem = {
  key: string;
  value: string;
  color: string;
  icon: ReactNode;
};

export default function Profile(props: Props) {
  const profileImgSrc =
    props.memberType === MemberType.MENTOR
      ? "https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png"
      : "https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg";
  const profileColor =
    props.memberType === MemberType.MENTOR ? "green" : "gray";

  const tagItems: TagItem[] = [
    {
      key: "이름",
      value: props.name,
      color: "red",
      icon: <InstagramOutlined />,
    },
    { key: "나이", value: "25", color: "blue", icon: <FacebookOutlined /> },
    { key: "성별", value: "남자", color: "green", icon: <YoutubeOutlined /> },
  ];

  return (
    <div className={styles.container}>
      <div>
        <h3 className={styles.title}>My Profile</h3>
        <ProfileImage
          imgSrc={profileImgSrc}
          memberType={props.memberType}
          color={profileColor}
        />
      </div>
      <div>
        {props.memberType === MemberType.MENTOR && <p>no i'm mentor</p>}
        {props.memberType === MemberType.MENTEE && <p>yes i'm mentee </p>}
      </div>

      {tagItems.map((tagItem, i) => {
        return (
          <Tag icon={tagItem.icon} color={tagItem.color} key={`profile-${i}`}>
            <p>{tagItem.key}</p>
            <span>{tagItem.value}</span>
          </Tag>
        );
      })}
    </div>
  );
}
