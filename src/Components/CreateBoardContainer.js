import React, { Component } from 'react';
import CurrentBoard from './CurrentBoard'
import ImageOptions from './ImageOptions'
import SearchForm from './SearchForm'

class CreateBoardContainer extends Component{
  state={
    images:[]
  }

  performSearch=(e, query) =>{
    e.preventDefault();
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=e67b6fb9adfed59b64dbe373ea44ecd2f315200fd108f1268a5b6fa0d66ad0f7`)
    .then(res=>res.json())
    .then(data=>console.log(data))
  }

  render(){
    return(
      <div>
      <h1>this is CreateBoardContainer (in WindowContainer)</h1>
      <SearchForm performSearch={this.performSearch}/>
      <CurrentBoard/>
      <ImageOptions/>
      </div>
    )
  }
}

export default CreateBoardContainer
