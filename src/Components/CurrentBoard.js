import React, { Component } from 'react';
import CurrentBoardImageCard from './CurrentBoardImageCard'

class CurrentBoard extends Component{

  generateImageCards(){
    // console.log("IN GENERATE CARDS CURRBOARD",this.props)
    return this.props.imagesForSelectedBoard.map((imageObj) =>{
      return (<CurrentBoardImageCard
      key={imageObj.id}
      // thumbnail_url={imageObj.urls.thumb}
      // description={imageObj.description}
      imageObj={imageObj}
      handleClick={this.props.handleRemove}
      />)}
    )
  }

  render(){
    let imagesToRender= this.props.imagesForSelectedBoard.length === 0 ? null : this.generateImageCards()
    return(
      <div className="ui segment" id="segment_background">
      <div className="ui five column grid">
        <div className="row">
        {imagesToRender}
        </div>
      </div>

      </div>
    )
  }
}

export default CurrentBoard
