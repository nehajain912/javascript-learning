const score=400
const balance = new Number(100)
// console.log(balance);
// console.log(score);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber=23.8966;
// console.log(otherNumber.toPrecision(3));
const hundred=1000000
// console.log(hundred.toLocaleString('en-IN'));

//+++++++++++++++++++++++++++++++++++++++++++++++++++++//
// console.log(Math);
// console.log(Math.abs(-4));         // negative converts positive
// console.log(Math.round(4.5));      // 5
// console.log(Math.ceil(4.1));
// console.log(Math.floor(3.9));
// console.log(Math.min(4,3,6,3));
// console.log(Math.max(-1,-2));

//console.log(Math.random());       // giving random numbers between 0 and 1
// console.log(Math.random()*10+1);     // +1 bcoz number 0. mein hote hai to +1 krdiy taki mini 1 aaye
// console.log(Math.floor(Math.random()*10+1));

const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min);      // max-min bcoz mne range dedi itni range mein chaiye   +min isliye ki minimum number to chaiye
