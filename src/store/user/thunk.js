import {login, userLoggedInAction, logOut, userLoggedOutAction, getRole, userGetRoleAction } from './actionCreators'

export const loginUserThunk = (email, password, history) => async (dispatch) => {
		try {const response = await login(email, password, history);
			dispatch(userLoggedInAction(response));	
		}catch (error){
			dispatch(userLoggedOutAction());
		}
};

export const logoutUserThunk = (token) => async (dispatch, getState) => {
	await logOut(token);
	dispatch(userLoggedOutAction());
};

export const getUserInfoThunk = (token) => async (dispatch, getState) =>{
	const role = await getRole(token);
	dispatch(userGetRoleAction(role));
}
