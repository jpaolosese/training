/**
 * Counting loop: Write a program that uses a loop to count from 1 to 10 and print the numbers to the console. Use a for loop, a while loop, and a do-while loop to solve this exercise.
 */

// for-loop
console.log("Counting for-loop");
for (i = 1; i <= 10; i++) {
    console.log(i);
}

// while-loop
let x = 1;

console.log("Counting while-loop");
while(x <= 10) {
    console.log(x);
    x++;
}

// do-while loop
console.log("Counting do-while loop");
let y = 0;

do {
    y++;
    console.log(y);
} while (y < 10)