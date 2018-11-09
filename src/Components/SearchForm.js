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

  render(){
    return(
      <form onSubmit={(e) => this.props.performSearch(e, this.state.query)}>
      <input name="query" placeholder="search here..." onChange={(e) => this.changeHandler(e)} value={this.state.query}/>
      <button>Search</button>
      </form>
    )
  }
}

export default SearchForm
