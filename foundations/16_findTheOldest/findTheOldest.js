const findTheOldest = function(arr) {
    //given arr of obj
    // sort from oldest to youngest
    //get top or element [0]

    const des = arr.sort((a, b) => {
        ageB = (b.yearOfDeath || new Date().getFullYear()) - b.yearOfBirth;
        ageA = (a.yearOfDeath || new Date().getFullYear()) - a.yearOfBirth;
        return ageB - ageA;
    });

    return des[0];
};
    
// (b.yearOfDeath - b.yearOfBirth) - (a.yearOfDeath - a.yearOfBirth))
//         return des[0]
// Do not edit below this line
module.exports = findTheOldest;
