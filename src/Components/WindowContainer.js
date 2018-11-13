import React, { Component } from 'react';
import LoginForm from './LoginForm'
import BoardsContainer from './BoardsContainer'
import CreateBoardContainer from './CreateBoardContainer'
import { Route, Switch } from 'react-router-dom';
// import Unsplash from 'unsplash-js/native';


class WindowContainer extends Component{

  state={
    boardData:[],
    selectedBoard: 1

//     userData: [],
//     currentUser: 1
  }



  handleClick=(id)=>{
    console.log(id)
    this.setState({
      selectedBoard: id
    })

  }
//
// //finds boards associated with a preexisting user
  fetchBoardData(){
    fetch(`http://localhost:3001/boards`)
    .then(res=>res.json())
    .then(data=>this.setState({
      boardData:data,
      // currentUser: userObj.id
    }))
  }
//
//   fetchUserData(){
//     return fetch(`http://localhost:3001/users`)
//   }
//
// // determines whether user is new and needs to be created OR already exists
//   findOrCreateUser=(e, userObj)=>{
//     e.preventDefault()
//     let findUser = this.state.userData.find((userInBackend)=>{
//       return userInBackend.name === userObj.name
//     })
//     this.setState({
//       currentUser: findUser.id
//     }, ()=>console.log(this.state.currentUser))
//     findUser === undefined ? this.postUser(userObj) : this.fetchBoardData(userObj)
//   }
//
// //fetches all user data and stores in state
  componentDidMount() {
    this.fetchBoardData()
  }
//
// // posts a new user and sets state to new user id
//   postUser(userObj){
//     console.log(userObj)
//     const options = {
//       method: 'POST',
//       body: JSON.stringify({
//         "name": userObj.name
//       }),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     }
//     return fetch('http://localhost:3001/users', options)
//     .then(res => res.json())
//     .then(newUser => this.setState({
//       currentUser: newUser.id
//     }))
//   }

  render(){
    // let userBoardsToRender = this.state.boardData === [] ? console.log("empty boards") : this.state.boardData


    return(
      <div>
      <Switch>
      <Route path= "/boards/:id" render={(props)=><CreateBoardContainer selectedBoard={this.state.selectedBoard}/>} />
        <Route path="/boards" render={(props)=><BoardsContainer boardData={this.state.boardData} handleClick={this.handleClick}/>} />
        </Switch>

      </div>
    )
  }
}

export default WindowContainer
