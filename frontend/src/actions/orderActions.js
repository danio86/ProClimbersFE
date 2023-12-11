import { 
    ORDER_CREATE_FAIL, ORDER_CREATE_REQUEST, ORDER_CREATE_SUCCESS, ORDER_CREATE_RESET,
    ORDER_DETAILS_FAIL, ORDER_DETAILS_REQUEST, ORDER_DETAILS_SUCCESS,
    ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, ORDER_PAY_RESET,
    ORDER_LIST_MY_FAIL, ORDER_LIST_MY_REQUEST, ORDER_LIST_MY_SUCCESS, ORDER_LIST_MY_RESET,
    ORDER_LIST_MY_ADMIN_FAIL, ORDER_LIST_MY_ADMIN_REQUEST, ORDER_LIST_MY_ADMIN_SUCCESS,
    ORDER_DELIVERED_FAIL, ORDER_DELIVERED_REQUEST, ORDER_DELIVERED_SUCCESS, ORDER_DELIVERED_RESET
} from "../constants/orderConstants";

import { CART_RESET } from '../constants/cartConstants'
import axios from 'axios'


// Compare this snippet from frontend/src/actions/orderActions.js:
export const createOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_CREATE_REQUEST })
        
        const { userLogin: { userInfo } } = getState()
        // we destructure userInfo from getState().userLogin.userInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
                // we need to send the token along with the request
            }
        }

        const { data } = await axios.post(`/api/orders/add/`, order, config)
        // const { data } = await axios.post(`/api/orders`, order, config)
        // we are sending the order object as the second argument
        // we are sending the config object as the third argument

        dispatch({ type: ORDER_CREATE_SUCCESS, payload: data })
        // we are sending the data object as the payload

        dispatch({ type: CART_RESET, payload: data })
        // we are resetting the cart state
        // dispatch({ type: ORDER_CREATE_RESET })
        // we are resetting the order state



        localStorage.removeItem('cartItems')
        // we are removing the cartItems from local storage
    } catch (error) {
        dispatch({ 
            type: ORDER_CREATE_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const getOrderDetails = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DETAILS_REQUEST })
        
        const { userLogin: { userInfo } } = getState()
        // we destructure userInfo from getState().userLogin.userInfo

        const config = {
            headers: {
                // 'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
                // we need to send the token along with the request
            }
        }

        const { data } = await axios.get(`/api/orders/${id}/`, config)
        // const { data } = await axios.get(`/api/orders/${id}`, config)
        // we are sending the config object as the second argument

        dispatch({ type: ORDER_DETAILS_SUCCESS, payload: data })
        // we are sending the data object as the payload

    } catch (error) {
        dispatch({ 
            type: ORDER_DETAILS_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_PAY_REQUEST })
        
        const { userLogin: { userInfo } } = getState()
        // we destructure userInfo from getState().userLogin.userInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
                // we need to send the token along with the request
            }
        }

        const { data } = await axios.put(`/api/orders/${orderId}/pay/`, paymentResult, config)
        // const { data } = await axios.put(`/api/orders/${orderId}/pay`, paymentResult, config)
        // we are sending the paymentResult object as the second argument
        // we are sending the config object as the third argument

        dispatch({ type: ORDER_PAY_SUCCESS, payload: data })
        // we are sending the data object as the payload

    } catch (error) {
        dispatch({ 
            type: ORDER_PAY_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}


export const listMyOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_MY_REQUEST })
        
        const { userLogin: { userInfo } } = getState()
        // we destructure userInfo from getState().userLogin.userInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
                // we need to send the token along with the request
            }
        }

        const { data } = await axios.get(`/api/orders/myorders/`, config)
        // we are sending the config object as the second argument

        dispatch({ type: ORDER_LIST_MY_SUCCESS, payload: data })
        // we are sending the data object as the payload

    } catch (error) {
        dispatch({ 
            type: ORDER_LIST_MY_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const listOrders = () => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_LIST_MY_ADMIN_REQUEST })
        
        const { userLogin: { userInfo } } = getState()
        // we destructure userInfo from getState().userLogin.userInfo

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
                // we need to send the token along with the request
            }
        }

        const { data } = await axios.get(`/api/orders/`, config)
        // we are sending the config object as the second argument

        dispatch({ type: ORDER_LIST_MY_ADMIN_SUCCESS, payload: data })
        // we are sending the data object as the payload

    } catch (error) {
        dispatch({ 
            type: ORDER_LIST_MY_ADMIN_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}

export const deliverOrder = (order) => async (dispatch, getState) => {
    try {
        dispatch({ type: ORDER_DELIVERED_REQUEST })
        
        const { userLogin: { userInfo } } = getState()

        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userInfo.token}`
            }
        }

        const { data } = await axios.put(`/api/orders/${order._id}/deliver/`, {}, config)

        dispatch({ type: ORDER_DELIVERED_SUCCESS, payload: data })

    } catch (error) {
        dispatch({ 
            type: ORDER_DELIVERED_FAIL, 
            payload: error.response && error.response.data.message ? error.response.data.message : error.message 
        })
    }
}
