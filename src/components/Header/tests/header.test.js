import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from '../../../store/reducer'

import Header from '../Header';


test('renders Header null if no user info', () => {
	const store = createStore(rootReducer, { user: {} });
	render(
		<Provider store={store}>
			<Header />
		</Provider>
	);
	expect(screen.queryByTestId('username')).not.toBeNull();
});


test('renders user info correctly', () => {
	const store = createStore(rootReducer, {
		user: {
			name: 'christian',
            email: 'christian',
			isAuth: true,
			token: '111',
		},
	});

	render(
		<Provider store={store}>
			<Header />
		</Provider>
	);
    expect(screen.queryByTestId('logo').textContent).not.toBeNull();
    expect(screen.getByText(/christian/i).textContent).toBe('christian');

});
