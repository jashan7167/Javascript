let day = 2;

switch (day) {
  case 1:
    console.log("day 1");
    break;
  case 2:
    console.log("day 2");
    break;
  case 3:
    console.log("day 3");
    break;
  case 4:
    console.log("day 4");
    break;
}

let testScore = 95;
let letterGrade = "";

switch (true) {
  case testScore >= 90:
    letterGrade = "A";
    break;
  case testScore >= 80:
    letterGrade = "B";
    break;
}

console.log(letterGrade);
