import { Space, Table, Tag } from 'antd';
import NavBar from '../NavBar/NavBar.jsx';
import React from 'react';


import '../../assets/scss/layout/_table.scss'

const columns = [
  {
    title: 'Usuario',
    dataIndex: 'usuario',
    key: 'usuario',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Nombre',
    dataIndex: 'nombre',
    key: 'nombre',
  },
  {
    title: 'Apellido',
    dataIndex: 'apellido',
    key: 'apellido',
  },
  {
    title: 'Estado',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag === 'activo' ? 'green' : 'volcano';
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </>
    ),
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
const data = [
        {
        key: '1',
        usuario: 'John Brown',
        nombre: 'John',
        apellido: 'Brown',
        age: 32,
        address: 'New York No. 1 Lake Park',
        tags: ['activo'],
    },
    {
        key: '2',
        usuario: 'Jim Green',
        nombre: 'Jim',
        apellido: 'Green',
        age: 42,
        address: 'London No. 1 Lake Park',
        tags: ['activo'],
    },
    {
        key: '3',
        usuario: 'Joe Black',
        nombre: 'Joe',
        apellido: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['inactivo'],
    },
    {
        key: '4',
        usuario: 'Joe Black',
        nombre: 'Joe',
        apellido: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['inactivo'],
    },
    {
        key: '5',
        usuario: 'Joe Black',
        nombre: 'Joe',
        apellido: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['inactivo'],
    },
    {
        key: '6',
        usuario: 'Joe Black',
        nombre: 'Joe',
        apellido: 'Black',
        age: 32,
        address: 'Sidney No. 1 Lake Park',
        tags: ['inactivo'],
    },
  ];
const tableComponent = () => {
  return (
    <div>
      <NavBar />
      <div className='table-container'>
        <div className='inner-table'>
          <Table columns={columns} dataSource={data} />
        </div>
      </div>
    </div>

  )
}
export default tableComponent;