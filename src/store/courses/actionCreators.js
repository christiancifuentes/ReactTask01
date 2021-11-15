import * as actions from './actionTypes'
import * as services from '../../services'

export const addCourse = (course, token) => async (dispatch) =>{
  const response = await fetch(services.course_add, {method: 'POST',body: JSON.stringify(course), headers: {'Content-Type': 'application/json', 'Authorization': token}});
  const info = await response.json();
  console.log(info);
  dispatch({ type: actions.ADD_COURSE,       
    payload:{
      authors: info.result.authors,
      creationDate: info.result.creationDate,
      description: info.result.description,
      duration: info.result.duration,
      id: info.result.id,
      title: info.result.title
    }
  });
}

export const initCourse = () => async (dispatch) => {
  const response = await fetch(services.course_all);
  const courses = await response.json();
  if(courses.successful){
    dispatch({
        type: actions.INIT_COURSE,
        payload:
          courses.result   
    });
  }
}

export const deleteCourse = (id,token) => async (dispatch) => {
	const responseid = await fetch(services.course+id, {method: 'DELETE', headers: {'Content-Type': 'application/json','Authorization': token}});
	const infoid = await responseid.json();
	console.log(infoid);
  dispatch({ type: actions.DELETE_COURSE, payload: {id} });
};

export const edit = (course,id,token) => async (dispatch) =>{
	const responseid = await fetch(services.course+id, {method: 'PUT',body: JSON.stringify(course), headers: {'Content-Type': 'application/json','Authorization': token}});
	const infoid = await responseid.json();
	console.log(infoid);
  dispatch({ type: actions.EDIT_COURSE, payload: {id} });
};

export const getCourse = (id,token) => async (dispatch) =>{
	const responseid = await fetch(services.course+id, {method: 'GET', headers: {'Content-Type': 'application/json','Authorization': token}});
	const infoid = await responseid.json();
	console.log(infoid);
  dispatch({ type: actions.GET_COURSE, payload: {id} });
};