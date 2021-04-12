import React from 'react'

import { useHistory } from "react-router-dom";

const Success = (props) => {
   let history = useHistory();
   function proceedToHome() {
     history.push('/');
 }
 if(props.notShow){
    return <div />
}
console.log(props);
   return(
      <div>
         Congragulations you have Won <br />
         Enter Name : <input type="text" />
         Enter Email : <input type="text" value={props.getMail} />
         <button onClick={proceedToHome}>Home Page</button>
      </div>

   )
}

export default Success
