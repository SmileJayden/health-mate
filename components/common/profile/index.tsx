import ProfileImage from "@components/common/profile/profileImage";
import {
  HeartOutlined,
  InstagramOutlined,
  FacebookOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Tag } from "antd";
import { ReactNode } from "react";
import styles from "./index.module.scss";

export enum MemberType {
  MENTOR = "mentor",
  MENTEE = "mentee",
  NULL = "null",
}

export type ProfileType = {
  memberType: MemberType;
  imgSrc: string;
  name: string;
  age: number;
  location: string;
  description: string;
};

type TagItem = {
  key: string;
  color: string;
  icon: ReactNode;
};

export default function Profile(props: ProfileType) {
  const props_imgSrc =
    props.memberType === MemberType.MENTOR
      ? "https://blog.kakaocdn.net/dn/bRWTvw/btq7xTtqI5I/t7v7FErxGH5kVkdghkDBq1/img.png"
      : "https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg";
  const profileColor =
    props.memberType === MemberType.MENTOR ? "green" : "gray";
  const props_description = "Hello, World! I'm a mentor. My name is ABC.";

  const tagItems: TagItem[] = [
    { key: "11.7k Followers", color: "red", icon: <HeartOutlined /> },
    { key: "Facebook", color: "blue", icon: <FacebookOutlined /> },
    { key: "Instagram", color: "#F56040", icon: <InstagramOutlined /> },
    { key: "Youtube", color: "#CC0000", icon: <YoutubeOutlined /> },
  ];

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>My Profile</h3>
      </div>

      <div className={styles.rightBody}>
        <ProfileImage
          imgSrc={props_imgSrc}
          memberType={props.memberType}
          color={profileColor}
        />

        <div className={styles.profile}>
          <h3 className={styles.text}>{props_description}</h3>

          <div className={styles.icons}>
            {tagItems.map((tagItem, idx) => {
              return (
                <Tag icon={tagItem.icon} color={tagItem.color} key={idx}>
                  {tagItem.key}
                </Tag>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
