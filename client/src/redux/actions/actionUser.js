import clienteAxios from '../../config/clienteAxios.js'
import { GET_USERS, GET_SEARCH, POST_USER } from '../utils/constants.js'

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

export function searchBar(name){
    return async function (dispatch){
        try {
            const json = await clienteAxios.get(`/users/?name=${name}`)
            return dispatch({
                type: GET_SEARCH,
                payload: json.data.length === 0 ? alert('No se encontraron resultados') : json.data
            })            
        } catch (error) {
            alert('Este usuario no existe!')
        }
    }
}

export function createUser(payload){
    return async function(dispatch){
        try {
            const json = await clienteAxios.post(`/users`, payload)
            return dispatch({
                type: POST_USER,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}