import React from 'react'
import { useDispatch, useSelector} from 'react-redux'
import { logout } from '../actions/userActions'
import SearchBar from './SearchBar'
import { Nav, Navbar, Container, NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import '../styles/header.css';
import backgroundImage from '../assets/ProclimbersLogo.png'





function Header() {
  const dispatch = useDispatch()
  const userLogin = useSelector(state => state.userLogin)
  const {userInfo} = userLogin


const logoutHandler = () => {
  dispatch(logout())
}

  return (
    <header>
      <Navbar expand="lg" className="bg-dark" variant="dark" collapseOnSelect>
        <Container>
          <LinkContainer to="/">
            <Navbar.Brand>
              <img src={backgroundImage} alt="ProClimbing" style={{maxHeight: '35px', borderRadius: '50%', position: 'relative', top: '0px'}} />
            </Navbar.Brand>
            {/* <Navbar.Brand>ProClimbing</Navbar.Brand> */}
          </LinkContainer>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <SearchBar />
            <Nav className="mr-auto">
              <LinkContainer to="/cart">
                <Nav.Link className="headerLink"><i className="fas fa-shopping-cart"></i> Cart</Nav.Link>
              </LinkContainer>

              {userInfo ? (
                <NavDropdown title={userInfo.name} id='username'>
                <LinkContainer to='/profile'>
                  <NavDropdown.Item className="headerLink">Profile</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item className="headerLink" onClick={logoutHandler}>Logout</NavDropdown.Item>
              </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link className="headerLink"><i className="fas fa-user"></i> LogIn</Nav.Link>
                </LinkContainer>
              )
                
              }

              {userInfo && userInfo.isAdmin && (
                <NavDropdown title='Admin' id='adminmenu'>
                  <LinkContainer to='/admin/userlist'>
                    <NavDropdown.Item>Users</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Products</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/admin/orderlist'>
                    <NavDropdown.Item>Orders</NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}

            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
    
  )
}

export default Header