/**
 * Write a program that asks the user to enter a number and checks whether it is positive, negative, or zero. Use the >, <, and == operators to compare the number to 0.
 */

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

const result = Number(prompt("Enter a number: "));

if (result > 0) {
    console.log("Positive!");
} else if (result < 0) {
    console.log("Negative!");
} else {
    console.log("Zero!");
}