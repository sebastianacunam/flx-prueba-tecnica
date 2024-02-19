import { DownloadOutlined } from '@ant-design/icons';
import { Button, Radio } from 'antd';
import React, { useState } from 'react';
import '../../assets/scss/layout/_addUserBotton.scss'


const AddUserBotton = () => {
  const [size, setSize] = useState('large');
  return (
    <div className='btn-container'>
      <Button type="primary" size={size}>
        Agregar usuario
      </Button>
    </div>
  );
};
export default AddUserBotton;