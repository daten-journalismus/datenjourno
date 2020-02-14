import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl"

export class DE extends Component {

  cardStyle= ()=> {
    return({
      color:"#000",
      height:"140px", 
      // backgroundSize:"auto 150px", 
      background:"url('../../img/r_de.png') Center / cover no-repeat"
    })    
  }

  render() {
    return (
      <div className="projects-grid">

          {/* www.bild.de/politik/ */ }
          <Card shadow={5} style={{width:"450",margin:"auto"}}>
            <CardTitle style={this.cardStyle()}>r/de</CardTitle>
            <CardText>
              {/*  */}
              <table>
                <tr>
                  <td className="card-desc">Type:</td>
                  <td>Forum</td>
                  <td style={{marginLeft:"5px"}}>|</td>
                  <td className="card-desc">Online Presence: </td>
                  <td>4K</td>
                </tr>
                <tr>
                  <td className="card-desc">Since:</td>
                  <td>2006</td>
                  <td colSpan="1" style={{padding:"0 1px"}}>|</td>
                  <td className="card-desc">Daily Posts :</td>
                  <td>n/a</td>
                </tr>
                <tr>
                  <td className="card-desc">Membership: </td>
                  <td>238K</td>
                  <td colSpan="3" style={{padding:"0 1px"}}>|</td>
                </tr>
              </table>
            </CardText>
            <CardActions border>
              {/* <Button colored disabled>Yesterday</Button> */}
              <Button colored disabled>Weekly</Button>
              <Button colored disabled>Monthly</Button>
            </CardActions>
            <CardMenu style={{color:"#fff"}}>
              <a href="https://www.reddit.com/r/de/" target="_blank" rel="noopener noreferrer">
                <IconButton name="launch" />
              </a>
            </CardMenu>
          </Card>

        </div>
    )
  }
}

export default DE
