import React, { Component } from 'react';
import CurrentBoard from './CurrentBoard'
import ImageOptions from './ImageOptions'
import SearchForm from './SearchForm'

class CreateBoardContainer extends Component{
  state={
    images:[]
  }

  // componentDidMount(){
  //   fetch(`https://api.unsplash.com/search/photos?page=1&query=dogs&client_id=e67b6fb9adfed59b64dbe373ea44ecd2f315200fd108f1268a5b6fa0d66ad0f7`)
  //   .then(res=>res.json())
  //   .then(data=> this.setState({
  //     images: data
  //   }))
  // }

  // componentDidMount(){
  //   this.fetchRandom()
  // }
  //
  // fetchRandom(){
  //   fetch(`https://api.unsplash.com/photos/random/?client_id=e67b6fb9adfed59b64dbe373ea44ecd2f315200fd108f1268a5b6fa0d66ad0f7`)
  //   .then(res=>res.json())
  //   .then(random_image_obj=>this.setState({
  //     images: [random_image_obj]
  //   }, ()=>console.log(this.state.images)))
  // }

  performSearch=(e, query) =>{
    e.preventDefault();

    return fetch(`https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=e67b6fb9adfed59b64dbe373ea44ecd2f315200fd108f1268a5b6fa0d66ad0f7`)
    .then(res=>res.json())
    .then(data=> this.setState({
      images: data
    }))

  }

  render(){
    return(
      <div>
      <h1>this is CreateBoardContainer (in WindowContainer)</h1>
      <SearchForm performSearch={this.performSearch}/>
      <CurrentBoard/>
      <ImageOptions imageData={this.state.images}/>
      </div>
    )
  }
}

export default CreateBoardContainer
