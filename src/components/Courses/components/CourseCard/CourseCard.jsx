import React from 'react';
import Button from '../../../../common/Button/Button';

import './CourseCard.css';

const CourseCard = ({
	title,
	description,
	creationDate,
	duration,
	authors,
}) => (
	<div className='courseCardDiv'>
		<div className='divContentLeft'>
			{title}
			<p>{description}</p>
		</div>

		<div className='divContentCardRight'>
			<div className='cardElement'>
				<h2>Authors: </h2>
				<h3>{authors}</h3>
			</div>
			<div className='cardElement'>
				<h2>Duration: </h2> <h3>{duration} hours</h3>
			</div>
			<div className='cardElement'>
				<h2>Created: </h2> <h3>{creationDate}</h3>
			</div>
			<div className='divCenter'>
				<Button label='Show Courses' />
			</div>
		</div>
	</div>
);

export default CourseCard;
