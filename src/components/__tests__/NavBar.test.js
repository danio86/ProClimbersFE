import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from '../Header';



const mockReducer = (state = { userLogin: { userInfo: { name: 'Username', isAdmin: false } } }, action) => state;


// Create a mock store
// const store = createStore(() => ({ userLogin: { userInfo: null } }));
const store = createStore(mockReducer);


test('renders header', () => {
    render( 
    <Provider store={store}>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </Provider>
    );

    // screen.debug();
    const linkElement = screen.getByText(/ProClimbing/i);
    expect(linkElement).toBeInTheDocument();
});


test('renders userdropdown if the user is logged in', async () => {
    render( 
    <Provider store={store}>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </Provider>
    );

   const linkElement = screen.getByText(/Username/i);
   expect(linkElement).toBeInTheDocument();
});


test('reders login link if the user is not logged in', async () => {
    const store = createStore(() => ({ userLogin: { userInfo: null } }));
    render( 
    <Provider store={store}>
        <BrowserRouter>
            <Header />
        </BrowserRouter>
    </Provider>
    );

   const linkElement = screen.getByText(/LogIn/i);
   expect(linkElement).toBeInTheDocument();
}
);




