import React, { Component } from 'react';

class ImageCard extends Component{

  render(){
    // tried to do this.props.imageObj.description but returns as undefined?
    return(
      <div className='ui column'>
        <div className='ui card'>
          <div className="image">
            <img src={this.props.imageObj.urls.thumb} alt='' onClick={()=>this.props.handleClick(this.props.imageObj)}/>
          </div>
          <div className="content">
            <p className="header"></p>
            <div className="meta">
              <span className="date"></span>
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
