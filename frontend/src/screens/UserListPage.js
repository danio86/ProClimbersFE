import React, {useEffect, useState} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Table} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import LoadingSpinner from '../components/LoadingSpinner'
import { listUsers, deleteUser } from '../actions/userActions'
import { useNavigate } from 'react-router-dom'


function UserListPage() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const userList = useSelector(state => state.userList)
    const { loading, error, users } = userList // we destructure the state

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin // we destructure the state

    const userDelete = useSelector(state => state.userDelete)
    const { success: successDelete } = userDelete // we destructure the state

    useEffect(() => {
        if (userInfo && userInfo.isAdmin) {
            dispatch(listUsers())
        } else {
            navigate('/login')
        }  
    }, [dispatch, navigate, userInfo, successDelete])


    const handlDelete = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteUser(id))
        }

    }


  return (
    <div>
    <h1>UserListPage</h1>
    {loading ? <LoadingSpinner /> : error ? <Message variant='danger'>{error}</Message> : (
        <Table striped bordered hover responsive className='table-sm'>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>NAME</th>
                    <th>EMAIL</th>
                    <th>ADMIN</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user._id}>
                        <td>{user._id}</td>
                        <td>{user.name}</td>
                        <td><a href={`mailto:${user.email}`}>{user.email}</a></td>
                        <td>
                            {user.isAdmin ? (
                                <i className='fas fa-check' style={{ color: '#008000' }}></i>
                            ) : (
                                <i className='fas fa-times' style={{ color: '#FF0000' }}></i>
                            )}
                        </td>
                        <td>
                            <LinkContainer to={`/admin/user/${user._id}/edit`}>
                                <Button variant='light' className='btn-sm'>
                                    <i className='fas fa-edit'></i>
                                </Button>
                            </LinkContainer>
                            <Button variant='danger' className='btn-sm' onClick={() => handlDelete(user._id)}>
                                <i className='fas fa-trash'></i>
                            </Button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </Table>
        )}
        </div>
      )
    }

export default UserListPage