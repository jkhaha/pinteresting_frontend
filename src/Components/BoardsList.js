import React, { Component } from 'react';
import BoardCard from './BoardCard'

class BoardsList extends Component{
  render(){
    return(
      <div>
      <h1>this is BoardsList (in BoardsContainer)</h1>
      <BoardCard/>
      </div>
    )
  }
}

export default BoardsList
