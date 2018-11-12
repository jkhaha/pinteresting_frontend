import React, { Component } from 'react';

class LoginForm extends Component{

  state = {
    name: ''
  }

  changeHandler = (e) => {
    this.setState({
      name: e.target.value
    }, ()=>console.log(this.state.name))
  }

  render(){
    return(
      <form onSubmit={(e) => this.props.findOrCreateUser(e, this.state.name)}>
      <input name="name" placeholder="name here" onChange={(e) => this.changeHandler(e)} value={this.state.name}/>
      <button>Log in</button>
      </form>
    )
  }
}

export default LoginForm
