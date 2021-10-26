import ShowNull from "@components/common/mentorpage/showNull";
import ShowMentee from "@components/common/mentorpage/showMentee";
import { MemberType, ProfileType } from "@components/common/profile";
import { Card } from "antd";
import styles from "./index.module.scss";

export default function MentorPage(props: ProfileType) {
  // TODO construct Mentee information using Mentor props
  const tmp: ProfileType = {
    membertype: MemberType.MENTEE,
    imgSrc:
      "https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg",
    name: "Gyuho Suh",
    age: 25,
    location: "Seoul",
    description: "I like to exercise every day. I'm finding a new health mate.",
  };
  const nouser: ProfileType = { membertype: MemberType.NULL };
  const informations: ProfileType[] = [tmp, tmp, tmp, nouser];

  return (
    <Card title="My Mentees">
      {informations.map((menteeInfo, idx) => {
        return (
          <Card.Grid className={styles.container} key={idx}>
            {menteeInfo.membertype === MemberType.NULL && (
              <ShowNull name={props.name}></ShowNull>
            )}

            {menteeInfo.membertype === MemberType.MENTEE && (
              <ShowMentee
                membertype={menteeInfo.membertype}
                imgSrc={menteeInfo.imgSrc}
                name={menteeInfo.name}
                age={menteeInfo.age}
                location={menteeInfo.location}
                description={menteeInfo.description}
              ></ShowMentee>
            )}
          </Card.Grid>
        );
      })}
    </Card>
  );
}
