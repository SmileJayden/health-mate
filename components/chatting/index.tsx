import { useRouter } from "next/router";
import Paths from "@lib/paths";
import {
  ArrowLeftOutlined,
  PlusSquareOutlined,
  SmileOutlined,
  NumberOutlined,
} from "@ant-design/icons";
import { Input } from "antd";
import ChatMessage from "@components/chatting/chatMessage";
import styles from "./index.module.scss";

type Props = {
  user: any;
  friend: any;
  chats: any;
};

export default function ChatRoom(props: Props) {
  const router = useRouter();
  const href = Paths.CHATTING;
  const handleClick = (e) => {
    e.preventDefault();
    router.push(href);
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.circle} onClick={handleClick}>
          <ArrowLeftOutlined className={styles.icon} />
        </div>
        <p className={styles.text}>{props.friend.name}</p>
      </div>
      <ChatMessage
        user={props.user}
        friend={props.friend}
        chats={props.chats}
      />
      <div className={styles.footer}>
        <div className={styles.attach}>
          <PlusSquareOutlined className={styles.icon} />
        </div>
        <Input className={styles.input} />
        <div className={styles.emoticon}>
          <SmileOutlined className={styles.icon} />
        </div>
        <div className={styles.poundKey}>
          <NumberOutlined className={styles.icon} />
        </div>
      </div>
    </div>
  );
}
