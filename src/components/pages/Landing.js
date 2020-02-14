import React,{Component } from "react"
// import { Grid, Cell } from "react-mdl"
import Slider from "../Slider"

class Landing extends Component {

  render(){

    return(
        <div className="landing">
          <Slider />
          {/* <div className="landing-title" >faz.net/politik</div> */}
          {/* <div className="landing-text"></div> */}
        </div>
    )
  }
}



export default Landing