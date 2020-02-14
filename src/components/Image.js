import React from 'react'
import {useHistory} from "react-router-dom"

export default function Image({src}) {
  let imgStyles= {
    width:100+"%",
    height:80+"vh",
    objectFit:"contain"
  }

  const history = useHistory();

  function redirect() {
    history.push("/project");
  }

  return (
    <img onClick={redirect} src={src} alt="landing" style={imgStyles} />
    // <img src={src} alt="landing" style={imgStyles} />
  )
}
