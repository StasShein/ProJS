import { VALID_SYMBOLS, ACTIONS } from './constant.js';

export class Calculator{
    #firstNumber = '';
    #secondNumber = '';
    #action = '';

    setSign(symbol){
        const symbolStr = String(symbol)

        if(!VALID_SYMBOLS.test(symbolStr)){
            return this.getCurrentString();
        }

        if(ACTIONS.test(symbol) && !this.#secondNumber){
            this.#action = symbol;
            return this.getCurrentString();
        }

        if(!ACTIONS.test(symbol) && !this.#action){
            this.#firstNumber += symbol;
            return this.getCurrentString();
        }

        if(!ACTIONS.test(symbol) && this.#action){
            this.#secondNumber += symbol;
            return this.getCurrentString();
        }

    }

    getCurrentString(){
        return `${this.#firstNumber} ${this.#action} ${this.#secondNumber}`;

    }

    calculate(){
        const leftOperand = +this.#firstNumber
        const rightOperand = +this.#secondNumber

        const actions = {
            '+':(a,b) => a + b,
            '-':(a,b) => a - b,
            '*':(a,b) => a * b,
            '/':(a,b) => a / b,
        }

        return actions[this.#action](leftOperand,rightOperand);
    }
}