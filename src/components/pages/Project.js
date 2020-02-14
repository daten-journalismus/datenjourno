import React,{Component } from "react"
import { Tabs, Tab } from "react-mdl"
import Faz from "../news/Faz"
import SZ from "../news/SZ"
import Welt from "../news/Welt"
import Zeit from "../news/Zeit"
import Bild from "../news/Bild"
import Focus from "../news/Focus"
import Hb from "../news/Hb"
import Spiegel from "../news/Spiegel"
import Tagesspiegel from "../news/Tagesspiegel"
import Tonline from "../news/Tonline"
import Webde from "../news/Webde"
import YahooNews from "../news/YahooNews"
import Standard from "../news/Standard"
import BingNews from "../news/BingNews"
import Kronen from "../news/Kronen"
import Presse from "../news/Presse"
import Kurier from "../news/Kurier"
import NZZ from "../news/NZZ"
import DE from "../reddit/DE"
import Europe from "../reddit/Europe"

class Project extends Component {

  constructor(props) {
    super(props)
  
    this.state= {
      activeTab: 0,
      isSubTab: false,
      subTabContent: "Sub-tab"
    }

    this.handler = this.handler.bind(this)
    this.getTabId= this.getTabId.bind(this)
    this.loadContent= this.loadContent.bind(this)
    this.toggleCategories= this.toggleCategories.bind(this)
  }

  handler() {
    this.setState({
      activeTab: 4,
      isSubTab: true
    })
  }

  getTabId() {
    return(this.state.activeTab)
  }

  loadContent(content) {
    // console.log("loadContent: ",content)
    this.setState({subTabContent:content})
  }

  toggleCategories() {
    
    if (this.state.activeTab === 0) {
      return(         
        // DE news
        <div className="content">
          <Welt handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories}> </Welt>
          <Bild handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <BingNews handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Faz handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Focus handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories}/>
          <Hb handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories}/>
          <Spiegel handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories}/>
          <SZ handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Tagesspiegel handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories}/>
          <Tonline handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Webde handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <YahooNews handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Zeit handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
        </div>        
      )
    } else if (this.state.activeTab === 1) {
      return(
        // AT news
        <div className="content">
          <Standard handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Kronen handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Kurier handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Presse handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
        </div>        
      )
    } else if (this.state.activeTab === 2) {
      return(
        // CH news
        <div className="content">
          <NZZ handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
        </div>
      )
    } else if (this.state.activeTab === 3) {
      return(
        // Reddit
        <div className="content">
          <DE handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
          <Europe handler={this.handler} loadContent={this.loadContent} toggleTabs={this.toggleCategories} />
        </div>
      )
    } else {

      console.log("tabContent: ",this.state.tabContent)
      return(
        // Open Subtab
        <div className="tab-content" >
          {/* <h2>subtab content</h2> */}
          {this.state.subTabContent}
        </div>
        
      )
    } 
    
    /*  else if (this.state.activeTab === 4) {
      return(
        <div><h1>this is twitter</h1></div>
      )
    } */
  }  

  render(){    
    return(
      <div className="category-tabs">
        <Tabs className="tab-bar" activeTab={this.state.activeTab} onChange={(tabId)=> this.setState({activeTab:tabId})} ripple>
          <Tab><span className="de" role="img" aria-label="flag_de">🇩🇪</span> <span>Politics</span></Tab>
          <Tab><span className="at" role="img" aria-label="flag_at">🇦🇹</span> <span>Politics</span></Tab>
          <Tab><span className="ch" role="img" aria-label="flag_ch">🇨🇭</span> <span>Politics</span></Tab>
          <Tab><img src="/img/reddit.png" height="30px" alt="twitter"/> Reddit</Tab>
          {/* <Tab><img src="/img/twitter.png" height="30px" alt="twitter"/>Twitter</Tab> */}
        </Tabs>
       <div>
         {this.toggleCategories()}
       </div>
        

      </div>
    )
  }

  /* render(){
    return(
     
    )
  } */
}

export default Project