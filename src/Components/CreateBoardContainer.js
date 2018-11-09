import React, { Component } from 'react';
import CurrentBoard from './CurrentBoard'
import ImageOptions from './ImageOptions'

class CreateBoardContainer extends Component{
  render(){
    return(
      <div>
      <h1>this is CreateBoardContainer (in WindowContainer)</h1>
      <CurrentBoard/>
      <ImageOptions/>
      </div>
    )
  }
}

export default CreateBoardContainer
