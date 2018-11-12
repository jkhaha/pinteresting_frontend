import React, { Component } from 'react';
import BoardCard from './BoardCard'

class BoardsContainer extends Component{



  generateBoardCards(){
    return this.props.boardData.map((boardObj)=>{
      return <BoardCard
      key={boardObj.id}
      boardObj={boardObj}
      handleClick={this.props.handleClick}
      />
    })
  }

  render(){
    let boardsToRender= this.props.boardData.length === 0 ? null : this.generateBoardCards()
    return(
      <div>
      <div>this is BoardsContainer (in WindowContainer)</div>
      {boardsToRender}
      </div>
    )
  }
}

export default BoardsContainer
