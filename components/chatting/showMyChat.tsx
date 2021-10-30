import { ChatType } from "@components/chatting/chatMessage";
import GetMinute from "@lib/utils/getminute";
import styles from "./index.module.scss";

type Props = {
  chat: ChatType;
};

export default function showMyChat(props: Props) {
  return (
    <div className={styles.myChat}>
      <div className={styles.triangle}></div>
      <div className={styles.chat}>{props.chat.msg}</div>
      <div className={styles.time}>{GetMinute(props.chat.date)}</div>
    </div>
  );
}
