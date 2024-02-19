import React from 'react'
import '../../assets/scss/layout/_navBar.scss'
import InputSearch from '../InputSearch/InputSearch.jsx'
import InputSelect from '../InputSelect/InputSelect.jsx'
import AddUserBotton from '../AddUserBotton/AddUserBotton.jsx'
import { HomeFilled } from '@ant-design/icons';
import { useDispatch } from 'react-redux'
import { getUsers } from '../../redux/actions/actionUser.js'

export default function NavBar() {

  const dispatch = useDispatch()

  function handleClick(){
    dispatch(getUsers())
  }


  return (
    <div className='navBar-container'>
      <div>
        <p><span style={{color: '#878787'}}>Usuarios /</span> Listado de usuarios</p>
      </div>
      <div className='navBar-inputs'>
        <div className='navBar-left'>
          <InputSearch />
          <InputSelect />
          <HomeFilled className='navBar-reload' onClick={(e)=>handleClick(e)}/>

        </div>
        <div className='navBar-right'>
          <AddUserBotton />
        </div>
      </div>

    </div>
  )
}
