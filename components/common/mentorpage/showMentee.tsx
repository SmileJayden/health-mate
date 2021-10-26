import { ProfileType } from "@components/common/profile";
import MenteeProfile from "@components/common/mentorpage/menteeProfile";
import { Image } from "antd";
import styles from "./index.module.scss";

export default function ShowMentee(props: ProfileType) {
  return (
    <div>
      <div className={styles.basic}>
        <Image
          alt="Mentee Image load failed."
          src={props.imgSrc}
          className={styles.image}
        ></Image>

        <MenteeProfile
          name={props.name}
          age={props.age}
          location={props.location}
        ></MenteeProfile>
      </div>

      <div className={styles.description}>{props.description}</div>
    </div>
  );
}
