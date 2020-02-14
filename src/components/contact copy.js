import React,{Component } from "react"
import { Grid, Cell } from "react-mdl"

class Contact extends Component {
  render(){
    return(
      <div style={{width:"80%",margin:"auto"}}>
      <Grid className="contact-grid">
          <Cell col={12}>
            <div className="banner-text" >
              <h1>For Business Inquiries</h1>  
              <div className="social-links" >
                {/* Email */}
                <a href="mailto:datenjourno@outlook.de" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-envelope-square" aria-hidden="true" />
                    Email
                </a>

                {/* Threema */}
                <a href="threema.id/FTBJKEBS" target="_blank" rel="noopener noreferrer">
                  <img src="./img/threema.png" alt="Log in to Threema" />
                  Threema
                </a>

                {/* Skype */}
                <a href="web.skype.com" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-skype" aria-hidden="true" />
                  live:jieunk_1
                </a>
                </div>              
            </div>
          </Cell>
        </Grid>
        </div>    
      
    )
  }
}

export default Contact