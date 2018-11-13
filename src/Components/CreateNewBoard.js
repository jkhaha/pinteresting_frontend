import React, { Component } from 'react';

class CreateNewBoard extends Component {
  render() {
    return(
      <div className='ui column' id="placeholder_segment">
      <div className="ui placeholder segment">
        <div className="ui icon header">
           <i className="plus icon"></i>
           <div className="ui form">
              <div className="field">
                <input type="text" placeholder="new board name here..."/>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default CreateNewBoard;
