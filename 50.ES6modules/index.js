//ES6 Module = An external file that contains resuable code than can be imported into other javascript files
//write resuable code for many different apps
//can contain variables , classes , functions and more
//introduced as a part of ecma script 2015 update

import { PI, getArea, getCircumference, getVolumeSphere } from "./mathUtil.js";

console.log(PI);

const c = getCircumference(10);
const a = getArea(10);
const v = getVolumeSphere(10);
console.log(`Circumfrence: ${c.toFixed(2)}cm`);
console.log(`Area: ${a.toFixed(2)}cm square`);
console.log(`Volume : ${v.toFixed(2)}cm cube`);
