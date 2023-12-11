import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from 'react-bootstrap'

function NotFound() {
  const navigate = useNavigate()

  return (
    <div className='text-center'>
      <h1 className='mt-5'>404 Not Found</h1>
      <p className='mb-3'>Sorry, this page does not exist.</p>
      <Button variant='warning' onClick={() => navigate('/')}>ProClimbers</Button>
    </div>
  )
}

export default NotFound
