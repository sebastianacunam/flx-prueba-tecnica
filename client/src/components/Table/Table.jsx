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
  },[dispatch])
  console.log('a ver si me trae los usuarios',users)

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
          <a>Editar {record.name}</a>
          <a>Eliminar</a>
        </Space>
      ),
    },
  ];
  // const data = [
  //         {
  //         key: '1',
  //         usuario: 'John Brown',
  //         nombre: 'John',
  //         apellido: 'Brown',
  //         age: 32,
  //         address: 'New York No. 1 Lake Park',
  //         tags: ['activo'],
  //     },
  //     {
  //         key: '2',
  //         usuario: 'Jim Green',
  //         nombre: 'Jim',
  //         apellido: 'Green',
  //         age: 42,
  //         address: 'London No. 1 Lake Park',
  //         tags: ['activo'],
  //     },
  //     {
  //         key: '3',
  //         usuario: 'Joe Black',
  //         nombre: 'Joe',
  //         apellido: 'Black',
  //         age: 32,
  //         address: 'Sidney No. 1 Lake Park',
  //         tags: ['inactivo'],
  //     }
  //   ];
  

  return (
    <div>
      <NavBar />
      <div className='table-container'>
        <div className='inner-table'>
          <Table columns={columns} dataSource={users} />
        </div>
      </div>
    </div>

  )
}
