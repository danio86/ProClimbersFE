import React, {useEffect, useState} from 'react'
import { redirect, useLocation, useNavigate } from 'react-router-dom'
import {Row, Col, ListGroup, Image, Card, Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import {Link} from 'react-router-dom'
import LoadingSpinner from '../components/LoadingSpinner'
import { PayPalButton } from 'react-paypal-button-v2'
import Forms from '../components/Forms'
import { getOrderDetails, payOrder, deliverOrder } from '../actions/orderActions'
import { useParams } from 'react-router-dom';
import { ORDER_PAY_RESET, ORDER_DELIVERED_RESET } from '../constants/orderConstants'








function OrderPage() {

    // const { id: orderId } = useParams()

    // const { orderId } = useParams();
    // let { orderId } = useParams();
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const orderDetails = useSelector(state => state.orderDetails)
    const { order, loading, error } = orderDetails

    const { id: orderId } = useParams()

    const [sdkReady, setSdkReady] = useState(false)

    const orderPay = useSelector(state => state.orderPay)
    const { loading: loadingPay, success: successPay } = orderPay

    const orderDelivered = useSelector(state => state.orderDelivered)
    const { loading: loadingDelivered, success: successDelivered } = orderDelivered

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin



    console.log('URL parameters:', useParams())

    // if (!loading && !error  && order._id !== Number(orderId)) {
    //     order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
    // }

if (!loading && !error  && order._id !== String(orderId)) {
    order.itemsPrice = order.orderItems.reduce((acc, item) => acc + item.price * item.qty, 0).toFixed(2)
}
// ASLk52yu1Hl3h8JRDQ72wNM0HHj5x59zTHexZP3Accp83Gq9NW6mnD9fBXCn769LjAZtUe_0LHgzh1Ae

const addPayPalScript = () => {
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.src = 'https://www.paypal.com/sdk/js?client-id=ASLk52yu1Hl3h8JRDQ72wNM0HHj5x59zTHexZP3Accp83Gq9NW6mnD9fBXCn769LjAZtUe_0LHgzh1Ae'
    script.async = true
    script.onload = () => {
        setSdkReady(true)
    }
    document.body.appendChild(script)
}

useEffect(() => {
    if (!userInfo) {
        navigate('/login')
    }

    // if (!order || successPay || orderId !== String(orderId)) {
    // if (!order || successPay || order._id !== String(orderId)) {
    // if (!order || successPay || (order && order._id !== String(orderId))) {
    if (!order || successPay || (order && order._id !== Number(orderId)) || successDelivered) {


        dispatch({ type: ORDER_PAY_RESET })
        dispatch({ type: ORDER_DELIVERED_RESET })
        dispatch(getOrderDetails(orderId))
    } else if (!order.isPaid) {
        if (!window.paypal) {
            addPayPalScript()
        } else {
            setSdkReady(true)
        }
    }
}, [order, orderId, dispatch, successPay, successDelivered])

// useEffect(() => {
//     if (!order || orderId !== String(orderId)) {
//         dispatch(getOrderDetails(orderId))
//     }
// // }, [order, orderId, dispatch, navigate])
// }, [order, orderId, dispatch])
// }, [order, orderId, ])



const successPaymentHandler = (paymentResult) => {
    console.log(paymentResult)
    dispatch(payOrder(orderId, paymentResult))
}


const handleDeliver = () => {
    dispatch(deliverOrder(order))
}

// return loading ?( <LoadingSpinner />) : error ? (<Message variant='danger'>{error}</Message>) : (

  return loading ? <LoadingSpinner /> : error ? <Message variant='danger'>{error}</Message> : 


  
  (
    <div>
        <h1>Order {order._id}</h1>
        <Row>
            <Col md={8}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h2>Shipping</h2>
                        <p>
                            <strong>Name: </strong>
                            {order.user.name}
                        </p>
                        <p>
                            <strong>Email: </strong>
                            <a href={`mailto:${order.user.email}`}>{order.user.email}</a>
                        </p>
                        <p>
                            <strong>Address: </strong>
                            {order.shippingAddress.address}, {order.shippingAddress.city}{' '}
                            {order.shippingAddress.postalCode},{' '}
                            {order.shippingAddress.country}
                        </p>

                        {order.isDelivered ? <Message variant='success'>Delivered on {order.DeliveredAt}</Message> : <Message variant='warning'>Not Delivered yet</Message>}

                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Payment Method</h2>
                        <strong>Method: </strong>
                        {order.paymentMethod}
                        
                        {order.isPaid ? <Message variant='success'>Paid on {order.paidAt}</Message> : <Message variant='warning'>Not Paid</Message>}
                    </ListGroup.Item>

                    <ListGroup.Item>
                        <h2>Order Items</h2>
                        {order.orderItems.length === 0 ? <Message variant={ 'info' }>No Order</Message> : (
                            <ListGroup variant='flush'>
                                {order.orderItems.map((item, index) => (
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
                                <Col>{order.itemsPrice}€</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Shipping</Col>
                                <Col>{order.shippingPrice}€</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Tax</Col>
                                <Col>{order.taxPrice}€</Col>
                            </Row>
                        </ListGroup.Item>

                        <ListGroup.Item>
                            <Row>
                                <Col>Total</Col>
                                <Col>{order.totalPrice}€</Col>
                            </Row>
                        </ListGroup.Item>
                        
                        {!order.isPaid && (
                            <ListGroup.Item>
                                {loadingPay && <LoadingSpinner />}
                                {!sdkReady ? <LoadingSpinner /> : (
                                    <PayPalButton 
                                        amount={order.totalPrice} 
                                        onSuccess={successPaymentHandler}
                                    
                                    />
                                )}
                            </ListGroup.Item>
                        )}

                    </ListGroup>

                    {loadingDelivered && <LoadingSpinner />}
                    {userInfo && userInfo.isAdmin && order.isPaid && !order.isDelivered && (
                        <ListGroup.Item>
                            <Button 
                                type='button' 
                                className='btn btn-block' 
                                onClick={handleDeliver}
                            >
                                Delivere Order
                            </Button>
                        </ListGroup.Item>
                    )}
                </Card>
            </Col>
        </Row>

    </div>
  )
}

export default OrderPage