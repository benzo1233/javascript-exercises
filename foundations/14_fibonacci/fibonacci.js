const fibonacci = function(nums) {
    nums = Number(nums);
    if (nums < 0) return "OOPS";
    if (nums <= 1) return nums;
    
    let prev2 = 0;
    let prev1 = 1;

    for (let i = 2; i <= nums; i++) {
        const curr = prev2 + prev1;
        prev2 = prev1;
        prev1 = curr;
    }

    return prev1;
};


//fib is sum of prev two, e.g. 0,1 -> 1,1,2,3,5,8,13

// Do not edit below this line
module.exports = fibonacci;
