import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate, useLocation } from 'react-router-dom'
import '../styles/searchBar.css';




function SearchBar() {
  const navigate = useNavigate()
  const location = useLocation()
  const [keyword, setKeyword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (keyword) {
        navigate(`/?keyword=${keyword}&page=1`)
    } else {
        // keep the user on the same page
        navigate(location.pathname)
    }

  }

  return (
    <Form onSubmit={handleSubmit} className="d-flex">
        <Form.Group controlId='search'>
            <Form.Control
            type='text'
            name='q'
            onChange={(e) => setKeyword(e.target.value)}
            placeholder='Search Products...'
            className='mr-sm-2 ml-sm-5 flex-grow-1'
            >
            </Form.Control>
        </Form.Group>
        <Button type='submit' variant='outline-success' className='p-2 ml-2 searchButton'>
            Search
        </Button>
      
    </Form>
  )
}

export default SearchBar