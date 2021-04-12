import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
function Main() {
  let history = useHistory();

  function handleClick() {
    history.push("/dob");
  }

  return (
    <button type="button" onClick={handleClick}>
      Click Me
   </button>
  );
}
export default Main
