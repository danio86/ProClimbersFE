import React from 'react'
import {Spinner} from 'react-bootstrap'

function LoadingSpinner() {
  return (
    <Spinner 
        animation="border" 
        variant="success" 
        role="status" 
        style={{
            width: '80px',
            height: '80px',
            margin: 'auto',
            display: 'block',
            size: '10rem',
    }}>
        <span className="sr-only">Loading...</span>
    </Spinner>
  )
}

export default LoadingSpinner