import React from 'react'
import PropTypes from 'prop-types'
import LifeCycleB from './LifeCycleB.js'
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
  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleA shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(nextProps, nextState){
    console.log("LifeCycleA getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){ //commoly used
    console.log("LifeCycleA componentDidUpdate");
  }
  componentDidMount(){
    console.log("LifeCycleA component mount");
  }
  changeState = () => {
  this.setState({
    name: "chenae"
  });
  }
  render () //commonly used others are spcl cases
  {
    console.log("LifeCycleA");
    return (
      <div>
      <div> LifeCycleA </div>
      <button onClick={this.changeState}>Change State</button>
      <LifeCycleB />
      </div>

    )
  }
}

export default LifeCycleA;
