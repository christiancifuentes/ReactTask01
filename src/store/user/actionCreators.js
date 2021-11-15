import * as actions from './actionTypes'
import * as services from '../../services'


export const login = (email, password, history) => async (dispatch) =>{
    const newUser = {
        "email":email,
        "password":password,
     };
    const response = await fetch(services.LOGIN, {method: 'POST',body: JSON.stringify(newUser), headers: {'Content-Type': 'application/json'}});
    const info = await response.json();
    if(info.successful){
        localStorage.setItem("token", info.result);
        localStorage.setItem("name", info.user.name);
        localStorage.setItem("email", info.user.email);
        dispatch({
          type: actions.LOGIN,
          payload:{
            name: info.user.name,
            email: info.user.email,
            token: info.result
          }
        });
        history.push(`/courses/`);
      }
}



export const logOut = (token) => async (dispatch) =>{
    const params = new URLSearchParams({
        "Authorization": token
    });
	await fetch(services.LOG_OUT, {method: 'DELETE', body: JSON.stringify(params),  headers: {'Content-Type': 'application/json', 'Authorization': token}});

    dispatch({ type: actions.LOG_OUT, payload: { token: null}});
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    localStorage.setItem("role", "");
};


export const getRole = (token) => async (dispatch) =>{
    const _ = require("lodash");
	const responseid = await fetch(services.USER_ME, {method: 'GET', headers: {'Content-Type': 'application/json','Authorization': token}});
	const info = await responseid.json();
    const currentRole = _.get(info, 'result.role');
    dispatch({ type: actions.LOG_ROLE, payload: { role: currentRole}});
};