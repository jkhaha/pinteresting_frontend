import React, { Component } from 'react';
import BoardsContainer from './BoardsContainer'
import CreateBoardContainer from './CreateBoardContainer'
import { Route, Switch } from 'react-router-dom';
// import Unsplash from 'unsplash-js/native';


class WindowContainer extends Component{
//change default board
  state={
    boardData:[],
    selectedBoard: undefined,
    boardTitle: ''
  }

  handleNewBoardClick=(newBoardObj)=>{
    if (newBoardObj.title === '') {
      return null
    } else {
    const data= {
      "title": newBoardObj.title,
      "user_id":2
    }
    const options = {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type":"application/json"
      }
    }
    fetch(`http://localhost:3001/boards`, options)
    .then(res=>res.json())
    .then(newBoard=>this.setState(
      {boardData:[...this.state.boardData, newBoard]},
      ()=>console.log(this.state.boardData)))
      }
  }



  handleClick=(boardObj)=>{
    console.log(boardObj.title)
    this.setState({
      selectedBoard: boardObj.id,
      boardTitle: boardObj.title
    })

  }

  handleDeleteBoard=(boardObj)=>{
    console.log("trying to delete",boardObj)
    let boardId = boardObj.id
    let boardArray = [...this.state.boardData]
    this.setState({
      boardData: boardArray.filter((arrayBoard)=>{
        return arrayBoard.id !== boardId
      })
    })
    this.deleteBoard(boardId)
  }

  deleteBoard=(boardId)=>{
    const options = {
      method: 'DELETE',
      headers: {
        "Content-Type":"application/json"
      }
    }
    return fetch(`http://localhost:3001/boards/${boardId}`, options)
  }


  fetchBoardData(){
    fetch(`http://localhost:3001/boards`)
    .then(res=>res.json())
    .then(data=>this.setState({
      boardData:data
    }))
  }

  componentDidMount() {

    this.fetchBoardData()

  }


  render(){

    return(
      <div>
      <Switch>

      <Route path= "/boards/:id" render={(props)=>
          <CreateBoardContainer
          boardTitle={this.state.boardTitle}
          selectedBoard={this.state.selectedBoard}
          />} />

        <Route path="/" render={(props)=>
          <BoardsContainer boardData={this.state.boardData}
        handleClick={this.handleClick}
        handleNewBoardClick={this.handleNewBoardClick}
        handleDeleteBoard={this.handleDeleteBoard}
        />} />
        </Switch>

      </div>
    )
  }
}

export default WindowContainer
