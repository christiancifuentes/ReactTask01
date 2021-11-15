import * as actions from './actionTypes'
import * as services from '../../services'

export const addAuthor = (name, token) => async (dispatch) =>{
  const response = await fetch(services.author_add, {method: 'POST',body: JSON.stringify(name), headers: {'Content-Type': 'application/json', 'Authorization': token}});
  const info = await response.json();
  console.log(info);
  dispatch({ type: actions.ADD_AUTHOR,       
    payload:{      
      id: info.result.id,
      name: info.result.name
    }
  });
}

export const deleteAuthor = id =>({
    type: actions.DELETE_AUTHOR,
    payload: {
        id
    }
})

export const initAuthors = () => async (dispatch) => {
  const response = await fetch(services.authors_all);
  const authors = await response.json();
  if(authors.successful){
    dispatch({
        type: actions.INIT_AUTHOR,
        payload:
          authors.result   
    });
  }
}