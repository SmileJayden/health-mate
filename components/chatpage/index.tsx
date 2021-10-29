import type { NextPage } from "next";
import Link from "next/link";
import Paths from "lib/paths";
import styles from "./index.module.scss";

export default function ChatPage() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p className={styles.text}>Chats</p>
      </div>
      <Link href={Paths.CHATROOM}>aa</Link>
    </div>
  );
}
