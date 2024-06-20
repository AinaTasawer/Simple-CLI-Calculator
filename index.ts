#!/usr/bin/env node

import inquirer from "inquirer";

const answer = await inquirer.prompt([
  { message: "Enter first number", type: "number", name: "FirstNum" },
  { message: "Enter second number", type: "number", name: "SecondNum" },
  {
    message: "Select one of the operator to perform an action",
    type: "list",
    name: "Operator",
    choices: ["Addition", "Substraction", "Multiplication", "Division"],
  },
]);

// Conditional statements

if (answer.Operator === "Addition") {
  console.log(`Your value is ${answer.FirstNum + answer.SecondNum}`);
} else if (answer.Operator === "Substraction") {
  console.log(`Your value is ${answer.FirstNum - answer.SecondNum}`);
} else if (answer.Operator === "Multiplication") {
  console.log(`Your value is ${answer.FirstNum * answer.SecondNum}`);
} else if (answer.Operator === "Division") {
  console.log(`Your value is ${answer.FirstNum / answer.SecondNum}`);
} else {
  console.log("Please select valid operator");
}
