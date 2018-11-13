import React, { Component } from 'react';
import {Link} from "react-router-dom"

class BoardCard extends Component{

  render(){
    return(
      <div className='ui column'>

      <div className="ui  placeholder segment">
        <div className="ui icon header">
          <Link to={`/boards/${this.props.boardObj.id}`}>
           <i className="plus icon" onClick={()=>this.props.handleClick(this.props.boardObj.id)}></i>
            {this.props.boardObj.title}
          </Link>
        </div>
      </div>
      </div>
    )
  }
}

export default BoardCard
