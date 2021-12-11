import styles from "./index.module.scss";
import { useState } from "react";
import SearchBox from "@components/search/searchBox";
import GetResult from "@components/search/getResult";
import useGetProfile from "@lib/utils/getprofile";
import { MemberType } from "@components/common/profile";

type Props = {
  userId: string;
};

export default function SearchPage(props: Props) {
  const [keyword, setKeyword] = useState("");
  const [value, loading, error] = useGetProfile(props.userId);
  const flag = loading || error || !value || value.docs.length === 0;
  const profile = flag
    ? { memberType: MemberType.MENTEE }
    : value.docs[0].data();

  const eventHandler = (message: string) => {
    setKeyword(message);
  };

  return (
    <div className={styles.container}>
      <SearchBox onChange={eventHandler} />
      <GetResult keyword={keyword} memberType={profile.memberType} />
    </div>
  );
}
