import { Select } from 'antd';
import React from 'react';
const onChange = (value) => {
  console.log(`selected ${value}`);
};
const onSearch = (value) => {
  console.log('search:', value);
};
const InputSelect = () => {
    return (  
        <div className=''>
            <Select
                showSearch
                placeholder="Filtrar por estado"
                optionFilterProp="children"
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
export default InputSelect;
