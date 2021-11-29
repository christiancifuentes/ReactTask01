import * as actions from './actionTypes';
const authorsReducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_AUTHOR:
            return [
                ...state,
                {
                    id: action.payload.id,
                    name: action.payload.name
                }

            ];
        case actions.DELETE_AUTHOR:
            return state.filter(author => author.id !== action.payload.id);
        case actions.INIT_AUTHOR:
                return action.payload;
        default:
            return state;
    }
}

export default authorsReducer;