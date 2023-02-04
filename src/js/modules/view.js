class Calculator {
    #buttons;    
    #root

    constructor(buttons) {
        this.buttons = buttons;
        this.root = root;
    }

    #getButton(text) {
        const btn = document.createElement('button');
        btn.classList.add('button')
        btn.innerText = text;
    }

    #getDisplay(text) {
        const display = document.createElement('div');
        display.classList.add('display');
        display.innerText = text;

        return display;
    }

    #getCalculator() {
        const calculator = document.createElement('div');
        calculator.classList.add('calculator');
        const calculatorDisplay = document.createElement('div');
        calculatorDisplay.classList.add('calculator_display');

        const display = this.#getDisplay('0');
        calculatorDisplay.appendChild(display);
        calculator.appendChild(calculatorDisplay);

        const calculatorActions = document.createElement('div');
        calculatorActions.classList.add('calculator_actions');

        const actions = this.#buttons.map(btn => this.#getButton(btn));
        calculatorActions.append(...actions);
        calculator.appendChild(calculatorActions);



        return calculator
}

render(){
    const calculator = this.#getCalculator();
    this.#root.replaceChildren(calculator);
}

}
