import React, { Component } from 'react';
import './App.scss';
import {Layout,Header,Navigation,Content} from "react-mdl"
import Main from './components/pages/Main';
import { Link} from "react-router-dom"
import TimelineMax from "gsap"
import Ease from "gsap"


const nav_link= {
    "textDecoration": "none",
    "color": "white",
  "fontFamily": "Roboto Mono",
  "fontSize": "19px",
  "&:hover": {
    "cursor": "pointer",
    "color":" #000",
    "fontWeight": "bolder"
  }
}

class App extends Component {

    animate= (e)=> {    
      // 1 second
      TimelineMax.fromTo(e.target,1,{height: "100%"},{height: "0%", ease: Ease.easeInOut})
      this.animate2(e)
    }
  
    animate2= (e)=> {
      TimelineMax.fromTo(e.target, 1, {width: "60%"},{width: "100%", ease: Ease.easeInOut})
      TimelineMax.fromTo(document.querySelector(".header-style"),1,{x: "-100%"},{x: "0%"})
      TimelineMax.fromTo(document.querySelector(".app-nav"),1, {opacity:0, x:1262},{opacity:1, x:0},"-=1")
      TimelineMax.fromTo(document.querySelector(".app-content"),1, {opacity:0, x:0},{opacity:1, x:1262},"-=1")
    }

    hide_animation= ()=> {
        // document.querySelector(".app-onload").style.display= "none"
    }

    render(){
        return (
            <div className="demo-big-content">
            <Layout>
                <Header title={<Link className="header-link" to="/">data-journalism-ho.me &copy; 2020 Jieun K.</Link> } className="header-style" scroll>
                    <Navigation className="app-nav" >
                        <Link style={nav_link} to="/about" >About</Link>
                        <Link style={nav_link} to="/project" onClick={this.hide_animation} >Project</Link> 
                        <Link style={{fontSize:"30px"}} to="/bio" onClick={this.hide_animation}>+</Link>
                        {/* <Link to="/contact" onClick={this.hide_animation}>Contact</Link>  */}
                        {/* <Link to="/">Link</Link>  */}
                    </Navigation>
                </Header>

                {/* <Drawer title={<Link style={{textDecoration:"none",color:"black",fontFamily:"Roboto Mono"}} to="/">Home</Link> }>
                    <Navigation>
                        <Link to="/projects">Projects</Link> 
                        <Link to="/bio" style={{fontSize:"30px"}}>+</Link> 
                        <Link to="/contact">Contact</Link>
                    </Navigation>
                </Drawer> */}

                <Content>
                    <div className="app" onLoad={this.animate}>
                        <section className="app-onload" >
                            <div className="app-img" >
                                <img src="/img/home.jpg" alt=""/>
                            </div>
                        </section>                        
                        <div className="app-slider"></div>
                    </div>
                    <Main/>
                </Content>
            </Layout>
            </div>
        );
    }
  
}

export default App;
