import React, {Component}  from 'react';
export class UserGreeting extends Component{
  constructor(props){
    super(props)
      this.state={
        isLoggedIn:true

    }
  }
  render(){
    let message
    if(this.state.isLoggedIn){

        message = <div>Welcome user</div>

    }
    else{

      message=<div> Welcome Guest</div>

    }
    return message
  }
}
/*  using ternary operator we can use  return ( this.state.isLoggedIn ? <div> Welcome User </div>: <div> Welcome Guest </div>) */
