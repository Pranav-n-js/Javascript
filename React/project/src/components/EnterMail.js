import React from 'react'
import PropTypes from 'prop-types'
import SubmitEmail from './SubmitEmail'
import Success from './Success'
export class EnterMail extends React.Component{
   constructor(props){
      super(props)
      this.state={
         email:""
      }
   }
   setEmail = (event) =>{
      this.setState({
         email:event.target.value
      });
   }

   render(){
      console.log(this.state.email);
      return(

         <div>
            <Success getMail={this.state.email} notShow="true"/>
            Enter Email :
            <input type='mail'
               onChange={this.setEmail}
               />
            <SubmitEmail />
         </div>
      )
   }
}
