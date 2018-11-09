import React, { Component } from 'react';
import LoginForm from './LoginForm'
import BoardsContainer from './BoardsContainer'
import CreateBoardContainer from './CreateBoardContainer'


class WindowContainer extends Component{


  render(){
    return(
      <div>
      <h1>In WindowContainer (in app)</h1>
      <LoginForm/>
      <BoardsContainer/>
      <CreateBoardContainer/>
      </div>
    )
  }
}

export default WindowContainer
