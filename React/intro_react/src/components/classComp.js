 import React, { Component } from 'react'

 class ClassComp extends Component{
   constructor(){
     super()
     {/*states are managed within components*/}
     this.state={
       msg:'Welcome visitor',
       type:"Subscribe",
       count:0
     }
   }
   visitorCount(){
     this.setState({
       count: this.state.count+1
     })
   }
   increaseCount(){
     this.setState((prevState)=>({
       count: prevState.count + 5
     }))
   }
   changeMessage(){
     {/*to change the state of the object we use setState*/}
     this.setState({
       msg:'Thank You for subscribing',
       type:'subscribed'
     })
   }
   render() {
      return (<div>
          <h1>{this.state.msg}</h1>
          <button onClick= {() => this.changeMessage()}>{this.state.type}</button><br/>
          count - {this.state.count} <br/>
          <button onClick= {() => this.visitorCount()}>increased </button>
          <button onClick= {() => this.increaseCount()}>increase Count 5</button>
         </div>

       )}
 }
export default ClassComp
