import React, { Component } from 'react';

class ImageCard extends Component{
  render(){
    console.log(this.props.imageObj)
    // tried to do this.props.imageObj.description but returns as undefined?
    return(
      <div className='ui column'>
        <div className='ui card'>
          <div className="image">
            <img src={this.props.thumbnail_url} alt=''/>
          </div>
          <div className="content">
            <p className="header">{this.props.description}</p>
            <div className="meta">
              <span className="date">Maybe put photographer here</span>
            </div>
            <div className="description">
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ImageCard
