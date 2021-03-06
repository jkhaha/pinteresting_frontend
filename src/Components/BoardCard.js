import React, { Component } from 'react';
import {Link} from "react-router-dom"

class BoardCard extends Component{

  render(){
    return(
      <div className='ui column' id="placeholder_segment">

      <div className="ui placeholder segment" id ="box">

        <div className="ui icon header">
          <div><i id="x_icon" className='x icon red' onClick={()=>this.props.handleDeleteBoard(this.props.boardObj)}></i></div>
          <Link to={`/boards/${this.props.boardObj.id}`}>
           <i className="plus icon" onClick={()=>this.props.handleClick(this.props.boardObj)}></i>
            {this.props.boardObj.title}
          </Link>
        </div>
      </div>

      </div>
    )
  }
}

export default BoardCard
