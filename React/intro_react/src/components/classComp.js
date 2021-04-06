 import React, { Component } from 'react'

 export class ClassComp extends Component{
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

  export class ClassClick extends Component {
    constructor(props){
      super(props)
      this.state ={
        message:"Hello"
      }
    //  this.clickHandler=this.clickHandler.bind(this)
    }
  /*  clickHandler(){ //use arrow function
      this.setState({
        message:"Clicked Button"
      })
      }
      */
      clickHandler = ()=>{
        this.setState({
          message:"Clicked Button"
        })
      }

    render() {
      return (
        <div>
          <div>{this.state.message}</div>
          {/*<button onClick={this.clickHandler.bind(this)}> Class Component</button>*/}{/*if you dont bind then error*/}
          {/*<button onClick={()=>this.clickHandler()}> Class Component</button>*/}
          <button onClick={this.clickHandler}> Class Component</button>

        </div>
      );
    }

  }
