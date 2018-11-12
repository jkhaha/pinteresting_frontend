import React, { Component } from 'react';
import BoardCard from './BoardCard'

class BoardsList extends Component{
  render(){
    return(
      <div>
      <div>this is BoardsList (in BoardsContainer)</div>
      <BoardCard/>
      </div>
    )
  }
}

export default BoardsList
