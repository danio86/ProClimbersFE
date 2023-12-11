import React, {useEffect, useState} from 'react'
import { Link, useParams, useHistory, useNavigate } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Form, Card, Button } from 'react-bootstrap'
import Rating from '../components/Rating'
import LoadingSpinner from '../components/LoadingSpinner'
import Message from '../components/Message'
import {listProductDetails, createProductReview} from '../actions/productActions'
import {PRODUCT_REVIEW_RESET} from '../constants/productConstants'
import {useDispatch, useSelector} from 'react-redux'
// import axios from 'axios'
// import products from '../products'
// import { useParams } from 'react-router-dom'


function ProductPage() {
    const dispatch = useDispatch()
    const productDetails = useSelector(state => state.productDetails)
    const {error, loading, product} = productDetails

    const { id, } = useParams();
    const navigate = useNavigate()


    const [qty, setQty] = useState(1) //default value is 1
    const [rating, setRating] = useState(0) //default value is 0
    const [comment, setComment] = useState('') //default value is empty string


    const userLogin = useSelector(state => state.userLogin)
    const {userInfo} = userLogin

    const productReview = useSelector(state => state.productReview)
    const {
        error: errorProductReview, success: successProductReview, loading: loadingProductReview
    } = productReview






   
    useEffect(() => { //useEffect is a hook that runs when the component loads
        if(successProductReview) {
            alert('Review Submitted')
            setRating(0)
            setComment('')
            dispatch({type: PRODUCT_REVIEW_RESET})
        }
        
        dispatch(listProductDetails(id)) //dispatch is used to call an action
    }, [dispatch, id, successProductReview]) //dispatch makes it run again

    const addToCart = () => {
        console.log('addToCart:' + id + ' qty:' + qty + ' product:' + product)
        // history.push(`/cart/${id}?qty=${qty}`)
        navigate(`/cart/${id}?qty=${qty}`)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(createProductReview(id, {rating, comment}))
        setRating(0)
        setComment('')
        dispatch({type: PRODUCT_REVIEW_RESET})
    }



  return (
    <div>
        <Link to='/' className='btn btn-light my-3'>Go Back</Link>
        {
          loading ? <LoadingSpinner /> : 
            // error ? <Message variant = 'danger' >{error}</Message> : 
            error ? <Message variant = 'danger' >{JSON.stringify(error)}</Message> : 
                <div>
                    <Row>
                        <Col md={6}>
                            <Image src={product.image} alt={product.name} fluid />
                        </Col>
                        <Col md={3}>
                            <ListGroup variant='flush'>
                                <ListGroup.Item>
                                    <h3>{product.name}</h3>
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#fcd303'} />
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Price: ${product.price}
                                </ListGroup.Item>
                                <ListGroup.Item>
                                    Description: {product.description}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>
                        <Col md={3}>
                            <Card>
                                <ListGroup variant='flush'>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Price:</Col>
                                            <Col><strong>${product.price}</strong></Col>
                                        </Row>
                                    </ListGroup.Item>
                                    <ListGroup.Item>
                                        <Row>
                                            <Col>Status:</Col>
                                            <Col>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</Col>
                                        </Row>
                                    </ListGroup.Item>

                                    {product.countInStock > 0 && (
                                        <ListGroup.Item>
                                            <Row>
                                                <Col>Qty</Col>
                                                <Col xs='auto' className='my-1'>
                                                    <Form.Control as='select' value={qty} onChange={(e) => setQty(e.target.value)}> 
                                                    {/*select is a dropdown */}
                                                        {
                                                            [...Array(product.countInStock).keys()].map(x => (
                                                                // [...Array(product.countInStock).keys()] creates an array of numbers from 0 to countInStock
                                                                <option key={x+1} value={x+1}>{x+1}</option>
                                                            ))
                                                        }
                                                    </Form.Control>
                                                </Col>
                                            </Row>
                                        </ListGroup.Item>
                                    )}

                                    <ListGroup.Item>
                                        <Button onClick={addToCart} className='btn-block' type='button' disabled={product.countInStock === 0}>
                                            Add to Cart
                                        </Button>
                                    </ListGroup.Item>
                                </ListGroup>
                            </Card>
                        </Col>

                    </Row>
                    <Row>
                        <Col md={6}>
                            <h4>Reviews</h4>
                            {product.reviews.length === 0 && <Message>No Reviews yet</Message>}
                            <ListGroup variant='flush'>
                                {product.reviews.map(review => (
                                    <ListGroup.Item key={review._id}>
                                        <strong>{review.name}</strong>
                                        <Rating value={review.rating} color={'#fcd303'} />s
                                        <p>{
                                            new Date(review.createdAt).toISOString().split('T')[0].split('-').reverse().join('.')
                                        }</p>
                                        <p>{review.comment}</p>
                                    </ListGroup.Item>
                                ))}
                                <ListGroup.Item>
                                    <h5>Write a Customer Review</h5>
                                    {loadingProductReview && <LoadingSpinner />}
                                    {successProductReview && <Message variant='success'>Review Submitted</Message>}
                                    {errorProductReview && <Message variant='danger'>{errorProductReview}</Message>}
                                    {userInfo ? (
                                        // <Form onSubmit={(e) => {
                                        <Form onSubmit={
                                            handleSubmit
                                            // e.preventDefault()
                                            // dispatch(createProductReview(id, {rating, comment}))
                                            // setRating(0)
                                            // setComment('')
                                            // dispatch({type: PRODUCT_REVIEW_RESET})
                                        }>
                                            <Form.Group controlId='rating'>
                                                <Form.Label>Rating</Form.Label>
                                                <Form.Control as='select' value={rating} onChange={(e) => setRating(e.target.value)}>
                                                    <option value=''>Select...</option>
                                                    <option value='1'>1 - Poor</option>
                                                    <option value='2'>2 - Fair</option>
                                                    <option value='3'>3 - Nice</option>
                                                    <option value='4'>4 - Very Nice</option>
                                                    <option value='5'>5 - Perfect!</option>
                                                </Form.Control>
                                            </Form.Group>
                                            <Form.Group controlId='comment'>
                                                <Form.Label>Comment</Form.Label>
                                                <Form.Control as='textarea' row='3' value={comment} onChange={(e) => setComment(e.target.value)}></Form.Control>
                                            </Form.Group>
                                            <Button 
                                                disabled={loadingProductReview}
                                                type='submit' variant='primary'>Submit Review
                                            </Button>
                                        </Form>
                                    ) : (
                                        <Message>Please <Link to='/login'>sign in</Link> to write a review</Message>
                                    )}
                                </ListGroup.Item>
                            </ListGroup>
                        </Col>

                    </Row>
                </div>
        }
    </div>
  )
}

export default ProductPage