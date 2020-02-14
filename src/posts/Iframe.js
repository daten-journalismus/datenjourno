import React from 'react'

const Iframe= ({source})=> {

  if(!source){
    return(
      <div>Loading...</div>
    )
  }
  const src= source
  return (
    <div> 
      <iframe width="100%" height="350px" title="embed" src={src} frameborder="0"/>
    </div>
  )
}

export default Iframe