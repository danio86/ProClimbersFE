import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Nav } from 'react-bootstrap'

function Checkout({ step1, step2, step3, step4}) {
  return (
    <Nav className='justify-content-center mb-4'>
        <Nav.Item>
            {step1 ? (
                <LinkContainer to='/login/shipping'>
                    <Nav.Link>Shipping</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Shipping</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step2 ? (
                <LinkContainer to='/login/payment'>
                    <Nav.Link>Payment</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Payment</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step3 ? (
                <LinkContainer to='/login/placeorder'>
                    <Nav.Link>Place Order</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Place Order</Nav.Link>
            )}
        </Nav.Item>

        <Nav.Item>
            {step4 ? (
                <LinkContainer to='/login/order'>
                    <Nav.Link>Order</Nav.Link>
                </LinkContainer>
            ) : (
                <Nav.Link disabled>Order</Nav.Link>
            )}
        </Nav.Item>
    </Nav>
  )
}

export default Checkout