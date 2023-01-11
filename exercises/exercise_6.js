/**
 * Write a program that asks the user to enter their age and whether they are a citizen of the United States. Use the && operator to check whether the user is at least 18 years old and a citizen of the United States. If the user is at least 18 years old and a citizen of the United States, print a message saying "You are eligible to vote." If the user is not at least 18 years old or is not a citizen of the United States, print a message saying "You are not eligible to vote." This exercise requires the user to use the && operator to check whether two conditions are true: that the user is at least 18 years old and a citizen of the United States.
 */

const fs = require('fs');

const prompt = msg => {
    fs.writeSync(1, String(msg));
    let s = '', buf = Buffer.alloc(1);
    while(buf[0] - 10 && buf[0] - 13)
      s += buf, fs.readSync(0, buf, 0, 1, 0);
    return s.slice(1);
};

const result = prompt('Enter your age, true or false if you are a US citizen (split by a comma): ');
const values = result.split(", ");
