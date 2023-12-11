import React, {useEffect, useState} from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'
import {LinkContainer} from 'react-router-bootstrap'
import { Form, Button, Table, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import LoadingSpinner from '../components/LoadingSpinner'
import { getUserDetails, updateUserProfile } from '../actions/userActions'
// import Forms from '../components/Forms'
import { USER_UPDATE_PROFILE_RESET } from '../constants/userConstants'
import { listMyOrders } from '../actions/orderActions'



function ProfilePage() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState(null)

    const navigate = useNavigate()
    const location = useLocation()
    // const redirect = location.search ? location.search.split('=')[1] : '/'
    const dispatch = useDispatch()
    const userDetails = useSelector(state => state.userDetails)
    const {error, loading, user} = userDetails
    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const userUpdateProfile = useSelector(state => state.userUpdateProfile)
    const {success} = userUpdateProfile

    const orderListMy = useSelector(state => state.orderListMy)
    const {loading: loadingOrders, error: errorOrders, orders} = orderListMy


    // useEffect(() => {
    //     if(!user || !user.name) {
    //         navigate('/login')
    //         // dispatch(getUserDetails('profile'))
    //     } else {
    //         if(!user.name || !user.name.name) {
    //             dispatch(getUserDetails('profile'))
    //         } else {
    //             setName(user.name)
    //             setEmail(user.email)
    //         }
    //     }
    // }, [user, dispatch, navigate, userInfo])

    useEffect(() => {
        if(!userInfo) {
            navigate('/login')
        } else {
            if(!user || !user.name || success || userInfo._id !== user._id) {
                dispatch({type: USER_UPDATE_PROFILE_RESET})
                dispatch(getUserDetails('profile'))
                dispatch(listMyOrders())
            } else {
                setName(user.name)
                setEmail(user.email)
            }
        }
    }, [user, dispatch, navigate, userInfo, success])

    const HandlSubmit = (e) => {
        e.preventDefault()
        if(password !== password2) {
            setMessage('Passwords do not match')
        } else {
            dispatch(updateUserProfile({
                id: user._id, 
                name: name, 
                email: email, 
                password: password
            }))
            setMessage(null)
        }
        // dispatch(register(name, email, password))
    }

    


  return (
    <Row>
        <Col md={3}>
            <h2>User Profile</h2>
            {message && <Message variant='danger'>{message}</Message>}
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <LoadingSpinner />}
            <Form onSubmit={HandlSubmit}>
                <Form.Group controlId='name'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type='name'
                        placeholder='Enter name'
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='email'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId='password2'>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Confirm password'
                        value={password2}
                        onChange={(e) => setPassword2(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>
                <Button type='submit' variant='primary'>
                    Update
                </Button>
            </Form>
        </Col>
        <Col md={9}>
            <h1>My Orders</h1>
            {loadingOrders ? <LoadingSpinner /> : errorOrders ? <Message variant='danger'>{errorOrders}</Message> : (
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>DATE</th>
                            <th>TOTAL</th>
                            <th>PAID</th>
                            <th>DELIVERED</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orders.map(order => (
                            <tr key={order._id}>
                                <td>{order._id}</td>
                                <td>
                                    {
                                        new Date(order.createdAt).toLocaleDateString('en-GB', {
                                            day: '2-digit', month: '2-digit', year: 'numeric'
                                        }).replace(/\//g, '.')
                                    }
                                </td>
                                {/* <td>{order.createdAt.substring(0,10)}</td> */}
                                <td>{order.totalPrice}€</td>
                                <td>{order.isPaid ? order.paidAt.substring(0,10) : (
                                    <i className='fas fa-times' style={{color: 'red'}}></i>
                                )}</td>
                                <td>{order.isDelivered ? order.deliveredAt.substring(0,10) : (
                                    <i className='fas fa-times' style={{color: 'red'}}></i>
                                )}</td>
                                <td>
                                    <LinkContainer to={`/login/order/${order._id}`}>
                                        <Button className='btn-sm' variant='light'>Info</Button>
                                    </LinkContainer>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            )}
        </Col>
    </Row>
  )
}

export default ProfilePage