import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React from 'react';
import '../../assets/scss/layout/_inputSearch.scss'



export default function InputSearch (){
  const { Search } = Input;
  const suffix = (
    <AudioOutlined
      style={{
        fontSize: 16,
        color: '#1890ff',
      }}
    />
  );

  const onSearch = (value) => console.log(value);
    return (
      <div className='input-search-container'>
        <Space direction="vertical">
          <Search
            placeholder="Buscar usuarios"
            onSearch={onSearch}
            style={{
              width: 290,
            }}
          />
        </Space>
      </div>
    )
}

