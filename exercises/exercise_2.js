/*
    Exercise 2:
    Write a program that calculates the area of a circle given its radius. Use the formula area = pi * radius^2, where pi is approximately equal to 3.14. Print the result to the console.
*/

// I/O
const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};
// End I/O

const pi = 3.14;
function calculateCircleArea(radius) {
    return pi * (radius ** 2);
}

const radius = Number(prompt('Enter radius: '));
console.log(`Area: ${calculateCircleArea(radius)}`);
