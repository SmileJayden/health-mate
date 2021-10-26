import MenteeProfile from "@components/common/mentorpage/menteeProfile";
import { ProfileType } from "@components/common/profile";
import { Image } from "antd";
import styles from "./index.module.scss";

export default function ShowNull(props: ProfileType) {
  return <div>{props.name}</div>;
}
