import { Select } from 'antd';
import React from 'react';
import '../../assets/scss/layout/_inputSearch.scss'
import { useDispatch } from 'react-redux';
import { filterStatus } from '../../redux/actions/actionUser';


export default function InputSelect() {
    const dispatch = useDispatch();

    function handleFilter(e){
        dispatch(filterStatus(e))
    }

    return (  
        <div className=''>
            <Select
                showSearch
                placeholder="Filtrar por estado"
                optionFilterProp="children"
                style={{
                    width: 190,
                  }}
                onChange={(e) => handleFilter(e)}
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
