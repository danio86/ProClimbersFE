import {
    USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT,
    USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS,
    USER_DETAILS_FAIL, USER_DETAILS_REQUEST, USER_DETAILS_SUCCESS, USER_DETAILS_RESET,
    USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST,
    USER_UPDATE_PROFILE_SUCCESS, USER_UPDATE_PROFILE_RESET,
    USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_LIST_FAIL, USER_LIST_RESET,
    USER_DELETE_REQUEST, USER_DELETE_SUCCESS, USER_DELETE_FAIL,
    USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, USER_UPDATE_RESET,
} from '../constants/userConstants'

import { ORDER_LIST_MY_RESET } from '../constants/orderConstants'


import axios from 'axios'



export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_LOGIN_REQUEST })

        // We want to send data in the headers, so we create a config object
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        // We make our request to the backend to get our token
        const {data} = await axios.post(
            '/api/users/login/',
            {'username': email, 'password': password},
            config
        )

        // We dispatch our success action
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // We set our user info in local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        // We dispatch our fail action
        dispatch({
            type: USER_LOGIN_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}

export const logout = () => (dispatch) => {
    // We remove our user info from local storage
    localStorage.removeItem('userInfo')
    // We dispatch our logout action
    dispatch({ type: USER_LOGOUT })
    dispatch({ type: USER_DETAILS_RESET })
    dispatch({ type: ORDER_LIST_MY_RESET })
    dispatch({ type: USER_LIST_RESET })
}


export const register = (name, email, password) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST })

        // We want to send data in the headers, so we create a config object
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        // We make our request to the backend to get our token
        const {data} = await axios.post(
            '/api/users/register/',
            {'name': name, 'email': email, 'password': password},
            config
        )

        // We dispatch our success action
        dispatch({
            type: USER_REGISTER_SUCCESS,
            payload: data
        })

        // We dispatch our login success action
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // We set our user info in local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        // We dispatch our fail action
        dispatch({
            type: USER_REGISTER_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}

export const getUserDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DETAILS_REQUEST })

        // We destructure our userLogin from getState
        const { userLogin: { userInfo } } = getState()

        // We want to send data in the headers, so we create a config object
        const config = {
            headers: {
                'Content-type': 'application/json',
                // We pass in our token in the headers
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // We make our request to the backend to get our token
        const {data} = await axios.get(
            `/api/users/${id}/`,
            config
        )

        // We dispatch our success action
        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

    } catch (error) {
        // We dispatch our fail action
        dispatch({
            type: USER_DETAILS_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}

export const updateUserProfile = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_PROFILE_REQUEST })

        // We destructure our userLogin from getState
        const { userLogin: { userInfo } } = getState()

        // We want to send data in the headers, so we create a config object
        const config = {
            headers: {
                'Content-type': 'application/json',
                // We pass in our token in the headers
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // We make our request to the backend to get our token
        const {data} = await axios.put(
            `/api/users/profile/update/`,
            user,
            config
        )

        // We dispatch our success action
        dispatch({
            type: USER_UPDATE_PROFILE_SUCCESS,
            payload: data
        })

        // We dispatch our login success action
        dispatch({
            type: USER_LOGIN_SUCCESS,
            payload: data
        })

        // We set our user info in local storage
        localStorage.setItem('userInfo', JSON.stringify(data))

    } catch (error) {
        // We dispatch our fail action
        dispatch({
            type: USER_UPDATE_PROFILE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}




export const listUsers = () => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_LIST_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.get(
            `/api/users/`,
            config
        )

        dispatch({
            type: USER_LIST_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_LIST_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}


export const deleteUser = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_DELETE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        // await axios.delete(
        //     `/api/users/delete/${id}/`,
        //     config
        // )

        const {data} = await axios.delete(
            `/api/users/delete/${id}/`,
            config
        )

        dispatch({
            type: USER_DELETE_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type: USER_DELETE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}


export const updateUser = (user) => async (dispatch, getState) => {
    try {
        dispatch({ type: USER_UPDATE_REQUEST })

        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'content-type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const {data} = await axios.put(
            `/api/users/update/${user._id}/`,
            user,
            config
        )

        dispatch({
            type: USER_UPDATE_SUCCESS,
        })

        dispatch({
            type: USER_DETAILS_SUCCESS,
            payload: data
        })

        dispatch({
            type: USER_DETAILS_RESET
        })

    } catch (error) {
        dispatch({
            type: USER_UPDATE_FAIL,
            payload: error.response && error.response.data.detail ? error.response.data.detail : error.message,
        })
    }
}

