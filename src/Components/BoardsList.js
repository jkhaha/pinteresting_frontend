import React, { Component } from 'react';
import BoardCard from './BoardCard'

class BoardsList extends Component{


  createNewBoard=(obj)=>{
    console.log("createNewBoard")
  }

  showSelectedBoard=(obj)=>{

  }

  render(){
    return(
      <div>
      <div>this is BoardsList (in BoardsContainer)</div>
      <BoardCard createNewBoard={this.createNewBoard}/>
      </div>
    )
  }
}

export default BoardsList
