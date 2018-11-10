import React, { Component } from 'react';
import ImageCard from './ImageCard'

class ImageOptions extends Component{

  generateImageCards(){

    return this.props.imageData.results.map((imageObj) =>{
      return (<ImageCard
      key={imageObj.id}
      thumbnail_url={imageObj.urls.thumb}
      />)}
    )
  }



  render(){
    console.log("Props:", this.props)
    let imagesToRender= this.props.imageData.length === 0 ? null : this.generateImageCards()


    return(
      <div>
      {imagesToRender}
      <h1>In ImageOptions (in CreateBoardContainer)</h1>
      </div>
    )
  }
}

export default ImageOptions
