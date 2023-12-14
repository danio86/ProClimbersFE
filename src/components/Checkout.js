import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'
import '../styles/background.css';


function Checkout({ step1, step2, step3, step4}) {
  return (
    <Nav className='justify-content-center mb-4'>
        <Nav.Item>
            {step1 ? (
                <LinkContainer to='/login/shipping'>
                    <Nav.Link className='step1Color'>Shipping</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Shipping</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step2 ? (
                <LinkContainer to='/login/payment'>
                    <Nav.Link className='step2Color'>Payment</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Payment</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step3 ? (
                <LinkContainer to='/login/placeorder'>
                    <Nav.Link className='step3Color'>Place Order</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Place Order</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step4 ? (
                <LinkContainer to='/login/order'>
                    <Nav.Link className='step4Color'>Order</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Order</Nav.Link>
            )}
        </Nav.Item>
    </Nav>
  )
}

export default Checkout