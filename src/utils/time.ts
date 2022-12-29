import { format, formatDistance, intervalToDuration } from "date-fns";
import ja from "date-fns/locale/ja";

export const formatTimeStamp = (time: Date | null): string => {
  if (!time) {
    return "";
  }
  const now = new Date();
  const duration = intervalToDuration({ start: time, end: now });
  if (duration.weeks) {
    return format(time, "yyyy年M月d日", { locale: ja });
  }
  const distance = formatDistance(now, time, { locale: ja });
  return distance + "前";
};
