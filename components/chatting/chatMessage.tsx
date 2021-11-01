import ShowMyChat from "@components/chatting/showMyChat";
import ShowFriendChat from "@components/chatting/showFriendChat";
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

export type Chats = {
  msg: string;
  date: string;
  type: ChatType;
};

export default function ChatMessage(props: Props) {
  let message;
  const chats: Chats[] = [];

  for (let i = 1; i <= props.chats.chatNum; i++) {
    message = {
      msg: props.chats["chat" + i.toString()],
      date: props.chats["time" + i.toString()],
    };
    const chatId = props.chats["chat" + i.toString() + "Id"];
    if (props.user.userId === chatId) {
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
            {chat.type === ChatType.MY && <ShowMyChat chat={chat} key={idx} />}
            {chat.type === ChatType.YOU && (
              <ShowFriendChat chat={chat} friend={props.friend} key={idx} />
            )}
          </div>
        );
      })}
    </div>
  );
}
