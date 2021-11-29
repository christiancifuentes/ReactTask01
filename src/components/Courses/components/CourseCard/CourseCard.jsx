import React from 'react';
import Button from '../../../../common/Button/Button';
import './CourseCard.css';
import {deleteCourseThunk} from '../../../../store/courses/thunk'

import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";


const CourseCard = (props) => {

	let history = useHistory();
	const dispatch = useDispatch();
	const showDetails = () =>{
		history.push(`/courses/${props.id}`);
	}

	const deleteCourseF = () =>{
		dispatch(deleteCourseThunk(props.id, props.token));
	}

	const editCourse = () =>{
		history.push(`/courses/update/${props.id}`);
	}

	return (
	<div className='courseCardDiv' data-testid='course-card' key={props.key}>
		<div className='divContentLeft' >
			<h2 data-testid='course-title'>{props.title}</h2>
			<p data-testid='course-description'>{props.description}</p>
		</div>
		<div className='divContentCardRight'>
			<div className='cardElement'>
				<h2>Authors: </h2>
				<h3 data-testid='course-authors'>{props.authors}</h3>
			</div>
			<div className='cardElement'>
				<h2>Duration: </h2> <h3 data-testid='course-duration'>{props.duration} hours</h3>
			</div>
			<div className='cardElement'>
				<h2>Created: </h2> <h3 data-testid='course-creation-date'>{props.creationDate}</h3>
			</div>
			<div className='divCenter'>
			{props.courses && props.role === 'admin' ? (
					<><Button label='Show Courses' onClick={showDetails}/>
					<Button label='Delete' onClick={deleteCourseF}/>
					<Button label='Edit' onClick={editCourse}/></>
					) : (
					<><Button label='Show Courses' onClick={showDetails}/></>
				)}
			</div>
		</div>
	</div>
	);
};

function mapStateToProps(state) {
	return {
	  token: state.user.token,
	  role: state.user.role,
	  courses: state.courses
	};
  }


export default  connect(mapStateToProps)(CourseCard);	
