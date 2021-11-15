import * as actions from './actionTypes';
export default function reducer ( state = {}, action){
    switch (action.type) {
        case actions.LOGIN:
            return {
                ...state,
                
                    name: action.payload.name,
                    email: action.payload.email,
                    token: action.payload.token,
                    role: action.payload.role
                
            };
            case actions.LOG_ROLE:
                return {
                    ...state,
                        role: action.payload.role
                    
                };
        case actions.LOG_OUT:
            return {
                ...state, 
                token: "",
                name: "",
                email: "",
                role: ""
            };
        default:
            return state;
    }
}