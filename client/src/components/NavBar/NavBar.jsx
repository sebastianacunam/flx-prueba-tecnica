import React from 'react'
import '../../assets/scss/layout/_navBar.scss'
import InputSearch from '../InputSearch/InputSearch.jsx'
import InputSelect from '../InputSelect/InputSelect.jsx'

export default function NavBar() {
  return (
    <div className='navBar-container'>
      <div>
        <p><span style={{color: '#878787'}}>Usuarios /</span> Listado de usuarios</p>
      </div>
      <div className='navBar-inputs'>
        <InputSearch />
        <InputSelect />

      </div>

    </div>
  )
}
