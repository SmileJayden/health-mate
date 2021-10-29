import { useRouter } from "next/router";
import Paths from "@lib/paths";
import ShowNull from "@components/common/mentorpage/showNull";
import ShowMentee from "@components/common/mentorpage/showMentee";
import { MemberType } from "@components/common/profile";
import { Card } from "antd";
<<<<<<< HEAD
import GetMentees from "@lib/utils/getmentees";
=======
>>>>>>> 747d4fdea908ba5462c427dae798e0851511ff8d
import styles from "./index.module.scss";

type Props = {
  userId: string;
};

export default function MentorPage(props: Props) {
<<<<<<< HEAD
  const router = useRouter();
  const nullUser = { memberType: MemberType.NULL };
  const informations = [nullUser, nullUser, nullUser, nullUser];

  const [value, loading, error] = GetMentees(props.userId);
  if (!(loading || error || !value)) {
    for (let i = 0; i < value.docs.length; i++) {
      informations[i] = {
        userId: value.docs[i].data().menteeId,
        memberType: MemberType.MENTEE,
      };
    }
    informations[value.docs.length] = nullUser;
    if (value.docs.length % 2 == 0)
      informations[value.docs.length + 1] = nullUser;
  }
=======
  // TODO construct Mentee information using props.userid
  const tmp: ProfileType = {
    userId: "userid000",
    imgSrc:
      "https://cdn.topstarnews.net/news/photo/201906/633567_329281_1014.jpg",
    name: "Gyuho Suh",
    age: 25,
    location: "Seoul",
    description: "I like to exercise every day. I'm finding a new health mate.",
    memberType: MemberType.MENTEE,
  };
  const nouser: ProfileType = { memberType: MemberType.NULL };
  const informations: ProfileType[] = [tmp, tmp, tmp, nouser];

  const router = useRouter();
>>>>>>> 747d4fdea908ba5462c427dae798e0851511ff8d

  return (
    <Card
      title="My Mentees"
      className={styles.container}
      headStyle={{
        height: "60px",
        paddingLeft: "32px",
        paddingBottom: "0",
        borderTop: "0",
        borderBottom: "2px solid #d9d9d9",
        backgroundColor: "#fffbe6",
        fontSize: "18px",
      }}
      bodyStyle={{ padding: "2.5px 0 18px 30px" }}
    >
      {informations.map((menteeInfo, idx) => {
        const href =
          menteeInfo.memberType === MemberType.NULL
            ? Paths.SEARCH
            : Paths.CHATTING;
        const handleClick = (e) => {
          e.preventDefault();
          router.push(href);
        };

        return (
          <div>
            {menteeInfo.memberType === MemberType.NULL && (
              <Card.Grid
                className={styles.nullCard}
                onClick={handleClick}
                key={idx}
              >
                <ShowNull userId={props.userId}></ShowNull>
              </Card.Grid>
            )}

            {menteeInfo.memberType === MemberType.MENTEE && (
              <Card.Grid
                className={styles.menteeCard}
                onClick={handleClick}
                key={idx}
              >
<<<<<<< HEAD
                <ShowMentee userId={menteeInfo.userId}></ShowMentee>
=======
                <ShowMentee
                  imgSrc={menteeInfo.imgSrc}
                  name={menteeInfo.name}
                  age={menteeInfo.age}
                  location={menteeInfo.location}
                  description={menteeInfo.description}
                ></ShowMentee>
>>>>>>> 747d4fdea908ba5462c427dae798e0851511ff8d
              </Card.Grid>
            )}
          </div>
        );
      })}
    </Card>
  );
}
