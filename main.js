#!/usr/bin/env node
import inquirer from "inquirer";
let myBalance = 10000;
let mypin = 222111;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin code!!!",
    type: "number",
});
if (pinAnswer.pin === mypin) {
    console.log("your pin is correct!!");
    let operationAnswer = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "Fast cash", "check balance"],
        },
    ]);
    // if user withdraw
    if (operationAnswer.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter your amount",
                type: "number",
            },
        ]);
        if (amountAnswer.amount <= myBalance) {
            let balance = myBalance - amountAnswer.amount;
            console.log(`The remainig balance is ${balance}`);
        }
        else {
            console.log(`You have Insufficient balance`);
        }
    }
    // if user select fast cash
    else if (operationAnswer.operation === "Fast cash") {
        let FastcashAnswer = await inquirer.prompt([
            {
                name: "amount",
                type: "list",
                choices: ["1000", "3000", "5000", "15000"],
            },
        ]);
        if (FastcashAnswer.amount <= myBalance) {
            let balance2 = myBalance - FastcashAnswer.amount;
            console.log(`the remaining balance is ${balance2}`);
        }
        else {
            console.log(`you have insufficient amount`);
        }
    }
    else if (operationAnswer.operation === "check balance") {
        console.log(myBalance);
    }
}
else {
    console.log("Your pin is incorrect!!");
}
