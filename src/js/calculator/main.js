import { Calculator } from './modules/calculator.js';

const calculator = new Calculator();

console.log(calculator.setSign('2'));
console.log(calculator.setSign('3'));
console.log(calculator.setSign('+'));
console.log(calculator.setSign('1'));
console.log(calculator.setSign('1'));
console.log(calculator.calculate());