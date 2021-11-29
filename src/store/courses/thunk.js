

import {
	fetchCoursesAction,
	addCourseAction,
	updateCourseAction,
	deleteCourseAction,
	initCourse, 
	addCourse, 
	edit, 
	deleteCourse 
} from './actionCreators';


export const fetchCoursesThunk = () => async (dispatch, getState) => {
	const response = await initCourse();
	dispatch(fetchCoursesAction(response));
};

export const addCourseThunk = (newCourse, token) => async (dispatch, getState) => {
	const response = await addCourse(newCourse, token);
	dispatch(addCourseAction(response.result));
};

export const updateCourseThunk = (newCourse, id,  token) => async (dispatch, getState) => {
	await edit(newCourse, id, token);
	dispatch(updateCourseAction(id));
};

export const deleteCourseThunk = (courseId, token) => async (dispatch, getState) => {
	await deleteCourse(courseId, token);
	dispatch(deleteCourseAction(courseId));
	
};