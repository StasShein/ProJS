import { Renderer } from "./modules/renderer.js";

const root = document.querySelector('#root');

const renderer = new Renderer(root);

renderer.render();

const el = document.createElement('h1');
el.innerText = 'New Element';

renderer.append(el)