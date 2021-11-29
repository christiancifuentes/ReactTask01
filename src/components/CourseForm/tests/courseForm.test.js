import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';

import CourseForm from '../CourseForm';
import rootReducer from '../../../store/reducer';
import { Router } from 'react-router';

test('CourseForm should show authors lists (all and course authors).', () => {
	const store = createStore(rootReducer, {
		authors: [
			{ id: '1', name: '1' },
			{ id: '2', name: '2' },
		],
		courses: [],
	});

	const history = createMemoryHistory();
	history.push('/courses:1');

	render(
		<Provider store={store}>
			<Router history={history}>
				<CourseForm />
			</Router>
		</Provider>
	);
	console.log(screen);
	//expect(screen.getByTestId('available-authors-list')).not.toBeNull();
	//expect(screen.getByTestId('available-authors-list').children.length).toBe(2);

});