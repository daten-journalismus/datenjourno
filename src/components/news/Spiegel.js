import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl"

export class Spiegel extends Component {

  cardStyle= ()=> {
    return({
      color:"#fff",
      height:"110px",      
      marginTop:"15px", 
      // backgroundSize:"auto 150px", 
      background:"url('img/spiegel.png') Center / contain no-repeat"
    })    
  }

  render() {
    return (
      <div className="projects-grid">

          {/* www.spiegel.de/politik/ */ }
          <Card shadow={5} style={{width:"450",margin:"auto"}}>
            <CardTitle style={this.cardStyle()}></CardTitle>
            <CardText>
              <table>
                <tr>
                  <td className="card-desc">Type:</td>
                  <td>Weekly</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Leaning:</td>
                  <td>n/a</td>
                </tr>
                <tr>
                  <td className="card-desc">Since:</td>
                  <td>1947</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Readership: </td>
                  <td>4.66M</td>
                </tr>
                <tr>
                  <td className="card-desc">Based in:</td>
                  <td>Hamburg</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Alexa rank (domestic): </td>
                  <td><a href="https://www.alexa.com/siteinfo/spiegel.de" target="_blank" rel="noopener noreferrer">26</a></td>
                </tr>
              </table>
            </CardText>
            <CardActions border>
              {/* <Button colored disabled>Yesterday</Button> */}
              <Button colored disabled>Weekly</Button>
              <Button colored disabled>Monthly</Button>
              <Button colored disabled >
                <i className="fa fa-twitter-square" style={{fontSize:"1.8em",verticalAlign:"top",paddingTop:"5px"}}></i>
              </Button>
            </CardActions>
            <CardMenu style={{color:"#fff"}}>
              <a href="https://www.spiegel.de/politik/deutschland/" target="_blank" rel="noopener noreferrer">
                <IconButton name="launch" />
              </a>
              {/*  */}
              <a href="https://de.wikipedia.org/wiki/Der_Spiegel" target="_blank" rel="noopener noreferrer">
                <i style={{fontSize:"1.1em","fontWeight":"bold"}} class="fa fa-wikipedia-w"/>
              </a>
            </CardMenu>
          </Card>

        </div>
    )
  }
}

export default Spiegel
