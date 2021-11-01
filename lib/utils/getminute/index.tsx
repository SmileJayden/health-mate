import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { FireStoreTimeStamp } from "@models/common";

export default function GetMinute(date: FireStoreTimeStamp) {
  return format(new Date(date.seconds * 1000), "a hh: mm ", {
    locale: ko,
  });
}
