import TimeAgo from "javascript-time-ago";
import ReactTimeAgo from "react-time-ago";

import en from "javascript-time-ago/locale/en.json";
import ru from "javascript-time-ago/locale/ru.json";

TimeAgo.addDefaultLocale(en);
TimeAgo.addLocale(ru);

type CustomTimeAgoProps = {
  prefixText?: string;
  date: number | Date;
  postfixText?: string;
};

export default function CustomTimeAgo({
  prefixText,
  date,
  postfixText,
}: CustomTimeAgoProps) {
  return (
    <div>
      {prefixText} <ReactTimeAgo date={date} locale="en-US" /> {postfixText}
    </div>
  );
}
