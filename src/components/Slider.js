import React from 'react'
import { useState } from 'react'
import "./slider.scss"
import Image from './Image'
import i1 from "../img/1.png"
import i2 from "../img/2.png"
import i3 from "../img/3.png"
import i4 from "../img/4.png"
import i5 from "../img/5.png"
import i6 from "../img/6.png"
import i7 from "../img/7.png"
import i8 from "../img/8.png"

export default function Slider() {

  let sliderArr= []

  const [x, setX] = useState(0)

  const goLeft= ()=> {
    x=== 0 ? setX(-100*(sliderArr.length-1)) : setX(x+100)
  }
  const goRight= ()=> {    
    (x=== -100*(sliderArr.length-1)) ? setX( 0) : setX(x-100)
  }
  
  sliderArr= [<Image onClick={goRight} src={i1}/> ,<Image src={i2}/> ,<Image src={i3}/> ,<Image src={i4}/> ,
  <Image src={i5}/>,<Image src={i6}/>,<Image src={i7}/>,<Image src={i8}/>]

  return (
    <div className="slider" >
       {sliderArr.map((item,index)=> {
         return(
           <div key={index} className="slide" style={{transform:`translateX(${x}%)`}} > 
             {item }
           </div>
         )
       })}
       <button id="goLeft" onClick={goLeft} >
         <i className="fa fa-chevron-left"/>
       </button>
       <button id="goRight" onClick={goRight} >
         <i className="fa fa-chevron-right"/>
         {/* style={{fontSize:"40px",color:"black"}} */}
       </button>
    </div>
  )
}
