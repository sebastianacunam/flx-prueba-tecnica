import React from 'react'
import Table from '../Table/Table.jsx'
import Menu from '../Menu/Menu.jsx'

import '../../assets/scss/layout/_home.scss'

export default function Home() {

  return (
    <div className='home-container'>
      <Menu />
      <Table />
    </div>
  )
}
