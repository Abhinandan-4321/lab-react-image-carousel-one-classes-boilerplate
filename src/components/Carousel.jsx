import React, { Component } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";
// you can explore more - and check as how to use materiul ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// implement the class below
class Carousel extends Component {
    constructor(){
        super()
        this.state = {
            index:0,
        };
    }
  
    rightClick = () => {
        this.setState({
            index:this.state.index + 1
        })
    }

    leftClick = () => {
        this.setState({
            index:this.state.index - 1
        })
    }


render(){
    return(
        <div>
            <div style={{backgroundImage:  `url(${images[this.state.index].img})`}} className = "image-size">
                <div className="left" onClick= {this.state.index > 0 && this.leftClick}><ArrowBackIosIcon style = {{fontSize:30}} /></div>
                <div className="text">
                    <h1>{images[this.state.index].title}</h1>
                    <h1>{images [this.state.index].subtitle}</h1>
                </div>
                <div className="right" onClick= {this.state.index<4 && this.rightClick}><ArrowForwardIosIcon style = {{fontSize:30}} /></div>
            </div>  
        </div>
    )
}


}

export default Carousel;