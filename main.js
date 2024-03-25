#! /usr/bin/env node
import inquirer from "inquirer";
const randomnumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    { name: "numberguessinggame",
        type: "number",
        massagge: "guess your number range from 1 to 6"
    },
]);
if (answers.numberguessinggame === "randomnumber") {
    console.log("congratulation");
}
else {
    console.log("plese try again");
}
