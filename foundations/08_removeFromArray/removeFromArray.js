const removeFromArray = function(arr, ...args) {
    let results = [];
    arr.forEach((item) => {
        if (!args.includes(item)) {
            results.push(item);
        }
    });

    return results;

    // let results = []
    // for (let i = 0; i < arr.length; i++) {
    //     if (!args.includes(arr[i])) {
    //         results.push(arr[i])
    //     }
    // }
    // return results
};

// Do not edit below this line
module.exports = removeFromArray;
