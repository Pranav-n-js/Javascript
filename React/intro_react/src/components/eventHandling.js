import React from 'react'
import PropTypes from 'prop-types'

const FunctionClick = () =>{
  const clickHandler = ()=> {
    return (
      console.log("Button is pressed")
    );
  }
return (
  <div>
  <button onClick={clickHandler}>Click me</button>
  </div>
)
  }
export default FunctionClick
