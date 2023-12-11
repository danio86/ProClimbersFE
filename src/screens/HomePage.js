import React, {useEffect, useState} from 'react'
// import products from '../products'
import { Row, Col } from 'react-bootstrap'
import { useNavigate, useLocation, useParams } from 'react-router-dom'
import Product from '../components/Product'
import LoadingSpinner from '../components/LoadingSpinner'
import Message from '../components/Message'
import {useDispatch, useSelector} from 'react-redux'
import {listProducts} from '../actions/productActions'
import Paginate from '../components/Paginate'


function HomePage() {

  // const {keyword} = useParams()
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  const productList = useSelector(state => state.productList)
  // const {error, loading, products, page, pages} = productList
  const {error, loading, products} = productList

  // let searchWord = location.search;

  const params = new URLSearchParams(location.search)
  const keyword = params.get('keyword')
  
  
  // const [keyword, setKeyword] = useState('')



 

  useEffect(() => {
    if (keyword) {
      dispatch(listProducts(keyword))
    } else {
      dispatch(listProducts())
    }
  }, [dispatch, keyword])

  // useEffect(() => {
  //     if (keyword) {
  //       dispatch(listProducts(keyword, page))
  //     } else {
  //       dispatch(listProducts('', page))
  //     }
  // }, [dispatch, keyword, page])


  return (
    
    <div>
        <h1>Welcome to ProClimbing</h1>
        {
          loading ? <LoadingSpinner /> : 
            error ? <Message variant = 'danger' >{JSON.stringify(error)}</Message> : 
              <div>
                <Row>
                    {products.map(product => (
                    <Col //makes this responsive
                        key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product} />                        
                    </Col>
                    ))}
                </Row>
                {/* <Paginate page={page} pages={pages} keyword={keyword} /> */}
                
            

              </div>
        }
        
    </div>
  )
}

export default HomePage