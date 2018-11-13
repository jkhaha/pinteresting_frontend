import React, { Component } from 'react';
import CurrentBoard from './CurrentBoard'
import ImageOptions from './ImageOptions'
import SearchForm from './SearchForm'

class CreateBoardContainer extends Component{

  state={
    images:[],
    boardImages:[],
    imagesForSelectedBoard: []
  }

  componentDidMount(){
    this.fetchImagesFromJSON()
  }

  fetchImagesFromJSON(){
    return fetch(`http://localhost:3001/images`)
    .then(res=> res.json())
    .then(images => {this.setState({
      boardImages: images
    }, ()=>this.filterImages())})
  }

  filterImages() {
    let imagesToFilter = [...this.state.boardImages]
    let filteredImages = imagesToFilter.filter(image=> {
      return image.board_id === this.props.selectedBoard
    })
    this.setState({
      imagesForSelectedBoard: filteredImages
    })
  }


  performSearch=(e, query) =>{
    e.preventDefault();

    return fetch(`https://api.unsplash.com/search/photos?per_page=30&page=1&query=${query}&client_id=e67b6fb9adfed59b64dbe373ea44ecd2f315200fd108f1268a5b6fa0d66ad0f7`)
    .then(res=>res.json())
    .then(data=> this.setState({
      images: data
    }))
  }


  handleAdd=(imageObj)=> {
    if (this.state.imagesForSelectedBoard.find((image) => image.thumbnail_url === imageObj.urls.thumb)) {
      return null
    } else {
      this.postImage(imageObj)
    }
  }

    postImage = (imageObj) => {
      const data= {
        "board_id":this.props.selectedBoard,
        "thumbnail_url":imageObj.urls.thumb
      }
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type":"application/json"
        }
      }
      fetch(`http://localhost:3001/images`, options)
      .then(res=>res.json())
      .then(newImage=>this.setState({imagesForSelectedBoard: [...this.state.imagesForSelectedBoard, newImage]}, ()=> console.log(this.state.imagesForSelectedBoard)))
    }

    handleRemove=(image)=>{
      let imageId = image.id
      let imageArray = [...this.state.imagesForSelectedBoard]
      this.setState({
        imagesForSelectedBoard: imageArray.filter((arrayImage)=>{
          return arrayImage.id !== imageId
        })
      })
      this.deleteImage(imageId)
    }

    deleteImage=(imageId)=> {

      const options = {
        method: 'DELETE',
        headers: {
          "Content-Type":"application/json"
        }
      }
      return fetch(`http://localhost:3001/images/${imageId}`, options)
    }


  render(){
    const titleHeader = `${this.props.boardTitle} BoredBoard`
    return(
      <div>
      <h2 id='individual_board_header'  className='ui block header' style={{width: '150vh'}}>{titleHeader}</h2>
      <SearchForm performSearch={this.performSearch}/>
      <CurrentBoard imagesForSelectedBoard={this.state.imagesForSelectedBoard} handleRemove={this.handleRemove}/>
      <ImageOptions imageData={this.state.images} handleAdd = {this.handleAdd}/>
      </div>
    )
  }
}

export default CreateBoardContainer
