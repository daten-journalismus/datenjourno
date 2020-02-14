import React, { Component} from "react"
import { Grid, Cell } from "react-mdl"

class Work extends Component {
  render() {
    return(
      <Grid>
        <Cell col={4}>
          <p>{this.props.startYear} &ndash; {this.props.endYear} </p>
        </Cell>
        <Cell col={8}>
          <h5 style={{marginTop:"0px",textAlign:"left"}}>{this.props.taskName} </h5>
          <p>{this.props.taskDescription} </p>
        </Cell>
      </Grid>
    )
  }
}

export default Work