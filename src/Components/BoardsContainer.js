import React, { Component } from 'react';
import UserHeader from './UserHeader'
import BoardsList from './BoardsList'

class BoardsContainer extends Component{

  render(){
    return(
      <div>
      <div>In BoardsContainer (inside WindowContainer)</div>
      <UserHeader/>
      <BoardsList/>
      </div>

    )
  }
}

export default BoardsContainer
