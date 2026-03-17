import { resolve } from "node:dns";

//Function Sum
function sum(a: number, b: number):number{
    return  a+b;
}

// Function Multiply
const multiply = (a: number, b:number): number => a*b;

// Print 
function greet(name: string, roles: string="Guest"){
    console.log(`Hello ${name}, your role is ${roles}`);
}

// Advance
const delay =(ms: number)=> new Promise(resolve=> setTimeout(resolve,ms));
async function delayPrint(msg: string, time: number): Promise<void> {
    await delay(time);
    console.log(msg);
}