import React, { useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { Form, Button, Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Forms from '../components/Forms'
import { savePaymentMethod } from '../actions/cartActions'
import Checkout from '../components/Checkout'
import backgroundImage from '../assets/mountain-background.png'
import '../styles/background.css';



function PaymentPage() {

    const navigate = useNavigate()

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart)
    const {shippingAddress} = cart

    const [paymentMethod, setPaymentMethod] = useState('PayPal')

    if (!shippingAddress.address) {
        navigate('/login/shipping')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(savePaymentMethod(paymentMethod))
        navigate('/login/placeorder')
    }

    return (
        <div className="backgroundImage" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Forms>
                <Checkout step1 step2 step3 />
                <h1>Payment Method</h1>
                <Form onSubmit={handleSubmit}>

                    <Form.Group>
                        <Form.Label as='legend'>Select Method</Form.Label>
                        <Col>
                            <Form.Check
                                type='radio'
                                label='PayPal'
                                id='PayPal'
                                name='paymentMethod'
                                value='PayPal'
                                checked
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            ></Form.Check>
                        </Col>
                    </Form.Group>

                    <Button className='pageButton' type='submit' variant='dark'>
                        Continue
                    </Button>
                </Form>
            </Forms>
        </div>
    )
    
}

export default PaymentPage