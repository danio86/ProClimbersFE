import React from 'react'
import { Pagination } from 'react-bootstrap'
// import { useNavigate, useLocation, useParams } from 'react-router-dom'
import { LinkContainer } from 'react-router-bootstrap'




// function Paginate(pages, page, keyword = '', isAdmin = false) {
function Paginate({pages, page, keyword = '', isAdmin = false}) {


    if (keyword) {
        // keyword = keyword.split('?keyword=')[1].split('&')[0]
        keyword = keyword.includes('?keyword=') ? keyword.split('?keyword=')[1].split('&')[0] : keyword;

    }



  return (
    pages > 1 && (
        <Pagination>
                {[...Array(pages).keys()].map((x) => (
                    <LinkContainer
                        key={x + 1}
                        to={{
                            pathname: '/',
                            search: `?keyword=${keyword}&page=${x + 1}`
                        }}
                    >
                        <Pagination.Item active={x + 1 === page}>{x + 1}</Pagination.Item>
                    </LinkContainer>
                ))}
        </Pagination>
    )
  )
}

export default Paginate