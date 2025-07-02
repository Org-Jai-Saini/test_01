const prompt = require('prompt-sync')();

// Beginner Questions 1-10

// 1. Take a number and check if it's even or odd.
const number1 = parseInt(prompt("Enter a number to check even or odd:"));
if (number1 % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// 2. Input a number and check if it is positive, negative, or zero.

const number2 = parseInt(prompt("Enter another number to check if it's positive, negative, or zero:"));
if (number2 > 0) {
    console.log("Positive");
} else if (number2 < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}

// 3. Take two numbers and print the greater one.

console.log("Enter two numbers to find the greater one:");
const number3 = parseInt(prompt("Enter a first number:"));
const number4 = parseInt(prompt("Enter a second number:"));
if (number3 > number4) {
    console.log("Greater number is:", number3);
} else {
    console.log("Greater number is:", number4);
}

// 4. Input a number and check if it's divisible by 3 or not.

const number5 = parseInt(prompt("Enter a number to check if it's divisible by 3:"));
if (number5 % 3 === 0) {
    console.log("Divisible by 3");
} else {
    console.log("Not divisible by 3");
}


// 5. Input a number and check if it’s a multiple of 7 or not.

const number6 = parseInt(prompt("Enter a number to check if it's a multiple of 7:"));
if (number6 % 7 === 0) {
    console.log("Multiple of 7");
} else {
    console.log("Not a multiple of 7");
}

// 6. Input a character and check whether it's a vowel or consonant (assume lowercase).

const char = prompt("Enter a character to check if it's a vowel or consonant:").toLowerCase();
if ("aeiou".includes(char)) {
    console.log("Vowel");
} else {
    console.log("Consonant");
}

// 7. Input a number and check if it is between 10 and 50.

const number7 = parseInt(prompt("Enter a number to check if it's between 10 and 50:"));
if (number7 > 10 && number7 < 50) {
    console.log("Between 10 and 50");
} else {
    console.log("Not between 10 and 50");
}

// 8. Input a number and check if it is a 3-digit number.

const number8 = parseInt(prompt("Enter a number to check if it's a 3-digit number:"));
if (number8 >= 100 && number8 < 1000) {
    console.log("3-digit number");
} else {
    console.log("Not a 3-digit number");
}

// 9. Input age and check if the person is eligible for voting (≥18).

const age = parseInt(prompt("Enter your age to check if you're eligible for voting:"));
if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}

// 10. Input a temperature and print if it's Hot (>30), Moderate (15–30), or Cold (<15).

const temperature = parseInt(prompt("Enter the temperature to check if it's Hot, Moderate, or Cold:"));
if (temperature > 30) {
    console.log("Hot");
} else if (temperature >= 15 && temperature <= 30) {
    console.log("Moderate");
} else {
    console.log("Cold");
}
