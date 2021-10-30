import firebase from "firebase/app";

export default function PostMessage(
  userId: string,
  friendId: string,
  message: string,
  chatNum: number
) {
  // TODO : Post Message
  // firebase 의 chats 데이터베이스에서
  // (personA, personB) = (min(userId, friendId), max(userId, friendId))에 해당되는 자료를 찾아서
  // (이유 : 데이터베이스 상에는 personA < personB가 되도록 정의해두었습니다.)
  // chat, type, time, chatNum 값을 업데이트를 해줘야 되는 상황입니다..

  console.log(message);
  console.log(Date());
}
