import React, { Component } from 'react';
import ImageCard from './ImageCard'

class CurrentBoard extends Component{

  generateImageCards(){
    return this.props.boardImages.map((imageObj) =>{
      return (<ImageCard
      key={imageObj.id}
      thumbnail_url={imageObj.urls.thumb}
      description={imageObj.description}
      imageObj={imageObj}
      handleClick={this.props.handleRemove}
      />)}
    )
  }

  render(){
    let imagesToRender= this.props.boardImages.length === 0 ? null : this.generateImageCards()
    return(
      <div className="ui segment inverted pink">
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
