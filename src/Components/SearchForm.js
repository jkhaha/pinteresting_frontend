import React, { Component } from 'react';

class SearchForm extends Component {

  state = {
    query: ''
  }

  changeHandler = (e) => {
    this.setState({
      query: e.target.value
    }, ()=>console.log(this.state.query))
  }
  //
  //
  // <form onSubmit={(e) => this.props.performSearch(e, this.state.query)}>
  // <input name="query" placeholder="search here..." onChange={(e) => this.changeHandler(e)} value={this.state.query}/>
  // <button>Search</button>
  // </form>
  
  render(){
    return(
      <div className="ui action input" onClick={(e) => this.props.performSearch(e, this.state.query)}>
    <input type="text" placeholder="Search..." name="query"onChange={(e) => this.changeHandler(e)} value={this.state.query}/>
    <button className="ui button">Search</button>
    </div>
    )
  }
}

export default SearchForm
