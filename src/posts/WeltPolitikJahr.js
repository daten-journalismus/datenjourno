import React from 'react'
import { Grid, Cell, Card, CardTitle, CardActions } from 'react-mdl'
import i1 from "../img/welt_2019_topic_top68_wordcloud.png"
import i2 from "../img/2.png"

export default function WeltPolitikJahr() {

  const cardAction= ()=> {
    return({
      height:"310px",
      padding:"8px",//#eb675e
      background: "linear-gradient(to right,#f44336,#2196f3)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    })    
  }

  return (
    <div className="post-row-content" >
      <h4>Visual Snapshot of <i>Die Welt Politik</i>: 2019</h4>
      <div style={{background:"#d3d8db7a",paddingTop:"6px"}}>
        <h5>Topic Frequency in Word Cloud</h5>
        <Card shadow={0} style={{margin:"0 auto", width:"692px",height:"704px",  background:`url(${i1}) top / contain no-repeat`}}>
          <CardTitle expand />
          <CardActions style={cardAction()}>
          Topic, Number of Mentions: <br/>
            <span style={{color: '#fff',fontSize:".8em"}}>
            
            ('Brexit', 197), ('USA', 179), ('Großbritannien', 165), ('Venezuela', 152), ('Frankreich', 138), ('Seenotrettung', 115), ('Ernährungswissenschaftler', 103), ('Zu Besuch bei Issa Rammo', 103), ('Nordsyrien', 102), ('Migration', 102), ('Österreich', 100), ('Türkei', 92), ('Forsa-Umfrage', 90), ('Die Geschichte dahinter', 89), ('Thüringen', 89), ('Syrien', 87), ('Bundeswehr', 86), ('Deutschlandtrend', 81), ('Annegret Kramp-Karrenbauer', 80), ('Berlin', 79), ('Klimaschutz', 79), ('Flüchtlingskrise 2015', 79), ('Israel', 74), ('Sebastian Kurz', 74), ('Landtagswahlen', 73), ('Italien', 69), ('Sorgerechtsstreit', 69), ('Spanien', 68), ('Europawahl', 67), ('„Fridays for Future“', 67), ('Sachsen', 66), ('Ukraine-Affäre', 65), ('Rheinenergie', 64), ('Ein Kriegsschicksal', 64), ('FDP-Chef über Geld', 63), ('CDU nach SPD-Votum', 63), ('Ausländer und Gewaltkriminalität', 62), ('IS-Rückkehrerin', 62), ('Kramp-Karrenbauer', 60), ('CDU-Parteitag', 60), ('Nordkorea', 59), ('Steve Bannon', 59) ...
            </span>
          </CardActions>
        </Card>
        <h6>See below for the dataset summary.</h6>
      </div>
      <div style={{}}>
        <h4>Word Frequency in Article Topics - Die Welt, 2019</h4>
        <Card shadow={0} style={{margin:"0 auto", width:"700px",height:"466px",  background:`url(${i2}) top / contain no-repeat`}}>
          <CardTitle expand />
          {/* <CardActions style={cardAction()}>
            <span style={{color: '#fff',fontSize:".8em"}}>
            
            </span>
          </CardActions> */}
        </Card>
      </div>
      <div>
        <hr/>
        <h4>Dataset Summary - Die Welt</h4>
        <Grid>
          <Cell className="post-row-heading" col={3}>
          Dateset:
          </Cell>       
          <Cell className="post-row-cell" col={9}>
          News article information on the main page of the <a href="https://www.welt.de/politik/" target="_blank" rel="noopener noreferrer ">Politik</a> section of <i>Die Welt</i>
          </Cell> 
        </Grid>
        {/*  */}
        <Grid>        
          <Cell className="post-row-heading" col={3}>
            Period:
          </Cell>
          <Cell className="post-row-cell" col={9}>
            1 year from January 1 to December 31 of 2019
          </Cell>
        </Grid>
        {/*  */}
        <Grid>        
          <Cell className="post-row-heading" col={3}>
            What was collected:
          </Cell>
          <Cell className="post-row-cell" col={9}>
            Content (<code>date, paywall indicator, topic, title, article introduction</code> ) inside 6 Tags
            <ul>
              <li>
                <code>&lt;meta name="last-modified"&gt;</code>
              </li>
              <li>
                <code>&lt;span data-qa="Teaser.PremiumIcon"&gt;</code>
              </li>
              <li>
                <code>&lt;span data-qa="Teaser.Topic"&gt;</code>
              </li>
              <li>
                <code>&lt;a title="article title"&gt;</code>
              </li>
              <li>
                <code>&lt;div data-qa="Teaser.Intro"&gt;</code>
              </li>
              <li>
                <code>&lt;a data-qa="Teaser.Link" href="article link"&gt;</code>
              </li>
            </ul>
          </Cell>
        </Grid>
        {/*  */}
        <Grid>
          <Cell className="post-row-heading" col={3}>
            Collection Size:
          </Cell>
          <Cell className="post-row-cell" col={9}>
            38,861 entries (before removal of duplicates)
          </Cell> 
        </Grid>
        {/*  */}
        <Grid>
          <Cell className="post-row-heading" col={3}>
            Size Under Study:
          </Cell>
          <Cell className="post-row-cell" col={9}>
            8,742 entries after removing rows with duplicate article introductions
          </Cell> 
        </Grid>
        {/*  */}
        <Grid>        
          <Cell className="post-row-heading" col={3}>
            Text processing and analysis using:
          </Cell>
          <Cell className="post-row-cell" col={9}>
          Python
          </Cell>
        </Grid> 
      </div>
    </div>
  )
}
