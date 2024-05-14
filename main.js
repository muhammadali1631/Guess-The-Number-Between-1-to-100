#! /usr/bin/env node
import inquirer from "inquirer";
console.log('Welcome to Guess the Number Game!');
console.log('I have selected a random number between 1 and 100. Try to guess it!');
let CPU = Math.floor(Math.random() * 100);
let condition = true;
let attempts = 1;
while (condition) {
    let user = await inquirer.prompt({
        name: "userInput",
        type: "number",
        message: "Guess the number Between 1 to 100"
    });
    if (user.userInput > CPU) {
        console.log("Too High! Try again");
    }
    else if (user.userInput < CPU) {
        console.log("Too Low! Try again");
    }
    else if (user.userInput === CPU) {
        console.log(`Congratulations! You guessed the number ${CPU} in ${attempts} attempts.`);
        condition = false;
    }
    attempts++;
}
