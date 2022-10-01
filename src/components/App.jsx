import React, { useEffect, useState } from 'react'
import Contact from './Contact'
import ProfilePic from "./ProfilePic"
import IconBar from './IconBar'
import axios from 'axios'

const App =() => {

  const [user, setUser] = useState({})
  const [info, setInfo] = useState({info1:'-', info2:'-'})

  useEffect(()=>{
    getData()
  },[])
  
  const handleClick = (e) => {

    switch (e.currentTarget.value) {
      case 'nombre':
        setInfo({
          info1: e.currentTarget.name,
          info2: user.name.first +" "+ user.name.last
        })
        break
      case 'correo':
        setInfo({
          info1: e.currentTarget.name,
          info2: user.email
        })
        break
      case 'cumpleanos':
        setInfo({
          info1: e.currentTarget.name,
          info2: (user.dob.date).substring(0, 10)
        })
        break
      case 'direccion':
        setInfo({
          info1: e.currentTarget.name,
          info2: user.location.street.number +" "+ user.location.street.name
        })
        break
      case 'telefono':
        setInfo({
          info1: e.currentTarget.name,
          info2: user.phone
        })
        break
      case 'contrasena':
        setInfo({
          info1: e.currentTarget.name,
          info2: user.login.password
        })
        break
    
      default:
        break;
    }

  }

  const getData = async()=>{
    try {
      const res = await axios.get("https://randomuser.me/api/")
      console.log(res.data.results);
      setUser(res.data.results[0])
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <ProfilePic img_url={user?.picture?.medium} />
      <Contact info={info}/>
      <IconBar onClick={handleClick}/>
    </>
  )
}

export default App