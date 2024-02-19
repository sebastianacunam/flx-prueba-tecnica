import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar.jsx';
import { Space, Table, Tag } from 'antd';
import { getUsers } from '../../redux/actions/actionUser.js';
import '../../assets/scss/layout/_table.scss'


export default function tableComponent () {
  const users = useSelector((state)=>state.allUsers)
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getUsers())
  },[])


  const columns = [
    {
      title: 'Usuario',
      dataIndex: 'username',
      key: 'username',
      render: (text) => <a>{text}</a>,
    },
    {
      title: 'Nombre',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Apellido',
      dataIndex: 'lastname',
      key: 'lastname',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Edad',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Estado',
      key: 'status',
      dataIndex: 'status',
      
    },
    {
      title: 'Acciones',
      key: 'action',
      render: (_, record) => (
          <Space size="middle">
          <a>Editar </a>
          <a>Eliminar</a>
        </Space>
      ),
    },
  ];  

  return (
    <div>
      <NavBar />
      <div className='table-container'>
        <div className='inner-table'>
          <Table columns={columns} dataSource={users}/>
        </div>
      </div>
    </div>

  )
}
