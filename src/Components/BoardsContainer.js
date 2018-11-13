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
      <div className="ui two column grid">
        <div className="row">
          {boardsToRender}
        </div>
      </div>
    )
  }
}

export default BoardsContainer
