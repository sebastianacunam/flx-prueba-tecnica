import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import React, { useState } from 'react';
import { createUser, getUsers } from '../../redux/actions/actionUser.js';
import '../../assets/scss/layout/_addUserBotton.scss'
import { useDispatch } from 'react-redux';



export default function AddUserBotton () {

  function validate (input){
    let errors = {};
    const regExp =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if(!input.username) errors.username = 'Este campo es requerido'
    if(!input.name) errors.name = 'Este campo es requerido'
    if(!input.lastname) errors.lastname = 'Este campo es requerido'
    if(!input.age) errors.age = 'Este campo es requerido'
    
    if(!input.status || input.status === '-'){ 
      errors.status = 'Debe seleccionar un estado'
    }
    
    if(!input.email){
        errors.email = 'Este campo es requerido'
    }else if(!input.email.match(regExp)){
        errors.email = 'Tiene que ser un correo válido'
    } 

    return errors
  }
  
  const dispatch = useDispatch();
  const [size, setSize] = useState('large'); 
  const [showPopup, setShowPopup] = useState(false);
  const [errors, setErrors] = useState({})

  const [input, setInput] = useState({
    username: '',
    name: '',
    lastname: '',
    email: '',
    status: '',
    age: ''
  });

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

  function handleSubmit(e){
    e.preventDefault();
    if(input.name && input.lastname && input.email && input.status && input.age){
        alert('Usuario creado satisfactoriamente')
        dispatch(createUser(input));
        dispatch(getUsers());
        setInput({
            username: '',
            name: '',
            lastname: '',
            email: '',
            status: '',
            age: ''
        })
        setShowPopup(false)
    } else  { 
        alert('Faltan campos por completar')
    }
  }

  return (
    <div className='btn-container'>
      <Button onClick={() => setShowPopup(true)} type='primary' size={size}>
        Agregar usuario
      </Button>

      {showPopup && (
        <>
          <div className='overlay' onClick={() => setShowPopup(false)}></div>
          <div className='popup'>
            <div className='post-user-popup'>
              <p className='title-popup-form'>Agregar usuario</p>
              <div>
                <button className='close-pop-up' onClick={() => setShowPopup(false)}>x</button>
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
                    !input.name || !input.lastname || !input.email || input.status === '-' || !input.age || !input.username ? 
                    <Button onClick={(e)=>handleSubmit(e)} type='primary' size={size} disabled>
                     Agregar usuario
                    </Button>
                    : 
                    <Button onClick={(e)=>handleSubmit(e)} type='primary' size={size}>
                      Agregar usuario
                     </Button>
                    }
              </div>
            </form>
          </div>
        </>
      )}
    </div>
  );
};