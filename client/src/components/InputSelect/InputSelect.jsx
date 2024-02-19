import { Select } from 'antd';
import React from 'react';
import '../../assets/scss/layout/_inputSearch.scss'


export default function InputSelect() {
    const onChange = (value) => {
      console.log(`selected ${value}`);
    };
    const onSearch = (value) => {
      console.log('search:', value);
    };
    return (  
        <div className=''>
            <Select
                showSearch
                placeholder="Filtrar por estado"
                optionFilterProp="children"
                style={{
                    width: 190,
                  }}
                onChange={onChange}
                onSearch={onSearch}
                filterOption={(input, option) =>
                (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                }
                options={[
                {
                    value: 'active',
                    label: 'active',
                },
                {
                    value: 'inactive',
                    label: 'inactive',
                },
                ]}
            />
        </div>
    )}
