
const tea = () => " green tea"
const coffee = () => " cappuchino"
const getType = (type) => {
  return `you Drank a ${type}`;

}

console.log(getType(tea()));

const numOfDrink = (type, numDrink)=>{
  return `type of drink is ${type} and number of drink ordered is ${numDrink}`;
}

console.log(numOfDrink(coffee(),12));

function higherOrderFunction(num1){
  return (num2) => {
    return (num1*num2)
  }
}
var numMul=[]
var mulTwoNumbers = higherOrderFunction(7)
mulTwoNumbers(252)
for (let i=1;i<75;i++)
{
  numMul.push(mulTwoNumbers(i))
}
console.log(numMul);
//checking for even numbers
// solution 1
var evenNumbers=numMul.filter((numb)=>{
  if(numb % 2 === 0) return numb
})
console.log(evenNumbers);
//solution 2
let checkEven = (number) => {
  if (number % 2 === 0) return number
}
let add= () => {
  if (typeof(prevNum)==="undefined")var  prevNum = 0
    return (addNum) => {
      prevNum += addNum
      return prevNum
    }
}
var evenNumber=numMul.filter(checkEven)
console.log(evenNumber);

let arrayAddition =add()

var addArrayNum = numMul.map(arrayAddition)
console.log("Addition of array using .map",addArrayNum);
 console.log("Addition of All array element is ",addArrayNum[addArrayNum.length-1]);
