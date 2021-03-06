import useGetProfile from "@lib/utils/getprofile";
import ChatData from "@components/chatting/chatData";

type Props = {
  user: any;
  friendId: string;
};

export default function FriendProfile(props: Props) {
  const [value, loading, error] = useGetProfile(props.friendId);
  const flag = loading || error || !value || value.docs.length === 0;

  return (
    <div>
      {flag ? (
        <div></div>
      ) : (
        <ChatData user={props.user} friend={value.docs[0].data()} />
      )}
    </div>
  );

  return <div>{typeof props.user}</div>;
}
