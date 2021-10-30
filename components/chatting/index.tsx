import React from "react";
import { useRouter } from "next/router";
import Paths from "@lib/paths";
import {
  ArrowLeftOutlined,
  PlusSquareOutlined,
  SmileOutlined,
  NumberOutlined,
  RightSquareFilled,
} from "@ant-design/icons";
import { Input } from "antd";
import ChatMessage from "@components/chatting/chatMessage";
import PostMessage from "@lib/utils/postmessage";
import styles from "./index.module.scss";

const { TextArea } = Input;

type Props = {
  user: any;
  friend: any;
  chats: any;
};

export default class ChatRoom extends React.Component {
  constructor(props: Props) {
    super(props);

    this.state = {
      message: "",
    };
  }

  handleCircle = (e) => {
    e.preventDefault();
  };

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  };

  handleEnter = (e) => {
    if ((e.keyCode === 13 && !e.shiftKey) || e.type === "click") {
      e.preventDefault();
      PostMessage(
        this.props.user.userId,
        this.props.friend.userId,
        this.state.message,
        this.props.chats.chatNum
      );
      this.setState({ message: "" });
    }
  };

  render() {
    return (
      <div className={styles.container}>
        <div className={styles.title}>
          <div className={styles.circle} onClick={this.handleCircle}>
            <ArrowLeftOutlined className={styles.icon} />
          </div>
          <p className={styles.text}>{this.props.friend.name}</p>
        </div>

        <ChatMessage
          user={this.props.user}
          friend={this.props.friend}
          chats={this.props.chats}
        />

        <div className={styles.footer}>
          <div className={styles.attach}>
            <PlusSquareOutlined className={styles.icon} />
          </div>

          <TextArea
            className={styles.input}
            value={this.state.message}
            onChange={this.handleChange}
            onKeyDown={this.handleEnter}
            autoFocus="autofocus"
          />

          <div className={styles.emoticon}>
            <SmileOutlined className={styles.icon} />
          </div>
          {this.state.message !== "" && (
            <div className={styles.rightKey} onClick={this.handleEnter}>
              <RightSquareFilled className={styles.icon} />
            </div>
          )}
          {this.state.message === "" && (
            <div className={styles.poundKey}>
              <NumberOutlined className={styles.icon} />
            </div>
          )}
        </div>
      </div>
    );
  }
}
