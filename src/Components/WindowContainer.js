import React, { Component } from 'react';
import LoginForm from './LoginForm'
import BoardsContainer from './BoardsContainer'
import CreateBoardContainer from './CreateBoardContainer'
import { Route } from 'react-router-dom';
// import Unsplash from 'unsplash-js/native';


class WindowContainer extends Component{

  state={
    boardData:[],
    user: 1
  }

  componentDidMount(){
    this.fetchBoardData()
  }

  fetchBoardData(){
    fetch('http://localhost:3001/boards')
    .then(res=>res.json())
    .then(data=>this.setState({boardData:data}))
  }

  fetchUserData(){
    fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  findOrCreateUser=(e, username)=>{
    e.preventDefault()
    console.log(e)
    console.log(username)
    this.fetchUserData()
    //if user exists, fetch their boardData
    //if user is new, boardData = just create new board
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
