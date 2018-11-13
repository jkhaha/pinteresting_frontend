import React, { Component } from 'react';
import CurrentBoard from './CurrentBoard'
import ImageOptions from './ImageOptions'
import SearchForm from './SearchForm'

class CreateBoardContainer extends Component{

  state={
    images:[],
    boardImages:[]
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

    return fetch(`https://api.unsplash.com/search/photos?per_page=30&page=1&query=${query}&client_id=e67b6fb9adfed59b64dbe373ea44ecd2f315200fd108f1268a5b6fa0d66ad0f7`)
    .then(res=>res.json())
    .then(data=> this.setState({
      images: data
    }))
  }


  handleAdd=(obj)=>{

      if (this.state.boardImages.includes(obj)){
         return null
      }else{
         const newBoardImages=[...this.state.boardImages, obj]
         this.postImages()
         this.setState({
           boardImages: newBoardImages
         }, ()=>console.log(this.state.boardImages))
      }
    }

    postImages() {
      // fetch(``)
    }

    handleRemove=(obj)=>{
    //
      const newBoardImages = [...this.state.boardImages]
      const objIndex = newBoardImages.indexOf(obj)

      newBoardImages.splice(objIndex, 1)
      this.setState({boardImages: newBoardImages})
    }



  render(){
    console.log("CreateBoardContainer:",this.props.selectedBoard)
    return(
      <div>
      <div>this is CreateBoardContainer (in WindowContainer)</div>
      <SearchForm performSearch={this.performSearch}/>
      <CurrentBoard boardImages={this.state.boardImages} handleRemove={this.handleRemove}/>
      <ImageOptions imageData={this.state.images} handleAdd = {this.handleAdd}/>
      </div>
    )
  }
}

export default CreateBoardContainer
