import React from 'react';
import Thanks from './Thanks'
import { useHistory } from "react-router-dom";
const winOrLoose = Math.floor(Math.random()* (1-299)+299)
console.log(winOrLoose);
let Msg = ""
let proceedNext=false
const Game = (props) => {
   let history = useHistory();

   function proccedToNext() {
     history.push('/MathmaticalQuestion');
  }
   if(winOrLoose%2===0){
            return (
               <div>
                  You Have Won Proceed to next step
                  <button onClick={proccedToNext}>Next Round</button>
               </div>
         )
         }
      else {
         return <Thanks />
      }

}

export default Game
