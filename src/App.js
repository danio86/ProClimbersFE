import Header from './components/Header';
import Footer from './components/Footer';
import { Container } from 'react-bootstrap';
import HomePage from './screens/HomePage';
import ProductPage from './screens/ProductPage';
import CartPage from './screens/CartPage';
import LoginPage from './screens/LoginPage';
import SignupPage from './screens/SignupPage';
import ProfilePage from './screens/ProfilePage';
import ShippingPage from './screens/ShippingPage';
import PaymentPage from './screens/PaymentPage';
import PlaceOrderPage from './screens/PlaceOrderPage';
import OrderPage from './screens/OrderPage';
import UserListPage from './screens/UserListPage';
import UserEditPage from './screens/UserEditPage';
import ProductListPage from './screens/ProductListPage';
import ProductEdidPage from './screens/ProductEdidPage';
import OrderListPage from './screens/OrderListPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';

import React, { useState } from 'react';





function App() {

  const [refreshKey, setRefreshKey] = useState(0);

  const handleUserSignup = () => {
    setRefreshKey(prevKey => prevKey + 1);
  };

  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Routes>
            <Route path='/' element={<HomePage />}  exact />
            <Route path='/product/:id' element={<ProductPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/signup' element={<SignupPage onUserSignup={handleUserSignup} />} />
            <Route path='/profile' element={<ProfilePage />} />
            <Route path='/cart/:id?' element={<CartPage />} /> {/* ? means optional */}
            <Route path='/login/shipping' element={<ShippingPage />} />
            <Route path='/login/payment' element={<PaymentPage />} />
            <Route path='/login/placeorder' element={<PlaceOrderPage />} />
            <Route path='/login/order/:id' element={<OrderPage />} />
            <Route path='/admin/userlist' element={<UserListPage />} />
            <Route path='/admin/user/:id/edit' element={<UserEditPage />} />
            <Route path='/admin/productlist' element={<ProductListPage />} />
            <Route path='/admin/product/:id/edit' element={<ProductEdidPage />} />
            <Route path='/admin/orderlist' element={<OrderListPage />} />
            <Route path='*' element={<NotFound />} />

          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;


// function App() {
//   return (
//     <Router>
//       <Header />
//         <main className="py-3">
//           <Container>
//             <Route path='/' component={HomePage} exact />
//             </Container>
//         </main>
//       <Footer />
//     </Router>
//   );
// }