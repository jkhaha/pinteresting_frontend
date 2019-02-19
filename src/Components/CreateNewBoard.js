import React, { Component } from 'react';

class CreateNewBoard extends Component {

  state={
    title:''
  }

  handleChange(e){
    this.setState({
      title: e.target.value
    })
  }

  render() {
    return(
      <div className='ui column' id="placeholder_segment">
      <div className="ui placeholder segment" id="box">
        <div className="ui icon header">
           <i className="plus icon" onClick={()=>this.props.handleNewBoardClick(this.state)}></i>
           <div className="ui form">
              <div className="field">
                <input type="text" name='title' placeholder="title here then click plus to add" value={this.state.title} onChange={(e)=>this.handleChange(e)}/>
              </div>
            </div>
        </div>
      </div>
      </div>
    )
  }
}

export default CreateNewBoard;
