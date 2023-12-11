import React, {useEffect, useState} from 'react'
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import {Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import Forms from '../components/Forms'
import Checkout from '../components/Checkout'
import { createOrder } from '../actions/orderActions'
import { ORDER_CREATE_RESET } from '../constants/orderConstants'



function PlaceOrderPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    // const orderCreate = useSelector(state => state.orderCreate)

    const orderCreate = useSelector(state => state.orderCreate)
    // const { order, success } = orderCreate 
    const { order, success, error } = orderCreate
 


    // Calculate prices
    cart.itemsPrice = cart.cartItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    cart.shippingPrice = (cart.itemsPrice > 150 ? 0 : 14).toFixed(2)
    cart.taxPrice = Number((0.062) * cart.itemsPrice).toFixed(2)
    cart.totalPrice = (Number(cart.itemsPrice) + Number(cart.shippingPrice) + Number(cart.taxPrice)).toFixed(2)
    

    if (!cart.paymentMethod) {
        navigate('/payment')
    }

    // useEffect(() => {
    //     if (success) {
    //         navigate(`/login/order/${order._id}`)
    //         dispatch({ type: ORDER_CREATE_RESET })
    //     }
    //     // eslint-disable-next-line
    // // }, [navigate, success, order])
    // }, [navigate, success, order, dispatch])

    useEffect(() => {
        if (success && order) {
            // console.log('Order ID:', order._id)
            setTimeout(() => {
                navigate(`/login/order/${order._id}`)
            }, 0)
            dispatch({ type: ORDER_CREATE_RESET })
        }
    }, [navigate, success, order, dispatch])


    //place final order
    const finalOrder = () => {
        // console.log(orderCreate)

        dispatch(createOrder({
            orderItems: cart.cartItems,
            shippingAddress: cart.shippingAddress,
            paymentMethod: cart.paymentMethod,
            itemsPrice: cart.itemsPrice,
            shippingPrice: cart.shippingPrice,
            taxPrice: cart.taxPrice,
            totalPrice: cart.totalPrice
    }))
    // navigate('/order')
    }

    // const finalOrder = () => {
    //     console.log(orderCreate)
    
    //     dispatch(createOrder({
    //         orderItems: cart.cartItems,
    //         shippingAddress: cart.shippingAddress,
    //         paymentMethod: cart.paymentMethod,
    //         itemsPrice: cart.itemsPrice,
    //         shippingPrice: cart.shippingPrice,
    //         taxPrice: cart.taxPrice,
    //         totalPrice: cart.totalPrice
    //     }))
    
    //     if (order && order._id) {
    //         navigate(`/login/order/${order._id}`)
    //     }
    // }



  return (
        <div>
            <Checkout step1 step2 step3 step4 />
            {/* <h1>Place Order</h1> */}
            <Row>
                <Col md={8}>
                    <ListGroup variant='flush'>
                        <ListGroup.Item>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address: </strong>
                                {cart.shippingAddress.address}, {cart.shippingAddress.city}{' '}
                                {cart.shippingAddress.postalCode},{' '}
                                {cart.shippingAddress.country}
                            </p>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Payment Method</h2>
                            <strong>Method: </strong>
                            {cart.paymentMethod}
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <h2>Order Items</h2>
                            {cart.cartItems.length === 0 ? <Message variant={ 'info' }>Your cart is empty</Message> : (
                                <ListGroup variant='flush'>
                                    {cart.cartItems.map((item, index) => (
                                        <ListGroup.Item key={index}>
                                            <Row>
                                                <Col md={1}>
                                                    <Image src={item.image} alt={item.name} fluid rounded />
                                                </Col>

                                                <Col>
                                                    <Link to={`/product/${item.product}`}>
                                                        {item.name}
                                                    </Link>
                                                </Col>

                                                <Col md={4}>
                                                    {item.qty} x ${item.price} = ${(item.qty * item.price).toFixed(2)}
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    ))}
                                </ListGroup>
                            )}
                        </ListGroup.Item>

                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant='flush'>

                            <ListGroup.Item>
                                <h2>Order Summary</h2>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>{cart.itemsPrice}€</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>{cart.shippingPrice}€</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>{cart.taxPrice}€</Col>
                                </Row>
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>{cart.totalPrice}€</Col>
                                </Row>
                            </ListGroup.Item>
                            
                            <ListGroup.Item>
                                {error && <Message variant='danger'>{error}</Message>}
                            </ListGroup.Item>

                            <ListGroup.Item>
                                <Button type='button' 
                                className='btn-block' 
                                disabled={cart.cartItems === 0} // if cart.cartItems === 0, then disabled={true}
                                // onClick={() => finalOrder()}
                                onClick={finalOrder}
                                >
                                    Place Order
                                </Button>
                            </ListGroup.Item>

                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </div>
        
  )
}


export default PlaceOrderPage