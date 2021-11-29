import Button from '../../../../common/Button/Button';
import CourseCard from '../CourseCard/CourseCard';
import SearchBar from '../SearchBar/SearchBar';
import { fetchCoursesThunk } from '../../../../store/courses/thunk'
import { getUserInfoThunk } from '../../../../store/user/thunk'
import { fetchAuthorsThunk } from '../../../../store/authors/thunk'
import { useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect, useDispatch } from "react-redux";

import './Courses.css';

const Courses = (props) => {
	const dispatch = useDispatch();

	useEffect(()=>{
			dispatch(fetchCoursesThunk());
			dispatch(getUserInfoThunk(props.token));
			dispatch(fetchAuthorsThunk());
	},[dispatch]);

	return (
		<div className='courses-section' data-testid='courses-section'>

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
							role={props.role}
                            />
                        })}
					</ul>
				</div>}
				{ !props.token&&<Redirect to="/login" />}
		</div>
	);
};

function mapStateToProps(state) {
	return {
	  token: state.user.token,
	  courses: state.courses,
	  authors: state.authors,
	  role: state.user.role
	};
  }

export default  connect(mapStateToProps)(Courses);	
