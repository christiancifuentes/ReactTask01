import Button from '../../../../common/Button/Button';
import CourseCard from '../CourseCard/CourseCard';
import SearchBar from '../SearchBar/SearchBar';
import { initCourse } from '../../../../store/courses/actionCreators';
import { getRole } from '../../../../store/user/actionCreators';


import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";

import './Courses.css';

const Courses = (props) => {
	const dispatch = useDispatch();
	const getCourses = ()=>{
		dispatch(initCourse());
		dispatch(getRole(props.token));
	}
	useEffect(()=>{
		getCourses();
	},[]);

	return (
		<>
 			{props.token&&<div className='courseStyle'>
					<SearchBar />
					<Link to="/courses/add">
						<Button label='Add new course'/>
					</Link>
					<ul> {  
                        props.courses.map((course)=>{
                            const {id,title,description,authors,duration,creationDate} = course;
                            return <CourseCard
                            key={id}
                            id={id}
                            title={title}
                            description={description}
                            authors={authors}
                            duration={duration}
                            creationDate={creationDate}
                            />
                        })}
					</ul>
				</div>}
		{ !props.token&&<Redirect to="/login" />}
		</>
	);
};

function mapStateToProps(state) {
	return {
	  token: state.user.token,
	  courses: state.courses,
	  authors: state.authors
	};
  }

export default  connect(mapStateToProps)(Courses);	
