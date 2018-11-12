import React, { Component } from 'react';
import LoginForm from './LoginForm'
import BoardsContainer from './BoardsContainer'
import CreateBoardContainer from './CreateBoardContainer'
import { Route } from 'react-router-dom';
// import Unsplash from 'unsplash-js/native';


class WindowContainer extends Component{

  state={
    boardData:[]
  }

  componentDidMount(){
    this.fetchBoardData()
  }

  fetchBoardData(){
    fetch('http://localhost:3001/boards')
    .then(res=>res.json())
    .then(data=>this.setState({boardData:data}))
  }

  findOrCreateUser=(e, username)=>{
    e.preventDefault()
    console.log(e)
    console.log(username)
  }


  render(){
    return(
      <div>
      <div>In WindowContainer (in app)</div>

        <Route path="/login" render={(props)=><LoginForm findOrCreateUser={this.findOrCreateUser}/>} />
        <Route path="/boardscontainer" render={(props)=><BoardsContainer boardData={this.state.boardData}/>} />
        <Route path="/createboard" component={CreateBoardContainer} />

      </div>
    )
  }
}

export default WindowContainer
