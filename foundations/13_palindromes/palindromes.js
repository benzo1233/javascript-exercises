const palindromes = function (str) {
// '/i' makes regex case insensitive
  let cleaned = "";
  for (let i = 0; i < str.length; i++) {
    if (/[a-zA-Z0-9]/.test(str[i])) {
        cleaned += str[i].toLowerCase();
    }
  }
   
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
};

// Do not edit below this line
module.exports = palindromes;
