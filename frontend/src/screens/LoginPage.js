import React, {useEffect, useState} from 'react'
import { Link, redirect, useLocation, useNavigate } from 'react-router-dom'
import { Form, Button, Row, Col } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import LoadingSpinner from '../components/LoadingSpinner'
import { login } from '../actions/userActions'
import Forms from '../components/Forms'


function LoginPage() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()
    // const history = useHistory()
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
    <Forms>
        <h1>Sign In</h1>
        {error && <Message variant='danger'>{error}</Message>}
        {loading && <LoadingSpinner />}
        {/* {JSON.stringify(userInfo)} */}
        {/* {userInfo && <Message variant='success'>{userInfo}</Message>} */}
        {/* {userInfo && <Message variant='success'>{JSON.stringify(userInfo)}</Message>} */}
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
    
            <Form.Group controlId='formBasicCheckbox'>
                <Form.Check type='checkbox' label='Remember Me' />
            </Form.Group>
            <Button variant='primary' type='submit'>
                Sign In
            </Button>
        </Form>

        <Row className='py-3'>
            <Col>
                Are you a new Customer?  
                <Link to={redirect ? `/signup?redirect=${redirect}` : '/signup'}> Please Sign Up here</Link>
                {/* <Link 
                    to={redirect ? `/register?redirect=${redirect}` : '/register'} >
                         Please Register Here
                </Link> */}
            </Col>
        </Row>

    </Forms>
  )
}

export default LoginPage