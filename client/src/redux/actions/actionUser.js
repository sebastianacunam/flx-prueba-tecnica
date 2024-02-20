import clienteAxios from '../../config/clienteAxios.js'
import { GET_USERS, GET_SEARCH, POST_USER, FILTER_STATUS, REMOVE_USER, PUT_USER } from '../utils/constants.js'

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

export function filterStatus(payload){
    return {
        type: FILTER_STATUS,
        payload
    }
}

export function removeUser(payload){
    return async function(dispatch){
        try {
            const json = await clienteAxios.delete(`/users/${payload}`)
            return dispatch ({
                type: REMOVE_USER,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}

export function putUser(payload){
    return async function(dispatch){
        try {
            const json = await  clienteAxios.put(`/users/${payload.id}`, payload);
            return dispatch({
                type: PUT_USER,
                payload: json.data
            })
        } catch (error) {
            console.log(error.message)
        }
    }
}