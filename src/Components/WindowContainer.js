import React, { Component } from 'react';
import LoginForm from './LoginForm'
import BoardsContainer from './BoardsContainer'
import CreateBoardContainer from './CreateBoardContainer'
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import Unsplash from 'unsplash-js/native';


class WindowContainer extends Component{

  render(){
    return(
      <div>
      <div>In WindowContainer (in app)</div>

        <Route path="/login" component={LoginForm} />
        <Route path="/boardscontainer" component={BoardsContainer} />
        <Route path="/createboard" component={CreateBoardContainer} />

      </div>
    )
  }
}

export default WindowContainer
