import { Renderer } from "./modules/renderer.js";

const root = document.querySelector('#root');

const renderer = new Renderer(root);

renderer.render();