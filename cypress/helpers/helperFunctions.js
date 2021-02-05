const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

export function getDay() {
  let day = tomorrow.getDate();
  if (day < 10) {
    day = `0${day}`;
  }
  return day;
}

export function getMonth() {
  let month = tomorrow.getMonth() + 1;
  if (month < 10) {
    month = `0${month}`;
  }
  return month;
}

export function getYear() {
  const year = tomorrow.getFullYear();
  return year;
}
