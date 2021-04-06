
import React from 'react'
import PropTypes from 'prop-types'

class Form extends React.Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      address:'',
      topic:''
    }
  }
  handelUserNameChange =(event) =>{
    this.setState({
      username:event.target.value
    });
  }
  handelAddress = (event) =>{
    this.setState({
      address: event.target.value
    });
  }
  handelTopic = (event) =>{
    this.setState({
      topic: event.target.value
    });
  }
  handelSubmit = (event) =>{
    alert(`name : ${this.state.username} address : ${this.state.address} topic : ${this.state.topic}`)
    event.preventDefault()
  }
  render () {
    return (
      <form onSubmit={this.handelSubmit}>
        <div>
          <label> UserName
            <input
              type='text'
              value={this.state.username}
              onChange={this.handelUserNameChange}
            />
          </label>
          <label> Address
          <textarea
            value={this.state.address}
            onChange={this.handelAddress}
          ></textarea>
          </label>
          <select value={this.state.topic} onChange={this.handelTopic}>
            <option>react</option>
            <option>vue</option>
            <option>angular</option>
          </select>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
    )
  }
}

export default Form;
