import React,{Component } from "react"
import { Grid, Cell } from "react-mdl"
import Education from "./BioEducation"
import Work from "./BioWork"
import Skillset from "./BioSkillset"

class Bio extends Component {
  render(){
    return(
      <div>
        <Grid className="bio">
          <Cell col={4} >
            <div style={{textAlign:"center",paddingTop:"2em"}}>
              <img src="./img/bio.jpg" alt="author" style={{height:"250px"}} />
            </div>

            <div className="bio-left-col">              
              <h3 style={{paddingTop:"0.5em",fontFamily:"Roboto Mono",fontSize:"30px"}}>Jieun K.</h3>

              <h4 style={{color:"#666",fontFamily:"Roboto Mono"}}>
                Data Science Practitioner<br/>
                <span style={{paddingTop:"3px", color:"gray",fontFamily:"Roboto",fontSize:"18px"}}>
                specializing in text analytics
                </span>
              </h4>

              <hr style={{borderTop:"3px solid #F24437",width:"55%"}} />
              <Grid>
                <Cell col={1}>
                <ul>                  
                  <li><i class="fa fa-paperclip" style={{fontWeight:"bolder"}} /></li>
                  <li>                    &nbsp;                  </li>              
                  <li><i class="fa fa-paperclip" style={{fontWeight:"bolder"}} /></li>
                  <li>                    &nbsp;                  </li>
                  <li>                    &nbsp;                  </li>              
                  <li><i class="fa fa-paperclip" style={{fontWeight:"bolder"}} /></li>
                </ul>
                </Cell>
                <Cell col={11} >
                <ul>  
                  <li>
                  <span style={{fontWeight:"bolder",fontSize:"1.5em",fontFamily:"Roboto Mono"}}>I</span>n search of public sentiment, consensus, and emergent insights
                  </li>                
                  <li><span style={{fontWeight:"bolder",fontSize:"1.5em",fontFamily:"Roboto Mono"}}>F</span>ocus on news coverage, online forums, and other textual data publicly available on the web
                  </li>
                  <li>                  
                  <span style={{fontWeight:"bolder",fontSize:"1.5em",fontFamily:"Roboto Mono"}}>10</span>-year experience with natural languages as translator
                  </li>                
                </ul>
                </Cell>
              </Grid>
                
              <hr style={{borderTop:"3px solid #F24437",width:"55%"}} />
            </div>
            <div className="contact-list">
              <h5>Contact</h5>
              <p>
                {/* <i className="fa fa-envelope-square" /><a href="mailto:datenjourno@outlook.de" >datenjourno&nbsp;@outlook.de</a> */}
                <i className="fa fa-envelope-square" /><a href="mailto:datasci_kor@outlook.com" >datasci_kor&nbsp;@outlook.com</a>
              </p>
              <p>
                <i class="fa fa-skype" /><a href="http://web.skype.com" target="_blank" rel="noopener noreferrer">
                    live:jieunk_1<i style={{fontSize:"15px",paddingLeft:".5em"}} className="fa fa-external-link"/>
                  </a><span>(Skype ID)</span>
              </p>
              <p>
                <img src="./img/threema.png" alt="Log in to Threema" /> <a href="http://threema.id/ftbjkebs" target="_blank" rel="noopener noreferrer">
                    FTBJKEBS<i style={{fontSize:"15px",paddingLeft:".5em"}} className="fa fa-external-link"/>
                  </a><span>(Threema ID)</span> 
              </p>              
              <p>
                {/* <i className="fa fa-home" /><a href="https://goo.gl/maps/r1vSN52p3EyPM6tH9"  target="_blank" rel="noopener noreferrer">Diefenbachstrasse, 81479 Munich</a> */}
                <i className="fa fa-home" /><a href="https://goo.gl/maps/r1vSN52p3EyPM6tH9"  target="_blank" rel="noopener noreferrer">Madeul-ro 859, 01318 Seoul, Korea</a>
              </p>
              
              <hr style={{borderTop:"3px solid #F24437",width:"55%"}} />
          </div>
          </Cell>
          
              
              {/* <h5>Email</h5>
              <p>datenjourno @outlook.de</p>
              <h5>Skype</h5>
              <p>live:jieunk_1</p>
              <h5>Website</h5>
              <p>data-journalism-ho.me</p> */}

          <Cell className="bio-right-col" col={8}>

            <h3>Education</h3>

            <Education startYear={2019} schoolName="UCSDx MicroMasters via edX" schoolDescription="Studied graduate-level Data Science offered by University of California, San Diego (UCSD) via edX, a platform hosting Massive Open Online Courses (MOOCs)."/>

            <Education startYear={2016} endYear={2018} schoolName="Technical University of Munich" schoolDescription="Studied graduate-level Computer Science." />

            <Education startYear={2013} endYear={2016} schoolName="National Open University of Korea" schoolDescription="Studied Computer Science (BS)" />

            <Education startYear={1997} endYear={2001} schoolName="Sungshin Women's University" schoolDescription="Studied English Language and Literature (BA)" />

            {/* <hr style={{width:"80%",borderTop:"3px solid #162B33"}} /> */}

            <h3>Data Science Skillset</h3>            
            <h4>The entire pipeline <img width="35px" src="./img/python.png" alt="Python" />
            </h4>
            
            <Skillset skill="Collection&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" 
            progress={100} />

            <Skillset skill="Cleaning/Preprocessing" 
            progress={100} />

            <Skillset skill="Analysis&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" progress={100} />

            <Skillset skill="Visualization&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" progress={100} />

            <h4>Web front-end 
              <img width="43px" src="./img/html5.png" alt="HTML5" />
              <img height="40px" src="./img/css3.png" alt="CSS3" />
              <img height="38px" src="./img/reactjs.png" alt="ReactJS" />

            </h4>
            <Skillset skill="HTML5 + CSS + ReactJS&nbsp;&nbsp;" progress={100} />

            {/* <hr style={{width:"80%",borderTop:"3px solid #162B33"}} /> */}

            <h3>Work</h3>

            <Work startYear={2019} taskName="data-journalism-ho.me" taskDescription="Data science project (desktop version) with the goal of providing a data-oriented view of the German media landscape and public forums." />

            <Work startYear={2001} endYear={2016} taskName="Freelance translator" taskDescription="Primarily worked on technical, corporate documents from IT companies." />

          </Cell>
      </Grid>
      </div>
      
    )
  }
}

export default Bio