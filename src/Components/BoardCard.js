import React, { Component } from 'react';

class BoardCard extends Component{
  render(){
    return(
      <div className="ui placeholder segment">
        <div className="ui icon header">
           <i className="plus icon" onClick={this.props.createNewBoard}></i>
            This is one board card
        </div>
      </div>
    )
  }
}

export default BoardCard
