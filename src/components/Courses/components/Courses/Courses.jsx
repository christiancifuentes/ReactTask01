import Button from '../../../../common/Button/Button';
import CourseCard from '../CourseCard/CourseCard';
import SearchBar from '../SearchBar/SearchBar';

import { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";


import './Courses.css';

let active= true;
const url = 'http://localhost:3000/courses/all';

const Courses = (props) => {
	const getCourses = async()=>{
		const response = await fetch(url);
		const courses = await response.json();
		if(courses.successful){
			if(active){
			courses.result.forEach(course => {
                props.dispatch({
                    type: "addCourse",
                    payload:{
                        authors: course.authors,
                        creationDate: course.creationDate,
                        description: course.description,
                        duration: course.duration,
                        id: course.id,
						title: course.title
                    }
                });
			});
			active=false;
		}

		}
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
	  courses: state.courses
	};
  }

export default  connect(mapStateToProps)(Courses);	
