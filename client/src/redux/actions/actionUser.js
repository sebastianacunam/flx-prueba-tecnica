import clienteAxios from '../../config/clienteAxios.js'
import { GET_USERS } from '../utils/constants.js'

export function getUsers(){
    return async function(dispatch){
        try {
            const json = await clienteAxios.get('/users') 
            return dispatch({
                type: GET_USERS,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}