import React, {useEffect} from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Button, Table, Row, Col} from 'react-bootstrap'
import { useDispatch, useSelector} from 'react-redux'
import Message from '../components/Message'
import LoadingSpinner from '../components/LoadingSpinner'
import { listProducts, deleteProduct, createProduct } from '../actions/productActions'
import { useNavigate, useParams } from 'react-router-dom'
import { PRODUCT_CREATE_RESET } from '../constants/productConstants'
import backgroundImage from '../assets/mountain-background.png'
import '../styles/background.css';





function ProductListPage() {

    const id = useParams()
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const productList = useSelector(state => state.productList)
    const { loading, error, products} = productList

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo } = userLogin


    const productDelete = useSelector(state => state.productDelete)
    const { success: successDelete, error: errorDelete, loading: loadingDelete } = productDelete

    const productCreate = useSelector(state => state.productCreate)
    const { success: successCreate, error: errorCreate, loading: loadingCreate, product: createdProduct } = productCreate


    

    useEffect(() => {
        dispatch({ type: PRODUCT_CREATE_RESET })
        if (!userInfo || !userInfo.isAdmin) {
            navigate('/login')
        } else {
            if (successCreate) {
                navigate(`/admin/product/${createdProduct._id}/edit`)
            } else {
                dispatch(listProducts('', id))
            }
        }
    }, [dispatch, navigate, userInfo, id, successDelete, successCreate, createdProduct])
        

    useEffect(() => {
        products.forEach(product => {
            console.log(product.name, product.price, product.category, product.brand)
            if (!product.name || !product.price || !product.category || !product.brand ||
                product.name === 'select name' || product.price === 'please select' ||
                product.category === 'select category' || product.brand === 'select brand') {
                dispatch(deleteProduct(product._id));
                window.alert('Please fill in all fields to create a new product');
            }
        });
    }, [dispatch, products]);

    

    const handleDelete = (id) => {
        if (window.confirm('Are you sure?')) {
            dispatch(deleteProduct(id))
        }
    }


    const handlCreatPoduct = () => {
        dispatch(createProduct())
        // navigate('/admin/product/new')
        // navigate('/admin/product/new/edit')
    }




  return (
    <div className="backgroundImage" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Row className='align-items-center'>
            <Col>
                <h1>Products</h1>
            </Col>
            <Col className='text-right'>
                    <Button 
                        className='my-3 pageButton' 
                        style={{marginLeft: 'unset',}}
                        variant='dark'
                        onClick={handlCreatPoduct}>
                        <i className='fas fa-plus-square'></i> Add Product
                    </Button>
            </Col>

        </Row>

        {loadingDelete && <LoadingSpinner />}
        {errorDelete && <Message variant='danger'>{errorDelete}</Message>}

        {loadingCreate && <LoadingSpinner />}
        {errorCreate && <Message variant='danger'>{errorCreate}</Message>}

        <Row className='pageCard'>
            {loading ? <LoadingSpinner /> : error ? <Message variant='danger'>{error}</Message> : (
                <>
                <Table striped bordered hover responsive className='table-sm'>
                    <thead>
                        <tr>
                            <th style={{display: 'none'}}>ID</th>
                            <th>NAME</th>
                            <th>PRICE</th>
                            <th>CATEGORY</th>
                            <th>BRAND</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => (
                            <tr key={product._id}>
                                <td style={{display: 'none'}}>{product._id}</td>
                                <td>{product.name}</td>
                                <td>{product.price}€</td>
                                <td>{product.category}</td>
                                <td>{product.brand}</td>
                                <td>
                                    <LinkContainer to={`/admin/product/${product._id}/edit`}>
                                        <Button variant='light' className='btn-sm'>
                                            <i className='fas fa-edit'></i>
                                        </Button>
                                    </LinkContainer>
                                    <Button variant='danger' className='btn-sm' onClick={() => handleDelete(product._id)}>
                                        <i className='fas fa-trash'></i>
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                </>
            )}
        </Row>
    </div>
  )
}

export default ProductListPage