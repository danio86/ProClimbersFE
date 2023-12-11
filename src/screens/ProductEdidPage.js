import React, {useEffect, useState} from 'react'
// import { Link, redirect, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import LoadingSpinner from '../components/LoadingSpinner'
import { getUserDetails } from '../actions/userActions'
import Forms from '../components/Forms'
import { listProductDetails, updateProduct } from '../actions/productActions'
import { PRODUCT_UPDATE_RESET } from '../constants/productConstants'
import axios from 'axios'



function ProductEdidPage() {

    const id = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    

    const [name, setName] = useState('')
    const [price, setPrice] = useState(0)
    const [image, setImage] = useState('')
    const [brand, setBrand] = useState('')
    const [category, setCategory] = useState('')
    const [countInStock, setCountInStock] = useState(0)
    const [description, setDescription] = useState('')

    const [uploading, setUploading] = useState(false)
    const productId = id.id

    const productDetails = useSelector(state => state.productDetails)
    // console.log('productDetails', productDetails)
    const { loading, error, product } = productDetails

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin

    const productUpdate = useSelector(state => state.productUpdate)
    const { loading: loadingUpdate, error: errorUpdate, success: successUpdate } = productUpdate

    useEffect(() => {
        if (successUpdate) {
            dispatch({ type: PRODUCT_UPDATE_RESET })
            navigate('/admin/productlist')
        } else {
            if (!product.name || product._id !== Number(productId)) {
                dispatch(listProductDetails(productId))
            } else {
                setName(product.name)
                setPrice(product.price)
                setImage(product.image)
                setBrand(product.brand)
                setCategory(product.category)
                setCountInStock(product.countInStock)
                setDescription(product.description)
            }
        }
    }, [dispatch, navigate, productId, product, successUpdate])


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(updateProduct({ _id: productId, name, price, image, brand, category, countInStock, description }))
    }

    const handleUpload = async (e) => {
        const file = e.target.files[0]
        const formData = new FormData()
        formData.append('image', file)

        formData.append('product_id', productId) // product_id is the key in the backend

        setUploading(true)

        try {
            const config = {
                headers: {
                    'Content-Type': 'multipart/form-data', // multipart/form-data is for uploading files
                    Authorization: `Bearer ${userInfo.token}`
                }
            }

            // const { data } = await axios.post('/api/upload', formData, config)
            const { data } = await axios.post('/api/products/upload/', formData, config)
            setImage(data)
            setUploading(false)
        } catch (error) {
            console.error(error)
            setUploading(false)
        }
    }



  return (
    <div>
        <Link to='/admin/productlist' className='btn btn-light my-3'>
            Go Back
        </Link>

        <Forms>
            <h1>Edit Product</h1>

            {loadingUpdate && <LoadingSpinner />}
            {errorUpdate && <Message variant='warnung'>{errorUpdate}</Message>}

            {loading ? <LoadingSpinner /> : error ? <Message variant='danger'>{error}</Message> : (

            <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Label htmlFor='name'>Name</Form.Label>
                <Form.Control type='name' id='name' placeholder='Enter a name' value={name} onChange={(e) => setName(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='price'>Price</Form.Label>
                <Form.Control type='number' id='price' placeholder='Enter a price' value={price} onChange={(e) => setPrice(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='image'>Image</Form.Label>
                <Form.Control type='text' id='image' placeholder='Enter an image' value={image} onChange={(e) => setImage(e.target.value)}></Form.Control>
                <Form.Control type='file' id='image-file' label='Choose Image' custom onChange={handleUpload}></Form.Control>
                {uploading && <LoadingSpinner />}
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='brand'>Brand</Form.Label>
                <Form.Control type='text' id='brand' placeholder='Enter a brand' value={brand} onChange={(e) => setBrand(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='countInStock'>Count In Stock</Form.Label>
                <Form.Control type='number' id='countInStock' placeholder='Enter countInStock' value={countInStock} onChange={(e) => setCountInStock(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='category'>Category</Form.Label>
                <Form.Control type='text' id='category' placeholder='Enter category' value={category} onChange={(e) => setCategory(e.target.value)}></Form.Control>
            </Form.Group>

            <Form.Group>
                <Form.Label htmlFor='description'>Description</Form.Label>
                <Form.Control type='text' id='description' placeholder='Enter description' value={description} onChange={(e) => setDescription(e.target.value)}></Form.Control>
            </Form.Group>

            <Button type='submit' variant='primary'>
                Update
            </Button>
            </Form>
            )}
        </Forms>
    

    </div>
  )
}

export default ProductEdidPage