import Button from '../../../../common/Button/Button';
import CourseCard from '../CourseCard/CourseCard';
import SearchBar from '../SearchBar/SearchBar';

import { useState } from 'react';

import './Courses.css';

import { mockedCoursesList } from './mockedCoursesList';
import { mockedAuthorsList } from './mockedAuthorsList';

const Courses = ({ stateChanger, newCourse }) => {
	const fullListItems = mockedCoursesList.map((t1) => ({
		...t1,
		...t1.authors.map((author) =>
			mockedAuthorsList.find((t2) => t2.id === author)
		),
	}));

	const listItems = fullListItems.map((course) => (
		<CourseCard
			key={course.id}
			title={course.title}
			description={course.description}
			authors={course[0].name.toString() + ', ' + course[1].name.toString()}
			duration={course.duration}
			creationDate={course.creationDate}
		></CourseCard>
	));
	const [courses, setCourses] = useState(listItems);
	return (
		<div className='courseStyle'>
			<SearchBar />
			<Button label='Add new course' onClick={() => stateChanger('false')} />
			<ul>{courses}</ul>
		</div>
	);
};

export default Courses;
