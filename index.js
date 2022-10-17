import Rubify from './src/rubify/js/index.js';
let chrStr = '天(てん)童(どう)ア()リ()ス()';
let rr = new Rubify().complexConv(chrStr);
window.onload = () => {
    const elmSelter = (s) => document.querySelector(s);

    elmSelter('.cont.r .mid ruby').innerHTML = rr;
    elmSelter('form#edit .loc select').onchange = v => {
        document.querySelector('form#edit .loc img').src = `./logos/${v.target.value == "Extra" ? "Schale" : v.target.value}.png`;
    }
    elmSelter('form#edit input[type="text"][name="name"]').onchange = v => {
        document.querySelector('form#edit ruby.name.pre').innerHTML = new Rubify().complexConv(v.target.value);
    }
}