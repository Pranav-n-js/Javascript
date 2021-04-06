import React from 'react'
import PropTypes from 'prop-types'

class LifeCycleA extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name: 'Vishwas'
    }
    console.log("LifeCycleA constructor ");
    }
    static getDerivedStateFromProps =(props, state) => {
        console.log("LifeCycleA getDerivedStateFromProps");
        return null;
  }
  componentDidMount(){
    console.log("LifeCycleA component mount");
  }
  render () {
    console.log("LifeCycleA");
    return (
      <div> LifeCycleA </div>
    )
  }
}

export default LifeCycleA;
