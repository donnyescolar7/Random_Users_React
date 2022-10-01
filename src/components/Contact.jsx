import "./styles/Contact.css"
import React, { useState } from 'react'

const Contact = ({info}) => {

  /*const [state, setState] = useState({
    info1: "",
    info2: ""
  })*/

  const {info1, info2} = info
  
  return (
    <>
    <div className='info'>
      <p className='title'>{info1}</p>
      <h2>{info2}</h2>
    </div>
    </>
  )

}

export default Contact