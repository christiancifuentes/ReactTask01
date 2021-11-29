import * as actions from './actionTypes'
import * as services from '../../services'

export const initCourse = async () => {
  const response = await fetch(services.COURSE_ALL);
  const courses = await response.json();
  if(courses.successful){
    return courses.result;
  }else{
    return 0;
  }
};

export const addCourse = async (course, token) => {
  const response = await fetch(services.COURSE_ADD, {method: 'POST',body: JSON.stringify(course), headers: {'Content-Type': 'application/json', 'Authorization': token}});
  return response.json();
};

export const edit = async (course,id,token) => {
	const response = await fetch(services.COURSE+id, {method: 'PUT',body: JSON.stringify(course), headers: {'Content-Type': 'application/json','Authorization': token}});
  return response;
};

export const deleteCourse = async (id,token) => {
	await fetch(services.COURSE+id, {method: 'DELETE', headers: {'Content-Type': 'application/json','Authorization': token}});
	return id
};

export const fetchCoursesAction = (courses) => ({
	type: actions.INIT_COURSE,
	payload: courses,
});

export const updateCourseAction = (id) => ({
	type: actions.EDIT_COURSE,
	payload: {id},
});

export const addCourseAction = (info) => ({
	type: actions.ADD_COURSE,
  payload:{
    authors: info.authors,
    creationDate: info.creationDate,
    description: info.description,
    duration: info.duration,
    id: info.id,
    title: info.title
  }
});

export const deleteCourseAction = (courseId) => ({
	type: actions.DELETE_COURSE,
	payload: courseId,
});