import React, { Component } from 'react';
import LoginForm from './LoginForm'
import BoardsContainer from './BoardsContainer'
import CreateBoardContainer from './CreateBoardContainer'
// import Unsplash from 'unsplash-js/native';


class WindowContainer extends Component{

  render(){
    return(
      <div>
      <div>In WindowContainer (in app)</div>
      <LoginForm/>
      <BoardsContainer/>
      <CreateBoardContainer/>
      </div>
    )
  }
}

export default WindowContainer
