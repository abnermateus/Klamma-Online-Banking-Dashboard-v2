import moment from "moment";

export class DateUtils {
  static isToday = (date: string) => {
    return moment(date, "DD/MM/YYYY").isSame(moment(), "day");
  };

  static isYesterday = (date: string) => {
    return moment(date, "DD/MM/YYYY").isSame(moment().subtract(1, "day"), "day");
  };
}
