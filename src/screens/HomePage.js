import React, {useEffect} from 'react'
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import { useLocation } from 'react-router-dom'
import Product from '../components/Product'
import LoadingSpinner from '../components/LoadingSpinner'
import Message from '../components/Message'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import backgroundImage from '../assets/mountain-background.png'
import '../styles/background.css';



function HomePage() {

  const location = useLocation()
  const dispatch = useDispatch()


  const productList = useSelector(state => state.productList)
  const {error, loading, products} = productList


  const params = new URLSearchParams(location.search)
  const keyword = params.get('keyword')
  

  useEffect(() => {
    if (keyword) {
      dispatch(listProducts(keyword))
    } else {
      dispatch(listProducts())
    }
  }, [dispatch, keyword])



  return (
    
    <div className="backgroundImage" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <h1>Welcome to ProClimbing</h1>
        {
          loading ? <LoadingSpinner /> : 
            error ? <Message variant = 'danger' >{JSON.stringify(error)}</Message> : 
              <div>
                <Row>
                    {Array.isArray(products) && products.map(product => (
                    <Col //makes this responsive
                        key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />                        
                    </Col>
                    ))}
                </Row>
                
            

              </div>
        }
        
    </div>
  )
}

export default HomePage