/**
 * String reversal: Write a program that asks the user to enter a string and prints the string in reverse. Use a loop to solve this exercise.
 */

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

const result = prompt('Input a string: ');

function reverse(str) {
    let newStr = '';
    for (i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

console.log(reverse(result));