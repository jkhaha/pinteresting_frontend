import React, { Component } from 'react';

class CurrentBoardImageCard extends Component{

  render(){

    return(
      <div className='ui column' id='image_cards'>
        <div className='ui card'>
          <div className="image">
            <img src={this.props.imageObj.thumbnail_url} alt='' onClick={()=>this.props.handleClick(this.props.imageObj)}/>
          </div>
        </div>
      </div>
    )
  }
}

export default CurrentBoardImageCard
