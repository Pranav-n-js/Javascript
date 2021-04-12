import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from "react-router-dom";
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
function EmailButton(props) {
  let history = useHistory();

  function handleClick() {
    history.push('/Email');
  }

  return (
    <button onClick={handleClick}>
      Submit
   </button>
  );
}
export default EmailButton;
