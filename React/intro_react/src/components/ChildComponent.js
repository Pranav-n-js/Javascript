import React from 'react';
export function ChildCom(props) {
  return(
    <div>
        <button onClick={props.greetHandler("Calling from child")}> Greet Parent</button>
    </div>
  )
}
