import { Image, Card } from "antd";
import styles from "./index.module.scss";

type Props = {
  name: string;
};

type MyAnalysis = any;

function WalkAnalysis(props: Props) {
  return <div>walking</div>;
}

function ArmAnalysis(props: Props) {
  return <div>arm training</div>;
}

export default function MenteePage(props: Props) {
  const myanalysis: MyAnalysis = [WalkAnalysis(props), ArmAnalysis(props)];

  return (
    <div>
      <Card title="My Mentor" className={styles.mentor}>
        <Card.Grid className={styles.info}></Card.Grid>
      </Card>
      <Card title="My Activity">
        {myanalysis.map((analysis, idx) => {
          return (
            <Card.Grid className={styles.container} key={idx}>
              {analysis}
            </Card.Grid>
          );
        })}
      </Card>
    </div>
  );
}
