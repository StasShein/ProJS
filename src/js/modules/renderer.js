export class Renderer{

    #root
    #innerDOM

    constructor(root){
        this.#root = root
        const rootEl = document.createElement('div')
        rootEl.innerText = 'Hello from class';
        this.#innerDOM = rootEl;

    }

    render(){
        this.#root.appendChild(this.#innerDOM);
        
    }
    
    append(el, className){
        const parent = this.#innerDOM.querySelector(className) || this.#root

        parent.appendChild(el)
        this.#root.innerHTML = '';

        this.render();

    }
}