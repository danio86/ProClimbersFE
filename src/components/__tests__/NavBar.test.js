import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import Header from '../Header';

// Create a mock store
const store = createStore(() => ({ userLogin: { userInfo: null } }));

test('renders learn react link', () => {
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
