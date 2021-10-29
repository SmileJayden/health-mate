import styles from "./index.module.scss";

enum ChatType {
  MY = "my",
  YOU = "you",
}

type Props = {
  user: any;
  friend: any;
  chats: any;
};

type Chats = {
  msg: string;
  type: ChatType;
};

export default function ChatMessage(props: Props) {
  let message;
  const chats: Chats[] = [];

  for (let i = 1; i <= props.chats.chatNum; i++) {
    message = { msg: props.chats["chat" + i.toString()] };
    if (
      (props.chats["type" + i.toString()] === "A" &&
        props.user.userId === props.chats.personA) ||
      (props.chats["type" + i.toString()] === "B" &&
        props.user.userId === props.chats.personB)
    ) {
      message.type = ChatType.MY;
    } else {
      message.type = ChatType.YOU;
    }
    chats[props.chats.chatNum - i] = message;
  }

  return (
    <div className={styles.chats}>
      {chats.map((chat, idx) => {
        return (
          <div>
            <p className={styles.chat}>{chat.msg}</p>
          </div>
        );
      })}
    </div>
  );
}
