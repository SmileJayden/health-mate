import { Image, Tag } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";
import { MemberType } from "@components/common/profile/index";

type Props = {
  imgSrc: string;
  color: string;
  memberType: MemberType;
};

export default function ProfileImage(props: Props) {
  return (
    <div style={{ marginLeft: "5%" }}>
      <Image
        alt="Introduction image load failed."
        src={props.imgSrc}
        width="90px"
        height="95px"
      />
      <figcaption style={{ margin: "1% 0% 0% 9%" }}>
        <Tag
          icon={<CheckCircleOutlined />}
          style={{ cursor: "pointer" }}
          color={props.color}
        >
          {props.memberType}
        </Tag>
      </figcaption>
    </div>
  );
}
