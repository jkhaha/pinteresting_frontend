import React, { Component } from 'react';
import ImageCard from './ImageCard'

class ImageOptions extends Component{

  generateImageCards(){

    return this.props.imageData.results.map((imageObj) =>{
      return (<ImageCard
      key={imageObj.id}
      // thumbnail_url={imageObj.urls.thumb}
      // description={imageObj.description}
      imageObj={imageObj}
      handleClick={this.props.handleAdd}
      />)}
    )
  }



  render(){
    let imagesToRender= this.props.imageData.length === 0 ? null : this.generateImageCards()
    return(

      <div className="ui five column grid">
        <div className="row">
          {imagesToRender}
        </div>
      </div>
    )
  }
}

export default ImageOptions
