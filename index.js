import Rubify from './src/rubify/js/index.js';
let chrStr = '天(てん)童(どう)ア()リ()ス()';
let rr = new Rubify().complexConv(chrStr);
window.onload = () => {
    document.querySelector('.cont.r .mid ruby').innerHTML = rr;

    document.querySelector('form#edit .loc select').onchange = v => {
        document.querySelector('form#edit .loc img').src = `./logos/${v.target.value == "Extra" ? "Schale" : v.target.value}.png`;
    }
}