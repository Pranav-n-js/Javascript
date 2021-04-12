import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";


const SubmitEmail = (props) => {
let history=useHistory()
   function EmailHandle() {

     history.push('/Game');
   }
   return (
      <div>
         <button onClick={EmailHandle}> Submit EMail ID </button>
      </div>
   )
}

export default SubmitEmail
