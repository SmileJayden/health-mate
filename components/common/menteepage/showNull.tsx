import { useRouter } from "next/router";
import Paths from "@lib/paths";
import { Card } from "antd";
import { PlusSquareOutlined } from "@ant-design/icons";
import styles from "./index.module.scss";
import { stringify } from "qs";

type Props = {
  userId: string;
};

export default function showNull(props: Props) {
  const router = useRouter();
  const href = Paths.SEARCH;
  const query = stringify({ userId: props.userId }, { addQueryPrefix: true });
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    router.push(href + query);
  };

  return (
    <Card
      title="My Mentor"
      className={styles.mentor}
      headStyle={{
        height: "60px",
        paddingLeft: "32px",
        paddingBottom: "0",
        borderTop: "0",
        borderBottom: "2px solid #d9d9d9",
        backgroundColor: "#fffbe6",
        fontSize: "18px",
      }}
      bodyStyle={{ padding: "2.5px 0 0 30px" }}
    >
      <Card.Grid className={styles.nullCard}>
        <div className={styles.null} onClick={handleClick}>
          <PlusSquareOutlined className={styles.icon} />
          <p className={styles.text}>Find New Mentor</p>
        </div>
      </Card.Grid>
    </Card>
  );
}
