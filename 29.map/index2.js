const students = ["Spongebob", "Patrick", "Squidward", "Sandy", "Mr.Krabs"];
const studentsUpperCase = students.map(upperCase);
const studentsLowerCase = students.map(lowerCase);
function upperCase(element) {
  return element.toUpperCase();
}

function lowerCase(element) {
  return element.toLowerCase();
}

const dates = ["2024-1-10", "2025-2-20", "2026-3-30", "2027-4-40", "2028-5-50"];

function formatDates(element) {
  const parts = element.split("-"); // - is the separator
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(formatDates);
console.log(formattedDates);
