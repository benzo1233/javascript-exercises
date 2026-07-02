const convertToCelsius = function(f) {
  return Math.round(((f-32) * 5/9) * 10) / 10;
};

const convertToFahrenheit = function(c) {
  return Math.round(((c * 9/5) + 32) * 10) / 10;
};

// * 10 / 10 to round to one decimal place
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
