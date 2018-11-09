import React, { Component } from 'react';
import UserHeader from './UserHeader'
import BoardsList from './BoardsList'

class BoardsContainer extends Component{

  render(){
    return(
      <div>
      <h1>In BoardsContainer (inside WindowContainer)</h1>
      <UserHeader/>
      <BoardsList/>
      </div>

    )
  }
}

export default BoardsContainer
