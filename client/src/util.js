import moment from "moment";

export function dateFormat(date) {
  const monthNames = {
    1: "January",
    2: "February",
    3: "March",
    4: "April",
    5: "May",
    6: "June",
    7: "July",
    8: "August",
    9: "September",
    10: "October",
    11: "November",
    12: "December"
  }

  // Parse and assign values
  let dates = date.split(' ')[0];
  const year = dates.split('-')[0];
  const month = dates.split('-')[1];
  const day = dates.split('-')[2];

  return `${monthNames[month]} ${day}, ${year}`
}

export function timeFormat(time) {
  let times = time.split(' ')[1];
  const hour = times.split(':')[0];
  const minute = times.split(':')[1];

  if (hour === '12') return `${hour}:${minute}pm`
  else if (parseInt(hour) > 12) return `${hour - 12}:${minute}pm`
  else return `${hour - 0}:${minute}am`
}

export const formatDatetime = date => {
  const timezoneOffset = new Date().getTimezoneOffset();

  return moment(date).add(timezoneOffset, 'm').toDate().toLocaleString()
}