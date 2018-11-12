import React, { Component } from 'react';

class BoardCard extends Component{
  render(){
    console.log(this.props)
    return(
      <div className="ui placeholder segment">
        <div className="ui icon header">
           <i className="plus icon" onClick={()=>this.props.handleClick(this.props.boardObj.id)}></i>
            {this.props.boardObj.title}
        </div>
      </div>
    )
  }
}

export default BoardCard
