import { ProfileType } from "@components/common/profile";
import styles from "./index.module.scss";

export default function MenteeProfile(props: ProfileType) {
  return (
    <div className={styles.info}>
      <p className={styles.name}>{props.name}</p>

      <ul className={styles.ul}>
        <li className={styles.li}>
          <span className={styles.span}>Age</span>
          &nbsp;&nbsp;{props.age}
        </li>

        <li className={styles.li}>
          <span className={styles.span}>Location</span>
          &nbsp;&nbsp;{props.location}
        </li>
      </ul>
    </div>
  );
}
