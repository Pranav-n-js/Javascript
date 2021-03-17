//"use strict" it is used to avoid unsafe coding practices
"use strict"
let i=0; // let allows variable inside block of code is not used in other blocks
if(i==0){
  let i=1;
  console.log("i inside if",i)
}
console.log("i outside if",i)
const X="var" //This is read only variable

const arr=[1,2,3] //array has become immutable
//to change array variable
arr[1]=5;
//above code will change array variable
//arr=[3,5,9] is not possible 
