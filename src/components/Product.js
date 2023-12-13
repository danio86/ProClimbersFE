import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import '../product.css';


function Product({product}) {
  return (
    <Card className='my-3 p-3 rounded productCard'>
        <Link to={`/product/${product._id}`}>
            <Card.Img src={product.image} variant='top' />
        </Link>
        <Card.Body>
            <Link to={`/product/${product._id}`}>
                <Card.Title as='div'><strong>{product.name}</strong></Card.Title>
            </Link>
            <Card.Text as='div'>
                <div className='my-3'>
                    {product.price} €
                </div>
                <div className='my-3'>
                    {product.rating} from {product.numReviews} reviews
                </div>
            </Card.Text>
            <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#fcd303'} />
        </Card.Body>
    </Card>
  )
}

export default Product