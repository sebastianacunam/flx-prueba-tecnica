import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import NavBar from '../NavBar/NavBar.jsx';
import { Space, Table, Tag } from 'antd';
import { getUsers, removeUser, putUser } from '../../redux/actions/actionUser.js';
import { Button } from 'antd';
import '../../assets/scss/layout/_table.scss'


export default function tableComponent () {

  function validate (input){
    let errors = {};
    const regExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    const onlyNumbers = /^[1-9]\d*$/

    if(!input.username) errors.username = 'Este campo es requerido'
    if(!input.name) errors.name = 'Este campo es requerido'
    if(!input.lastname) errors.lastname = 'Este campo es requerido'
    if(!input.status || input.status === '-') errors.status = 'Debe seleccionar un estado'
    
    if(!input.age) {
      errors.age = 'Este campo es requerido'
    } else if(!input.age.match(onlyNumbers)) {
      errors.age = 'Deben ser números positivos'
    }

    if(!input.email){
        errors.email = 'Este campo es requerido'
    }else if(!input.email.match(regExp)){
        errors.email = 'Tiene que ser un correo válido'
    } 

    return errors
  }

  const users = useSelector((state)=>state.allUsers)
  const dispatch = useDispatch();
  const [size, setSize] = useState('large'); 
  const [showPopup, setShowPopup] = useState(false);
  const [showPopupEdit, setShowPopupEdit] = useState(false);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserName, setSelectedUserName] = useState(null);
  const [input, setInput] = useState({
    username: '',
    name: '',
    lastname: '',
    email: '',
    status: '',
    age: ''
  })
  const [errors, setErrors] = useState({})

  
  useEffect(()=>{
      dispatch(getUsers())
  },[dispatch])

  //Funciones manejadoras para eliminar usuarios
  function handleDelete(id, name) {
    setShowPopup(true);
    setSelectedUserId(id);
    setSelectedUserName(name)
  }

  function confirmDelete() {
    dispatch(removeUser(selectedUserId));
    alert('Usuario eliminado satisfactoriamente');
    setShowPopup(false);
    dispatch(getUsers());
  }
  /////////////////////////////////////////////////////
  
  //Funciones manejadoras para editar usuarios
  function handleEdit(id){
    setShowPopupEdit(true)
    setSelectedUserId(id);

  }

  function confirmEdit(){
    dispatch(putUser({
      username: input.username,
      name: input.name,
      lastname: input.lastname,
      email: input.email,
      status: input.status,
      age: input.age,
      id: selectedUserId

    }))
    alert('Usuario editado correctamente')
    setShowPopupEdit(false)
    dispatch(getUsers())
  }

    function handleChange(e){
    setInput({
        ...input, 
        [e.target.name]: e.target.value
    })
    setErrors(validate({
        ...input,
        [e.target.name]: e.target.value
    }))
  }
  
  /////////////////////////////////////////////////////
  const columns = [
    {
      title: 'Acciones',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          <a onClick={() => handleEdit(record.id)}>Editar</a>
          <a onClick={() => handleDelete(record.id, record.name)}>Eliminar</a>
        </Space>
      ),
    },
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
      render: (text, record) => (
        <span key={record.id}>
          {text.split(',').map((tag) => {
            let color = tag === 'active' ? 'green' : 'volcano';
            return (
              <Tag color={color} key={tag}>
                {tag.trim().toUpperCase()}
              </Tag>
            );
          })}
        </span>
      ),
      
    }
  ];  

  return (
    <div>
      <NavBar />
      <div className='table-container'>
        <div className='inner-table' >
          <Table columns={columns} dataSource={users} rowKey="id" />
        </div>
      </div>
      
      {showPopup && (
        <>
          <div className='overlay'>
            <div className='popup'>
              <div className='post-user-popup'>
                <p className='title-popup-form'>Eliminar usuario</p>
                <div>
                  <button className='close-pop-up' onClick={() => setShowPopup(false)}>x</button>
                </div>
              </div>
              <hr className='hr-line' />
              <div>
                <p>
                  ¿Está seguro que quiere eliminar al usuario <span style={{color:'red'}}>@{selectedUserName}</span>?
                </p>
                <div className='btns-detele-user'>
                  <Button className='btn-cancel' onClick={()=>setShowPopup(false)}>
                    Cancelar
                  </Button>
                  <Button type='primary' danger onClick={confirmDelete}>
                    Eliminar
                  </Button>

                </div>
              </div>
            </div>
          </div>
        </>
      )}

      {
        showPopupEdit && (
          <>
          <div className='overlay' onClick={() => setShowPopupEdit(false)}></div>
          <div className='popup'>
            <div className='post-user-popup'>
              <p className='title-popup-form'>Editar usuario</p>
              <div>
                <button className='close-pop-up' onClick={() => setShowPopupEdit(false)}>x</button>
              </div>
            </div>
            <hr className='hr-line'/>
            <form className='popup-form'>
              
              <div className='form-row'>
                <div className='form-column'>
                  <label htmlFor=''> Usuario</label>
                  <input className='input-pop-form' type='text' value={input.username} onChange={(e)=>handleChange(e)} placeholder='johndoe' name='username'/>
                  {errors.username && (<p className='errors'>{errors.username}</p>)}
                </div>
                <div className='form-column'>
                  <label htmlFor=''>Email</label>
                  <input className='input-pop-form' type='text' value={input.email} onChange={(e)=>handleChange(e)} placeholder='johndoe@domain.com' name='email'/>
                  {errors.email && (<p className='errors'>{errors.email}</p>)}
                </div>
              </div>


              <div className='form-row'>
                <div className='form-column'>
                  <label htmlFor=''>Nombre </label>
                  <input className='input-pop-form' type='text' value={input.name} onChange={(e)=>handleChange(e)} placeholder='John' name='name'/>
                  {errors.name && (<p className='errors'>{errors.name}</p>)}
                </div>
                <div className='form-column'>
                  <label htmlFor=''>Apellido</label>
                  <input className='input-pop-form' type='text' value={input.lastname} onChange={(e)=>handleChange(e)} placeholder='Doe' name='lastname'/>
                  {errors.lastname && (<p className='errors'>{errors.lastname}</p>)}
                </div>
              </div>

              <div className='form-row'>
                <div className='form-column'>
                  <label htmlFor=''>Estado</label>
                  <select className='input-pop-form' value={input.status} onChange={(e) => handleChange(e)} name="status">
                    <option value='-'>Seleccione un estado</option>
                    <option value='active'>active</option>
                    <option value='inactive'>inactive</option>
                  </select>
                  {errors.status && (<p className='errors'>{errors.status}</p>)}
                </div>
                <div className='form-column'>
                  <label htmlFor=''>Edad</label>
                  <input className='input-pop-form' type='text' value={input.age} onChange={(e)=>handleChange(e)} placeholder='27' name='age'/>
                  {errors.age && (<p className='errors'>{errors.age}</p>)}
                </div>
              </div>

              <div className='btn-form-post'>
              {
                errors.name || errors.lastname || errors.email || errors.status || errors.age || errors.username ?
                <Button onClick={(e)=>confirmEdit(e)} type='primary' size={size} disabled>
                  Editar usuario
                </Button>
                : 
                <Button onClick={(e)=>confirmEdit(e)} type='primary' size={size}>
                  Editar usuario
                  </Button>
              }
              </div>
            </form>
          </div>
        </>
        )
      }

    </div>

  )
}
