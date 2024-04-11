//throw a user-defined error using the throw keyword

try {
  const dividend = window.prompt("Enter a dividend");
  const divisor = window.prompt("Enter a divisor");
  if (divisor == 0) {
    throw new Error("You cant divide by zero");
  }
  if (isNaN(dividend) || isNaN(divisor)) {
    throw new Error("Values have to be number");
  }

  const result = dividend / divisor;
  console.log(result);
} catch (error) {
  console.error(error);
}
