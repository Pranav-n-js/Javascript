import React from 'react'
import { useHistory } from "react-router-dom";
const array=['+','-','/','*']
const chooseOperator = Math.floor(Math.random()*4)
console.log(array[chooseOperator]);
console.log(chooseOperator);
let state ={
   exp:0,
   result:0
}
const handleInput = event => {
   console.log(event.target.value);
   state.result=event.target.value
}
const MathmaticalQuestion = (props) => {
   let history = useHistory();
   const SubmitExpression=()  =>{
      let result= Math.floor(eval(state.exp))
      console.log(result,state.exp,state.result);
      if(result == state.result){
         history.push('/Success')
      }else{
         console.log("Fail");
         history.push('/Thanks')
      }
   }
    state.exp = Math.ceil(Math.random() * (2 - 15852)+15852) + array[chooseOperator] + Math.floor(Math.random() * (5 - 1582)+1582)
   console.log(state.exp);
   return (
      <div>
            Solve the following expresssion : <b>
               {state.exp} =
            </b>
            <input type="number" onChange={handleInput} /> <br />
            <small>Input the floor value if its / </small><br/>
            <button onClick={SubmitExpression}> Submit </button><br/>

      </div>

   )
}

export default MathmaticalQuestion
