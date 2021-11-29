import * as actions from './actionTypes';

const coursesReducer = (state = [], action) => {
    switch (action.type) {
        case actions.ADD_COURSE:
            return [
                ...state,
                {
                    authors: action.payload.authors,
                    creationDate: action.payload.creationDate,
                    description: action.payload.description,
                    duration: action.payload.duration,
                    id: action.payload.id,
                    title: action.payload.title
                }

            ];
        case actions.INIT_COURSE:
            return action.payload;
        case actions.DELETE_COURSE:
            return state.filter(course => course.id !== action.payload.id);
        case actions.EDIT_COURSE:
            return [ state.map(course => course.id !== action.payload.id ? course : {
                ...course,
                    authors: action.payload.authors,
                    creationDate: action.payload.creationDate,
                    description: action.payload.description,
                    duration: action.payload.duration,
                    id: action.payload.id,
                    title: action.payload.title
            })]
        default:
            return state;
    }
}
export default coursesReducer;