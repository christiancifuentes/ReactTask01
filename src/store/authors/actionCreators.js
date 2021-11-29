import * as actions from './actionTypes'
import * as services from '../../services'

export const addAuthor = async (name, token) => {
  const response = await fetch(services.AUTHORS_ADD, {method: 'POST',body: JSON.stringify(name), headers: {'Content-Type': 'application/json', 'Authorization': token}});
  return response.json();
}

export const initAuthors = async () => {
  const response = await fetch(services.AUTHORS_ALL);
  return response.json();
}

export const fetchAuthorsAction = (authors) => ({
	type: actions.INIT_AUTHOR,
	payload: authors,
});

export const addAuthorAction = (author) => ({
	type: actions.ADD_AUTHOR,
  payload:{      
    id: author.id,
    name: author.name
  }
});
