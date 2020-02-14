import React, { Component } from 'react'
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from "react-mdl"

export class BingNews extends Component {

  cardStyle= ()=> {
    return({
      color:"#fff",
      height:"110px",      
      marginTop:"15px", 
      background:"url('img/bing_news.png') Center / contain no-repeat"
    })    
  }

  render() {
    return (
      <div className="projects-grid">

          {/* www.bild.de/politik/ */ }
          <Card shadow={5} style={{width:"450",margin:"auto"}}>
            <CardTitle style={this.cardStyle()}></CardTitle>
            <CardText>
              {/*  */}
              <table>
                <tr>
                  <td className="card-desc">Type:</td>
                  <td>Aggregator</td>
                  <td style={{marginLeft:"5px"}}>|</td>
                  <td className="card-desc">Leaning:</td>
                  <td>n/a</td>
                </tr>
                <tr>
                  <td className="card-desc">Since:</td>
                  <td>2009</td>
                  <td colSpan="1" style={{padding:"0 1px"}}>|</td>
                  <td className="card-desc">Readership: </td>
                  <td>n/a</td>
                </tr>
                <tr>
                  <td className="card-desc">Based in:</td>
                  <td>n/a</td>
                  <td style={{minWidth:"5px"}}>|</td>
                  <td className="card-desc">Alexa rank (domestic): </td>
                  <td><a href="https://www.alexa.com/topsites/countries/DE" target="_blank" rel="noopener noreferrer">27</a> <span style={{fontSize:"9pt"}}>(bing.com)</span></td>
                </tr>
              </table>
            </CardText>
            <CardActions border>
              {/* <Button colored disabled>Yesterday</Button> */}
              <Button colored disabled>Weekly</Button>
              <Button colored disabled>Monthly</Button>
            </CardActions>
            <CardMenu style={{color:"#fff"}}>
              <a href="http://www.bing.com/news?cc=de/" target="_blank" rel="noopener noreferrer">
                <IconButton name="launch" />
              </a>
              {/*  */}
              <a href="https://en.wikipedia.org/wiki/Bing_(search_engine)#Bing_News" target="_blank" rel="noopener noreferrer">
                <i style={{fontSize:"1.1em","fontWeight":"bold"}} class="fa fa-wikipedia-w"/>
              </a>
            </CardMenu>
          </Card>

        </div>
    )
  }
}

export default BingNews
