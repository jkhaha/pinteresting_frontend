import React, { Component } from 'react';
import ImageCard from './ImageCard'

class CurrentBoard extends Component{

  render(){
    return(
      <div>
      <h1>This is CurrentBoard (in CreateBoardContainer)</h1>
      <ImageCard/>
      </div>
    )
  }
}

export default CurrentBoard
