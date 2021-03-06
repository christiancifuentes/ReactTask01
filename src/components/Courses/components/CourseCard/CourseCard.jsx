import React from 'react';
import Button from '../../../../common/Button/Button';
import './CourseCard.css';
import { deleteCourse } from '../../../../store/courses/actionCreators';

import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


const CourseCard = (props) => {

	let history = useHistory();
	const showDetails = () =>{
		history.push(`/courses/${props.id}`);
	}

	const deleteCourseF = () =>{
		props.dispatch(deleteCourse(props.id, props.token));
	}

	const editCourse = () =>{
		history.push(`/courses/update/${props.id}`);
	}

	return (
		
	<div className='courseCardDiv'>
		<div className='divContentLeft'>
			<h2>{props.title}</h2>
			<p>{props.description}</p>
		</div>
		<div className='divContentCardRight'>
			<div className='cardElement'>
				<h2>Authors: </h2>
				<h3>{props.authors}</h3>
			</div>
			<div className='cardElement'>
				<h2>Duration: </h2> <h3>{props.duration} hours</h3>
			</div>
			<div className='cardElement'>
				<h2>Created: </h2> <h3>{props.creationDate}</h3>
			</div>
			<div className='divCenter'>
			{props.role === 'admin' ? (
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
	  role: state.user.role
	};
  }


export default  connect(mapStateToProps)(CourseCard);	
