import React, { Component } from 'react';
import CurrentBoard from './CurrentBoard'
import ImageOptions from './ImageOptions'
import SearchForm from './SearchForm'

class CreateBoardContainer extends Component{

  state={
    images:[],
    boardImages:[],
    // boardId: this.props.selectedBoard
  }


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

         return this.postImage(obj)


      }
    }

    postImage(image) {
      console.log("image id is", image.id)
      // why isn't it posting image id?? it just shows up as null :(

      const options = {
        method: 'POST',
        body: JSON.stringify({
          board_id:this.props.selectedBoard,
          image_id:image.id
        }),
        headers:{
          "Content-Type":"application/json"
        }
      }
      return fetch(`http://localhost:3001/images`, options)
      .then(res=>res.json())
      .then(data=>
        this.setState({
          boardImages: data
        }, ()=>console.log(this.state.boardImages)))
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
