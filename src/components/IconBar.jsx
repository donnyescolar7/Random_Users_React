import React, { Component } from 'react'
import "./styles/IconBar.css"
import { IoPersonOutline, IoMailOutline, IoNewspaperOutline, IoMapOutline, IoPhonePortraitOutline, IoLockClosedOutline } from "react-icons/io5";

const IconBar =(props)=> {

  const handleClick = (e) => {
    console.log(e)
  }

  const { nombre, correo, cumpleanos, direccion, telefono, contrasena } = {
    nombre: "Donny Escolar",
    correo: "escolard@uninorte.edu.co",
    cumpleanos: "1 de Sep",
    direccion: "Km 5 via Puerto",
    telefono: "3024235398",
    contrasena: "123456789"
  };
  
  return (
    <React.Fragment>
      <div className='bar'>

        <button onClick={props.onClick} name="Mi nombre es," value='nombre' className="btn"><IoPersonOutline className='icono' /></button>
        <button onClick={props.onClick} name="Mi correo es," value='correo' className="btn"><IoMailOutline className='icono' /></button>
        <button onClick={props.onClick} name="Mi cumpleanos es," value='cumpleanos' className='btn'><IoNewspaperOutline className='icono' /></button>
        <button onClick={props.onClick} name="Mi direccion es," value='direccion' className='btn'><IoMapOutline className='icono' /></button>
        <button onClick={props.onClick} name="Mi numero es," value='telefono' className='btn'><IoPhonePortraitOutline className='icono' /></button>
        <button onClick={props.onClick} name="Mi contrasena es," value='contrasena' className='btn'><IoLockClosedOutline className='icono' /></button>

      </div>

    </React.Fragment>
  )
  
}


export default IconBar