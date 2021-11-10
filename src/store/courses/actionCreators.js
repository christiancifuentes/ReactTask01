import * as actions from './actionTypes'

export const addCourse = course =>({
  type: actions.ADD_COURSE,
  payload: {
    authors: course.authors,
    creationDate: course.creationDate,
    description: course.description,
    duration: course.duration,
    id: course.id,
    title: course.title
  }

})

export const initCourse = course =>({
  type: actions.INIT_COURSE,
  payload: {
    course
  }

})

export const deleteCourse = id =>({
    type: actions.LOGIN,
    payload: {
        id
    }

})

export const edit = (course) => ({
    type: actions.LOG_OUT,
    payload: {
        token : null
    }
});