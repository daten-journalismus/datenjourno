import React, { Component } from 'react'
import { Grid, Cell, Card, CardTitle, CardActions } from 'react-mdl'
import Iframe from './Iframe'
import i1 from "../img/welt_weekly_art_desc_verbs_wordcloud.png"
import i2 from "../img/welt_weekly_art_desc_pos_tags_horiz.png"

const cardAction= ()=> {
  return({
    height:"auto",
    padding:"8px",//#eb675e
    background: "linear-gradient(to right,#f44336,#2196f3)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  })    
}

export class WeltPolitikWeek extends Component {
  
  constructor(props){
    super(props)
    this.state= {
      src:"../welt_weekly_nach_thueringen_wahl_2020-02.html"
    }
  }

  render(){return (
    <div className="post-row-content" >
      <h4> Die Welt Politik - 11 February 2020</h4>
      <div style={{background:"#d3d8db7a",paddingTop:"6px"}}>
        {/*  */}
          <h5>Verbs in "Nach Thüringen-Wahl" Article Introductions</h5>
          <Card shadow={0} style={{margin:"0 auto", minWidth:"576px",minHeight:"460px", background:`url(${i1}) top / contain no-repeat`}}>
            <CardTitle expand />
            <CardActions style={cardAction()}>
            Verbs in infinitive form <br/>
              <span style={{color: '#fff',fontSize:".8em"}}>            
              ['angreifen', 'anspucken', 'entwickeln', 'ziehen', 'drohen', 'kandidieren', 'brauchen', 'stellen', 'treffen', 'niederlegen', 'geraten', 'sehen', 'stürzen', 'treten', 'kündigen']
              </span>
            </CardActions>
          </Card>
      </div>
        <hr/>
        <div >
          {/*  */}
          <h5>Parts-of-Speech Tags (processed by spaCy)</h5>
          <Card shadow={0} style={{margin:"0 auto", width:"700px",height:"340px", background:`url(${i2}) top / contain no-repeat`}}>
            <CardTitle expand />
            <CardActions style={cardAction()}>
              Verbs in infinitive form <br/>
              <span style={{color: '#fff',fontSize:".8em"}}>            
              [('NOUN', 51), ('VERB', 20), ('PROPN'<sup>1</sup>, 19), ('ADJ'<sup>2</sup>, 8), ('ADV'<sup>3</sup>, 1)]
              
              <p style={{paddingTop:"3px",fontSize:".8rem"}}><sup>1</sup>PROPN: Proper Noun, <sup>2</sup>ADJ: Adjective, <sup>3</sup>ADV: Adverb</p>
              </span>
            </CardActions>
          </Card>
        </div>
          <hr/>
        <div>
          {/*  */}
          <h5>"Nach Thüringen-Wahl" Articles, Feb. 6 - Feb. 10, 2020</h5>
          <Grid style={{backgroundColor:"#F4F3F3"}}>
            <Cell style={{maxWidth:"64px"}} col={1}>Date</Cell>
            <Cell style={{maxWidth:"62px"}} col={1}>Paywall</Cell>
            <Cell style={{maxWidth:"70px"}} col={1}>Category</Cell>
            <Cell style={{width:"165px"}} col={2}>Topic</Cell>
            <Cell style={{width:"80px"}} col={1}>Frequency</Cell>
            <Cell style={{maxWidth:"170px"}} col={2}>Title</Cell>
            <Cell style={{maxWidth:"170px"}} col={2}>Description</Cell>
            <Cell style={{minWidth:"170px"}} col={2}>URL</Cell>
          </Grid>
          <Iframe source={this.state.src}/>
        </div>
    </div>
  )}
}

export default WeltPolitikWeek
