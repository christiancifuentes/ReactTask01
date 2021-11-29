
import {addAuthor, initAuthors, fetchAuthorsAction, addAuthorAction} from './actionCreators'

export const fetchAuthorsThunk = () => async (dispatch, getState) => {
	try {
		const response = await initAuthors();
		dispatch(fetchAuthorsAction(response.result));
	} catch (error) {
		console.error(error);
	}
};

export const addAuthorThunk = (authorName,token) => async (dispatch) => {
	const response = await addAuthor(authorName,token);
	dispatch(addAuthorAction(response.result));
};

