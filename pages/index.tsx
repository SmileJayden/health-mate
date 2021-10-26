import type { NextPage } from "next";
import { Card, Typography } from "antd";
import Profile, { MemberType } from "@components/common/profile";
import MentorPage from "@components/common/mentorpage";
import MenteePage from "@components/common/menteepage";
import styles from "./index.module.scss";

const Home: NextPage = () => {
  const name = "Jayden";
  const membertype = MemberType.MENTOR;

  const homepage =
    membertype === MemberType.MENTOR ? (
      <MentorPage name={name}></MentorPage>
    ) : (
      <MenteePage name={name}></MenteePage>
    );

  return (
    <div className={styles.container}>
      <Profile name={name} memberType={membertype}></Profile>
      {homepage}
    </div>
  );
};

export default Home;
