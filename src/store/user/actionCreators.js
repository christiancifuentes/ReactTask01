import * as actions from './actionTypes'
import * as services from '../../services'


export const login = (token,name,email) =>({
    type: actions.LOGIN,
    payload: {
        token,
        name,
        email
    }

})

export const logOut = () => ({
    type: actions.LOG_OUT,
    payload: {
        token : null,
    }
});

export const getRole = (token) => async (dispatch) =>{
    const _ = require("lodash");
	const responseid = await fetch(services.userMe, {method: 'GET', headers: {'Content-Type': 'application/json','Authorization': token}});
	const info = await responseid.json();
    const currentRole = _.get(info, 'result.role');
    dispatch({ type: actions.LOG_ROLE, payload: { role: currentRole}});
};