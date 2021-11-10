import * as actions from './actionTypes'

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