import React from 'react'
import logo from '../../assets/imagenes/logo-flexxus.png'
import '../../assets/scss/layout/_menu.scss'

export default function Menu() {
  return (
    <div className='menu-container'>
        <img className='menu-logo' src={logo} alt="img not found" />
    </div>
  )
}
