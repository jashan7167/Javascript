//Dateobjects = objects that contains values that represent dates and times these date objects can be changed and formatted

const date = new Date(); //no arguments

console.log(date);

//Date(year,month,day,hours,minutes,seconds,milliseconds)
const date1 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(date1);

const date2 = new Date("2024-01-01T02:03:04.005Z");

console.log(date2);

const date3 = new Date(0); //0 milliseconds from 1st jan 1970
console.log(date3);

const date4 = new Date(1000000000); //1000 milliseconds from 1st jan 1970

console.log(date4);

const year = date.getFullYear();
const month = date.getMonth();
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = date.getDate();
const min = date.getMinutes();
const hour = date.getHours();
const sec = date.getSeconds();
console.log(year, months[month]);
console.log(day);
console.log(min);
console.log(hour);
console.log(sec);

//setters
const date6 = new Date();
const year1 = date6.setFullYear(2022);
const month1 = date6.setMonth(1);
const day1 = date6.setDate(20);
const min1 = date6.setMinutes(45);
const hour1 = date6.setHours(1);
const sec1 = date6.setSeconds(20);

//compare the dates
const date7 = new Date("2023-12-31");
const date8 = new Date("2024-01-01");

if (date8 > date7) {
  console.log(date8 + " is greater than " + date7);
  console.log("happy new year");
}
