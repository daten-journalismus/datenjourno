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

                {/* <p>Thank you for visiting.</p> */}
                <p><span style={{color:"#F24438",fontSize:"2em",fontWeight:"bold"}}>provides a data-oriented summary of news coverage and public discussions.</span> </p>

                
                {/* <p>It uses <span style={{color:"#000",fontWeight:"bold"}}>data science methods and tools</span> to show key topics and insights <span style={{color:"#000",fontWeight:"bold"}}>concise</span>ly and <span style={{color:"#000",fontWeight:"bold"}}>visual</span>ly from a variety of sources.</p> */}
              </div>
            </td>
          </tr>
        </table>
      </div>
    )
  }
}

export default About
