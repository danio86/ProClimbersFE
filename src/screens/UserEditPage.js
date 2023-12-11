import React, {useEffect, useState} from 'react'
import { Link, redirect, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import LoadingSpinner from '../components/LoadingSpinner'
import { getUserDetails } from '../actions/userActions'
import Forms from '../components/Forms'
import { updateUser } from '../actions/userActions'
import { USER_UPDATE_RESET } from '../constants/userConstants'




function UserEditPage() {

    const { id } = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [isAdmin, setIsAdmin] = useState(false)
   
    const [message, setMessage] = useState(null)

    const userDetails = useSelector(state => state.userDetails)
    const { loading, error, user } = userDetails


    const userUpdate = useSelector(state => state.userUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = userUpdate

    useEffect(() => {
         if (successUpdate) {
                dispatch({ type: USER_UPDATE_RESET })
                navigate('/admin/userlist')
            } else {
                if (!user.name || user._id !== Number(id)) {
                    dispatch(getUserDetails(id))
                } else {
                    setName(user.name)
                    setEmail(user.email)
                    setIsAdmin(user.isAdmin)
                }
            }
    }, [dispatch, navigate, id, user, successUpdate])



    const submitHandler = (e) => {
        e.preventDefault()
        // dispatch update user
        dispatch(updateUser({ _id: id, name, email, isAdmin }))

    }






  return (
    <div>
        <Link to='/admin/userlist' className='btn btn-light my-3'>Back</Link>

        <Forms>
            
            <h1>Edit User</h1>
            {loadingUpdate && <LoadingSpinner />}
            {errorUpdate && <Message variant='danger'>{errorUpdate}</Message>}
            

            {loading ? <LoadingSpinner /> : error ? <Message variant='danger'>{error}</Message> : (
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='name'>
                        <Form.Label>Name</Form.Label>
                        <Form.Control type='name' placeholder='Enter name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='email'>
                        <Form.Label>Email Address</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' value={email} onChange={(e) => setEmail(e.target.value)}></Form.Control>
                    </Form.Group>

                    <Form.Group controlId='isAdmin'>
                        <Form.Check type='checkbox' label='Is Admin' checked={isAdmin} onChange={(e) => setIsAdmin(e.target.checked)}></Form.Check>
                    </Form.Group>

                    <Button type='submit' variant='primary'>Edit</Button>
                </Form>
            )}

        </Forms>
    </div>
  )
}

export default UserEditPage