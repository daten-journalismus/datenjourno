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
                <h4>
                explores news coverage and public discussions using data science methodology.
                </h4>

                <h5>
                  <span style={{color:"#F0453A",fontWeight:"bold"}}>Last modified:</span> April 19, 2020 </h5>

                
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
