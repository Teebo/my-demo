#!/usr/bin/env node

const chalk = require('chalk');
const add = (a, b) => parseInt(a) + parseInt(b);
const processArgs = [...process.argv];
const [a, b] = processArgs.splice(2, 2)

if (!process.argv[2] || !process.argv[3]) {
  console.log(chalk.red("Insufficient number of arguments! Give two numbers please!"));
} else {
  console.log(chalk.green(`The sum of ${a} and ${b} is ${add(a, b)}`));
}