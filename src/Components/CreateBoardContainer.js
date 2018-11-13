import React, { Component } from 'react';
import CurrentBoard from './CurrentBoard'
import ImageOptions from './ImageOptions'
import SearchForm from './SearchForm'

class CreateBoardContainer extends Component{

  state={
    images:[],
    boardImages:[],

    // newBoardImage:{}
    // boardId: this.props.selectedBoard
  }

  componentDidMount(){
    let fetchedImages = this.fetchImagesFromJSON()
    .then(res=>res.json())
    .then(data=>this.setState({

    }))

    // let filteredImages = images.filter(image=>{
    //    return image.board_id===this.props.selectedBoard})
    // this.setState({
    //   boardImages: filteredImages
    // }, ()=>console.log(this.state.boardImages))
  }

  fetchImagesFromJSON(){
    return fetch(`http://localhost:3001/images`)

  }


  performSearch=(e, query) =>{
    e.preventDefault();

    return fetch(`https://api.unsplash.com/search/photos?per_page=30&page=1&query=${query}&client_id=e67b6fb9adfed59b64dbe373ea44ecd2f315200fd108f1268a5b6fa0d66ad0f7`)
    .then(res=>res.json())
    .then(data=> this.setState({
      images: data
    }))
  }


  handleAdd=(imageObj)=>{
      if (this.state.boardImages.includes(imageObj)){
         return null
      }else{
          const data={
            "board_id":this.props.selectedBoard,
            "thumbnail_url":imageObj.urls.thumb
          }


         let allBoardImages = [...this.state.boardImages, this.state.newBoardImage]
         this.setState({
           boardImages:allBoardImages
         }, ()=>console.log("ALL BOARD IMAGES:",this.state.boardImages))
         this.postImage(data)


      }
    }

    postImage(data) {

      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
          "Content-Type":"application/json"
        }
      }
      fetch(`http://localhost:3001/images`, options)
      .then(res=>res.json())
      .then(newImage=>this.setState({boardImages:[newImage]}))



    }

    handleRemove=(obj)=>{
    //
      const newBoardImages = [...this.state.boardImages]
      const objIndex = newBoardImages.indexOf(obj)

      newBoardImages.splice(objIndex, 1)
      this.setState({boardImages: newBoardImages})
    }



  render(){

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
