import React, { Component } from 'react';
import BoardCard from './BoardCard'
import CreateNewBoard from './CreateNewBoard'

class BoardsContainer extends Component{

  generateBoardCards(){
    return this.props.boardData.map((boardObj)=>{
      return <BoardCard
      key={boardObj.id}
      boardObj={boardObj}
      handleClick={this.props.handleClick}
      handleDeleteBoard={this.props.handleDeleteBoard}
      />
    })
  }

  render(){
    let boardsToRender= this.props.boardData.length === 0 ? null : this.generateBoardCards()
    return(
      <div className="ui two column grid">
        <h2 id='block_header'  className='ui block header' style={{width: '100%'}}>BoredBoards</h2>
        <div className="row" id="placeholder_segment">
          <CreateNewBoard handleNewBoardClick={this.props.handleNewBoardClick}/>
          {boardsToRender}
        </div>
      </div>
    )
  }
}

export default BoardsContainer
