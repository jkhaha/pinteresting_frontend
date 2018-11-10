import React, { Component } from 'react';

class ImageCard extends Component{
  render(){
    return(
      <div>
      <h1>This is ImageCard (in ImageOptions & CurrentBoard)</h1>
      <img src={this.props.thumbnail_url} alt=''/>
      </div>
    )
  }
}

export default ImageCard
