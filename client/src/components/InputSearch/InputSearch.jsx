import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import {React, useEffect, useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import '../../assets/scss/layout/_inputSearch.scss'
import {searchBar} from '../../redux/actions/actionUser.js'


export default function InputSearch (){

  const dispatch = useDispatch();
  const [user, setUser] = useState('');
  const usuario = useSelector(state => state.users);

  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  function handleSearch(e){
    e.preventDefault();
    setUser(e.target.value)
}

  function handleSubmit(){
    if(user.length){
        if(!user.replace(/ /g, "").match(/[^A-Za-z0-9]/)){
            dispatch(searchBar(user))
            setUser('');
        } else {
            alert('La búsqueda no puede contener símbolos.')
        }
    }else {
        alert('La búsqueda no puede estar vacía')
    }
}


    return (
      <div className='input-search-container'>
        <Space direction="vertical">
          <Search
            placeholder="Buscar usuarios"
            onChange={ (e) => handleSearch (e) }
            onSearch={ (e) => handleSubmit (e) }
            value={user}
            style={{
              width: 290,
            }}
          />
        </Space>
      </div>
    )
}

