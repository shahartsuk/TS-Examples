import { Dictionary } from "underscore";

console.log("hello akko");

const obj = {};
//const list:Dictionary(obj);

const list = [1, 7, 3, 8, 3, 5, 7, 5, 4, 1];

//show me the index of the element
for (let i in list) {
  console.log(i);
  //0,1,2,3,4 ...
}

//show me the value of the element
for (let i of list) {
  console.log(i);
  //1,7,3,8,3,5,7,5,4,1
}
