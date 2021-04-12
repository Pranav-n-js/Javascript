import React from 'react'
import PropTypes from 'prop-types'
import EmailButton from './Button'
import axios from 'axios'
class DateOfBirth extends React.Component {
   constructor(props){
      super(props)
      this.state={
         dob:""
      }
   }
 makePostRequest =  ( url, data ) => {
      let headers={
         'Content-Type':'application/json',
         'Access-Control-Allow-Headers': '*'
      }
      axios.post(url,{data},{headers})
      .then(res =>{
         console.log(res);
      })
      .catch(err => {
         console.log(err);
      })
   }
   verifyAge =() =>{
      try {
        const res =  this.makePostRequest("https://32h885pzh4.execute-api.us-east-1.amazonaws.com/dev/verifyAge", {dob:this.state.dob,regionId:3,countryId:2});
        console.log(res)
       } catch (err) {
          console.log(err);
       }
   }


    addDoB = (event) =>{

      this.setState({
         dob: "939493800000"
      });
      console.log(this.state.dob);
   }
   render () {

      return (
         <div>
            <label>
               Enter Date Of Birth : <br />
               <input type="date"
                  onChange={this.addDoB}
               />

            </label>
            <br />
             {/*<EmailButton dob={this.state.dob}/>*/}
             <button onClick={this.verifyAge}>Submit</button>
         </div>
   )}
}

export default DateOfBirth;
