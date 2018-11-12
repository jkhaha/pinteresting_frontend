import React, { Component } from 'react';
import LoginForm from './LoginForm'
import BoardsContainer from './BoardsContainer'
import CreateBoardContainer from './CreateBoardContainer'
import { Route } from 'react-router-dom';
// import Unsplash from 'unsplash-js/native';


class WindowContainer extends Component{

  state={
    boardData:[],
    userData: []
  }


  // fetchBoardData(userObj){
  //   fetch(`http://localhost:3001/users/${userObj.id}/boards`)
  //   .then(res=>res.json())
  //   .then(data=>this.setState({boardData:data}))
  // }

  fetchUserData(){
    fetch(`http://localhost:3001/users`)
    .then(res=>res.json())
    .then(data=>this.setState({userData:data}, ()=>console.log(this.state.userData)))
  }

  findOrCreateUser=(e, userObj)=>{
    e.preventDefault()

    //fetch to users and check if hash includes username
    //if yes, fetch board data
    //if no, create new board

    this.fetchUserData()


  }

  postUser(userObj){
    console.log(userObj)
    const options = {
      method: 'POST',
      body: JSON.stringify({
        "name": userObj.name
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
    return fetch('http://localhost:3001/users', options)
    .then(res => res.json())
    .then(console.log)
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
