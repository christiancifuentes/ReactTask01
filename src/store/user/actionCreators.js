import * as actions from './actionTypes'
import * as services from '../../services'

export const login = async (email, password) => {
    const newUser = {
        "email":email,
        "password":password,
     };
    const response = await fetch(services.LOGIN, {method: 'POST',body: JSON.stringify(newUser), headers: {'Content-Type': 'application/json'}});
    return response.json();
}

export const logOut = async (token) => {
    const params = new URLSearchParams({
        "Authorization": token
    });
	await fetch(services.LOG_OUT, {method: 'DELETE', body: JSON.stringify(params),  headers: {'Content-Type': 'application/json', 'Authorization': token}});
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("email", "");
    localStorage.setItem("role", "");
};

export const getRole = async(token) => {
    const _ = require("lodash");
	const responseid = await fetch(services.USER_ME, {method: 'GET', headers: {'Content-Type': 'application/json','Authorization': token}});
	const info = await responseid.json();
    const currentRole = _.get(info, 'result.role');
    return currentRole;
};

export const userLoggedInAction = (info) => ({
	type: actions.LOGIN,
    payload:{
        name: info.user.name,
        email: info.user.email,
        token: info.result
      }
});

export const userLoggedOutAction = () => ({
	type: actions.LOG_OUT,
    payload: { token: null}
});

export const userGetRoleAction = (currentRole) => ({
    type: actions.LOG_ROLE, 
    payload: { role: currentRole}
});


