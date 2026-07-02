const leapYears = function(year) {
    // if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {

    //     return true;
    // } else {
    //     return false
    // }

    const divisibleBy4 = year % 4 === 0;
    const divisibleBy100 = year % 100 === 0;
    const divisibleBy400 = year % 400 === 0;

    return (divisibleBy4 && !divisibleBy100) || divisibleBy400;
};
// leaping year is every 4 or 400 years
// considered non-leap every 100 years

// Do not edit below this line
module.exports = leapYears;
