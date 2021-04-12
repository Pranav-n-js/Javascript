import React from 'react'
import PropTypes from 'prop-types'

class LifeCycleB extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      name: 'Vishwas'
    }
    console.log("LifeCycleB constructor ");
    }
    static getDerivedStateFromProps =(props, state) => {
        console.log("LifeCycleB getDerivedStateFromProps");
        return null;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("LifeCycleB shouldComponentUpdate");
    return true;
  }
  getSnapshotBeforeUpdate(nextProps, nextState){
    console.log("LifeCycleB getSnapshotBeforeUpdate");
    return null;
  }
  componentDidUpdate(){
    console.log("LifeCycleB componentDidUpdate");
  }
  componentDidMount(){
    console.log("LifeCycleB component mount");
  }
  changeState = () => {
  this.setState({
    name: "chenae"
  });
  }
  render () {
    console.log("LifeCycleB");
    return (
      <div>
      <div> LifeCycleB </div>
      

      </div>

    )
  }
}

export default LifeCycleB;
