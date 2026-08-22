
import './reset.css';
import './style.css';
import home from './script/module1.js';
import { meatPresent } from './script/module2.js';
import { aboutContentDisplay } from './script/module3.js';

const menuBtn = document.querySelector(`#menu`);
const recipeBtn = document.querySelector(`#recipes`);
const aboutBtn = document.querySelector(`#aboutUs`);

const SUPRA_CONTENT = document.querySelector(`#content`);
home(SUPRA_CONTENT);

menuBtn.addEventListener(`click`, () => home(SUPRA_CONTENT));
recipeBtn.addEventListener(`click`, () => meatPresent(SUPRA_CONTENT));
aboutBtn.addEventListener(`click`, () => aboutContentDisplay(SUPRA_CONTENT));