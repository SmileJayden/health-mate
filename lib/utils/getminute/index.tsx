export default function GetMinute(date: string) {
  const splitted = date.split(" ", 5);
  const [hour, minute, second] = splitted[4].split(":", 3);

  return (
    (Number(hour) == 0
      ? "00"
      : Number(hour) <= 12
      ? Number(hour).toString()
      : (Number(hour) - 12).toString()) +
    ":" +
    minute +
    " " +
    (Number(hour) < 12 ? "AM" : "PM")
  );

  return minute;
}
