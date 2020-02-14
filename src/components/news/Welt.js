import React,{Component } from "react"
import { Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton, Tooltip } from "react-mdl"
import WeltPolitikJahr from "../../posts/WeltPolitikJahr"
import WeltPolitikMonth from "../../posts/WeltPolitikMonth"
import WeltPolitikWeek from "../../posts/WeltPolitikWeek"

const welt_politik_week= <WeltPolitikWeek/>
const welt_politik_month= <WeltPolitikMonth/>
const welt_politik_jahr= <WeltPolitikJahr/>

class Welt extends Component{  

  showPage= (e)=> {

    if (e.target.name === "week"){      
      this.props.loadContent(welt_politik_week);
    } else if (e.target.name === "month"){      
      this.props.loadContent(welt_politik_month);
    } else if (e.target.name === "year" ){
      this.props.loadContent(welt_politik_jahr);
    }
     
    this.props.handler()
    this.props.toggleTabs();
  }  

  cardStyle= ()=> {
    return({
      // color:"#fff",
      // height:"150px", 
      // backgroundSize:"auto 150px",
      height:"110px",      
      marginTop:"15px", 
      background:"url('img/welt.png') Center / contain no-repeat"
    })    
  }

  render(){
    return(
      <div className="projects-grid">
          {/* www.faz.net */ }
          <Card shadow={5}>
            <CardTitle style={this.cardStyle()}></CardTitle>
            <CardText>
              <table>
                <tr>
                  <td className="card-desc">Type:</td>
                  <td>Daily</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Leaning:</td>
                  <td>Conservative</td>
                </tr>
                <tr>
                  <td className="card-desc">Since:</td>
                  <td>1946</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Readership: </td>
                  <td>0.7M</td>
                </tr>
                <tr>
                  <td className="card-desc">Based in:</td>
                  <td>Berlin</td>
                  <td style={{minWidth:"10px"}}>|</td>
                  <td className="card-desc">Alexa rank (domestic): </td>
                  <td>
                    
                <Tooltip label={<span>Subject to change. <br/>Visit alexa.com </span>}>
                    <a href="https://www.alexa.com/siteinfo/welt.de" target="_blank" rel="noopener noreferrer">38</a>
                </Tooltip>
                  </td>
                </tr>
              </table>
            </CardText>
            <CardActions border style={{display:"flex-box",flexFlow:"row wrap",alignItems:"center"}}>
              {/* <Button colored disabled>Yesterday</Button> */}
              <Button name="week" colored onClick={this.showPage.bind(this)}>Weekly</Button>
              <Button name="month" colored onClick={this.showPage.bind(this)}>Monthly</Button>
              <Button name="year" colored onClick={this.showPage.bind(this)}>2019</Button>
            </CardActions>
            <CardMenu style={{color:"#fff"}}>
              <a href="https://www.welt.de/politik/" target="_blank" rel="noopener noreferrer">
                  <IconButton name="launch" />
              </a>
              {/*  */}
              <a href="https://de.wikipedia.org/wiki/Die_Welt" target="_blank" rel="noopener noreferrer">
                <i style={{fontSize:"1.1em","fontWeight":"bold"}} class="fa fa-wikipedia-w"/>
              </a>
              
              {/* <i class="fas fa-external-link-alt"></i> */}
            </CardMenu>
          </Card>

        </div>       
    )
  }
}

export default Welt