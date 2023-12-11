import React, {useEffect, useState} from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import LoadingSpinner from '../components/LoadingSpinner'
import { register } from '../actions/userActions'
import Forms from '../components/Forms'





function SignupPage() {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [password2, setPassword2] = useState('')
    const [message, setMessage] = useState(null)



    const navigate = useNavigate()
    const location = useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'



    const dispatch = useDispatch()
    const userSinup = useSelector(state => state.userRegister)
   

    const {error, loading, userInfo} = userSinup

    useEffect(() => {
        if(userInfo) {
            navigate(redirect)
        }
    }
    , [userInfo, redirect, navigate])

    const HandlSubmit = (e) => {
        e.preventDefault()
        if(password !== password2) {
            setMessage('Passwords do not match')
        } else {
            dispatch(register(name, email, password))
        }
        dispatch(register(name, email, password))
    }

  return (
    <Forms>
        <h1>Sign Up</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {message && <Message variant='danger'>{message}</Message>}
        {loading && <LoadingSpinner />}
        {/* {JSON.stringify(userInfo)} */}
        {/* {userInfo && <Message variant='success'>{userInfo}</Message>} */}
        {/* {userInfo && <Message variant='success'>{JSON.stringify(userInfo)}</Message>} */}
        <Form onSubmit={HandlSubmit}>
            <Form.Group controlId='formBasicName'>
                <Form.Label>Name</Form.Label>
                <Form.Control 
                    type='name' 
                    placeholder='Enter your name' 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId='formBasicEmail'>
                <Form.Label>Your Email Address</Form.Label>
                <Form.Control 
                    type='email' 
                    placeholder='Enter your email' 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>
            <Form.Group controlId='formBasicPassword'>
                <Form.Label>Password</Form.Label>
                <Form.Control 
                    type='password' 
                    placeholder='Enter your password' 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </Form.Group>
            <Form.Group controlId='formBasicPassword2'>
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control 
                    type='password' 
                    placeholder='Confirm your password' 
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    required
                />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Sign Up
            </Button>
        </Form>
        <Row className='py-3'>
            <Col>
                You already have an Account? <Link to={redirect ? `/login?redirect=${redirect}` : '/login'}>Login</Link>
            </Col>
        </Row>


    </Forms>
  )
}

export default SignupPage