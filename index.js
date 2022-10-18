import Rubify from './src/rubify/js/index.js';
let chrStr = '天(てん)童(どう)ア()リ()ス()';
let rr = new Rubify().complexConv(chrStr);

function genHex() {
    var array = new Uint32Array(2);
    let n = parseInt(window.crypto.getRandomValues(array), 16);
    return parseInt(n.toString().slice(0, 11)).toString(16).toUpperCase();
}

window.onload = () => {
    const elmSelter = (s) => document.querySelector(s);

    elmSelter('.cont.r .mid ruby').innerHTML = rr;
    elmSelter('form#edit .loc select').onchange = v => {
        document.querySelector('form#edit .loc img').src = `./logos/${v.target.value == "Extra" ? "Schale" : v.target.value}.png`;
    }
    elmSelter('form#edit input[type="text"][name="name"]').onchange = v => {
        document.querySelector('form#edit ruby.name.pre').innerHTML = new Rubify().complexConv(v.target.value);
    }
    elmSelter('.editForm a.modal-close').onclick = () => {
        let d = new FormData(document.querySelector('form#edit'));
        const value = Object.fromEntries(d.entries());
        apply(value)
    }
}

function apply(j) {
    if (!j.id) j.id = genHex();
    console.log(j)
}