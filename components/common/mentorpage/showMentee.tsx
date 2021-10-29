<<<<<<< HEAD
import MyMentee from "@components/common/mentorpage/myMentee";
import GetProfile from "@lib/utils/getprofile";

type Props = {
  userId: string;
};

export default function ShowMentee(props: Props) {
  const [value, loading, error] = GetProfile(props.userId);

  return (
    <div>
      {(loading || error || !value || value.docs.length == 0) && <div></div>}
      {!(loading || error || !value || value.docs.length == 0) && (
        <MyMentee profile={value.docs[0].data()} />
      )}
=======
import MenteeProfile from "@components/common/mentorpage/menteeProfile";
import styles from "./index.module.scss";

type Props = {
  imgSrc: string;
  name: string;
  age: number;
  location: string;
  description: string;
};

export default function ShowMentee(props: Props) {
  return (
    <div>
      <div className={styles.basic}>
        <img
          alt="Mentee Image load failed."
          src={props.imgSrc}
          className={styles.image}
        ></img>

        <MenteeProfile
          name={props.name}
          age={props.age}
          location={props.location}
        ></MenteeProfile>
      </div>

      <div className={styles.description}>{props.description}</div>
>>>>>>> 747d4fdea908ba5462c427dae798e0851511ff8d
    </div>
  );
}
