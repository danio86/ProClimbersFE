import React, {useEffect, useState} from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import LoadingSpinner from '../components/LoadingSpinner'
import { login } from '../actions/userActions'
import Forms from '../components/Forms'
import backgroundImage from '../assets/mountain-background.png'
import '../styles/background.css';



function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    const location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'



    const dispatch = useDispatch()
    const userLogin = useSelector(state => state.userLogin)
    const {error, loading, userInfo} = userLogin

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    }
    , [userInfo, redirect, navigate])

    const HandlSubmit = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }



  return (
    <div className="backgroundImage" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Forms >
            <h1>Sign In</h1>
            {error && <Message variant='danger'>{error}</Message>}
            {loading && <LoadingSpinner />}
            <Form onSubmit={HandlSubmit}>
                <Form.Group controlId='formBasicEmail'>
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control 
                        type='email' 
                        placeholder='Enter your email' 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Text className='text-muted'>
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>
        
                <Form.Group controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    <Form.Control 
                        type='password' 
                        placeholder='Password' 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Group>
        
                <Button className='pageButton' variant='dark' type='submit'>
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    Are you a new Customer?  
                    <Link className='pageLink' to={redirect ? `/signup?redirect=${redirect}` : '/signup'}> Please Sign Up here</Link>
                </Col>
            </Row>
        </Forms>
    </div>
  )
}

export default LoginPage