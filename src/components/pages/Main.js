import React from "react"
import { Switch,Route } from "react-router-dom"

import Landing from "./Landing"
import Project from "./Project"
import Bio from "./Bio"
import About from "./About"
// import Contact from "./Contact"

// const
const Main= ()=> (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route path="/about" component={About} />
    <Route path="/project" component={Project} />
    <Route path="/bio" component={Bio} />
    {/* <Route path="/contact" component={Contact} /> */}

  </Switch>  
)

export default Main