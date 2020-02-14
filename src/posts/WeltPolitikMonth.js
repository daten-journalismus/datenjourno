import React, { Component } from 'react'
import Iframe from './Iframe'
import i1 from "../img/welt_monthly_topics_01_2020_pie.png"
import { Grid, Cell } from 'react-mdl'

export class WeltPolitikMonth extends Component {

  constructor(props){
    super(props)
    this.state= {
      src:"../welt_monthly_202001.html"
    }
  }
  render() {
    return (
      <div className="post-row-content">
      <h5> Die Welt Politik - January 2020 - Topic Frequency</h5>
        <img src={i1} alt="frequent topics" />
        <h5>Die Welt Politik - January 2020 - Topics Covered More Than Two Times with Further Details</h5>
        <Grid style={{backgroundColor:"#F4F3F3"}}>
          <Cell style={{maxWidth:"64px"}} col={1}>Date</Cell>
          <Cell style={{maxWidth:"62px"}} col={1}>Paywall</Cell>
          <Cell style={{maxWidth:"70px"}} col={1}>Category</Cell>
          <Cell style={{maxWidth:"163px"}} col={2}>Topic</Cell>
          <Cell style={{maxWidth:"150px"}} col={1}>Frequency</Cell>
          <Cell style={{maxWidth:"165px"}} col={2}>Title</Cell>
          <Cell style={{maxWidth:"170px"}} col={2}>Description</Cell>
          <Cell style={{maxWidth:"165px"}} col={2}>URL</Cell>
        </Grid>
        <Iframe source={this.state.src}/>
      </div>
    )
  }
}

export default WeltPolitikMonth
