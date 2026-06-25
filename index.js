// import * as Math from "./ipMath.js";

// const a = 8;
// const b = 9;

// console.log(`${a} + ${b} = ` + add(a, b));
// console.log(`${a} - ${b} = ` + add2(a, b));
// console.log(`${a} * ${b} = ` + add3(a, b));
// console.log(`${a} / ${b} = ` + add4(a, b));
// console.log(`${a} % ${b} = ` + add5(a, b));


import "dotenv/config";

const port = process.env.PORT;
const name = process.env.NAME;

console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);