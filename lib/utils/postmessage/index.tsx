import firebase from "firebase/app";
import CollectionName from "@lib/firebase/collections";

export default async function PostMessage(
  userId: string,
  friendId: string,
  message: string,
  chatNum: number = 0
) {
  const targetChat = await firebase
    .firestore()
    .collection(CollectionName.CHATS)
    .where("personA", "==", userId)
    .where("personB", "==", friendId)
    .limit(1)
    .get();

  const chatPathId = targetChat.docs[0].id;

  const chatRef = await firebase
    .firestore()
    .collection(CollectionName.CHATS)
    .doc(chatPathId);

  chatRef.update({
    [`chat${chatNum + 1}`]: message,
    [`time${chatNum + 1}`]: new Date(),
    [`chat${chatNum + 1}Id`]: userId,
    chatNum: chatNum + 1,
  });
}
