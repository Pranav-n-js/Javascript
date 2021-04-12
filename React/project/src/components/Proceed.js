import React from 'react'
import Thanks from './Thanks.js'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
const Proceed = (props) => {
   let history = useHistory();

   function proccedToNext() {
     history.push('/MathmaticalQuestion');
  }

   if(props.isWin){
      return <button onClick={proccedToNext}>Next Round</button>
   }else{
      return <button onClick={proceedToHome}>Home Page</button>
   }
}

export default Proceed
