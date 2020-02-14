import React, { Component } from 'react'
import i1 from "../../img/about.png"

export class About extends Component {
  render() {
    return (
      <div className="about-grid">
        <table>
          <tr>
            <td>
              <img src={i1} alt="About Project"/>
            </td>
            <td>
              <div className="about-desc">

                <p>Thank you for visiting.</p>
                <p><span style={{color:"#F24438",fontSize:"1.3em",fontWeight:"bold"}}>data-journalism-ho.me</span> provides a bird's-eye view of the German media landscape and public forums.</p>
                
                <p>It uses <span style={{color:"#000",fontWeight:"bold"}}>data science methods and tools</span> to deliver key topics and insights <span style={{color:"#000",fontWeight:"bold"}}>concise</span>ly and <span style={{color:"#000",fontWeight:"bold"}}>visual</span>ly from a variety of sources.</p>

                <p>Its ultimate goal is to <span style={{color:"#000",fontWeight:"bold"}}>bring</span> opposing, multi-faceted socio-political viewpoints into <span style={{color:"#000",fontWeight:"bold"}}>one whole picture.</span></p>

                <p>The project has only begun and will continue to grow.</p>
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default About
