// const superheroes = require("superheroes");
// const supervillains = require("supervillains");
const tap = require("./Data");
console.log("tap" + tap.team);
display = () => {
  console.log("I am Display from user.js");
};
// var prompt = require("prompt-sync")();
// let temp = prompt("How many more times? ");
// console.log(superheroes.random());
// console.log(temp);
// console.log("i am superrvillian : " + supervillains.random());
module.exports.display = display;
console.log(module.exports);
