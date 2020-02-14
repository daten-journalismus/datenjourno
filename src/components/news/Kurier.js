import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl"

export class Kurier extends Component {

  cardStyle= ()=> {
    return({
      color:"#fff",
      height:"110px",      
      marginTop:"15px", 
      background:"url('img/kurier.png') Center / contain no-repeat"
    })    
  }

  render() {
    return (
      <div className="projects-grid">

          {/* www.bild.de/politik/ */ }
          <Card shadow={5} style={{width:"450",margin:"auto"}}>
            <CardTitle style={this.cardStyle()}></CardTitle>
            <CardText>
              <table>
                <tr>
                  <td className="card-desc">Type:</td>
                  <td>Daily</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Leaning:</td>
                  <td>Liberal</td>
                </tr>
                <tr>
                  <td className="card-desc">Since:</td>
                  <td>1954</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Readership: </td>
                  <td>0.54M</td>
                </tr>
                <tr>
                  <td className="card-desc">Based in:</td>
                  <td>Vienna</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Alexa rank (domestic): </td>
                  <td><a href="https://www.alexa.com/siteinfo/kurier.at" target="_blank" rel="noopener noreferrer">47</a></td>
                </tr>
              </table>
            </CardText>
            <CardActions border>
              {/* <Button colored disabled>Yesterday</Button> */}
              <Button colored disabled>Weekly</Button>
              <Button colored disabled>Monthly</Button>
            </CardActions>
            <CardMenu style={{color:"#fff"}}>
              <a href="https://kurier.at/politik" target="_blank" rel="noopener noreferrer">
                <IconButton name="launch" />
              </a>
              {/*  */}
              <a href="https://de.wikipedia.org/wiki/Kurier_(Tageszeitung)" target="_blank" rel="noopener noreferrer">
                <i style={{fontSize:"1.1em","fontWeight":"bold"}} class="fa fa-wikipedia-w"/>
              </a>
            </CardMenu>
          </Card>

        </div>
    )
  }
}

export default Kurier
