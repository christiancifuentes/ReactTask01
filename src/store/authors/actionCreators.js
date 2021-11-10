import * as actions from './actionTypes'

export const addAuthor = author =>({
  type: actions.ADD_AUTHOR,
  payload: {
    id: author.id,
    name: author.name
  }

})

export const deleteAuthor = id =>({
    type: actions.DELETE_AUTHOR,
    payload: {
        id
    }

})
