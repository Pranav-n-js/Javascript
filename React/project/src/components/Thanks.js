import React from 'react'
import { useHistory } from "react-router-dom";

const Thanks = (props) => {
   let history = useHistory();
   function proceedToHome() {
     history.push('/');
 }
   return(
      <div>
         Thanks for Playing Sorry Play again <br />
         <button onClick={proceedToHome}>Home Page</button>
      </div>

   )
}

export default Thanks
