import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import TextArea from '../../common/TextArea/TextArea';
import { addCourse, edit } from '../../store/courses/actionCreators';
import { addAuthor, initAuthors } from '../../store/authors/actionCreators';

import { connect, useDispatch } from "react-redux";
import { useState, useEffect } from 'react';
import { Link, Redirect, useParams} from 'react-router-dom';

import './CourseForm.css';

const inputCreateStyle = {
	marginLeft: '40px',
	width: '325px',
	marginRight: '20px',
	marginTop: '20px',
	border: '2px solid orange',
	height: '30px',
	paddingLeft: '10px',
};

const textAreaStyle = {
	borderColor: 'yellow',
	width: '95%',
	height: '100px',
};

const _ = require("lodash");

const CourseForm = (props) => {
	const dispatch = useDispatch();
	const getCourses = ()=>{
		dispatch(initAuthors());
	}
	useEffect(()=>{
		getCourses();
	},[]);
	const id = useParams().id;
	const [currentCourse] = useState(props.courses.filter(course => course.id === id))
	const [authorsToAdd, setauthorsToAdd] = useState(props.authors);
	const [authorsAdded, setauthorsAdded] = useState([]);
	const [inputAuthor, setinputAuthor] = useState(_.get(currentCourse, '[0].authors'));
	const [inputCourseName, setinputCourseName] = useState(_.get(currentCourse, '[0].title'));
	const [inputCourseDes, setinputCourseDes] = useState(_.get(currentCourse, '[0].description'));
	const [inputDuration, setinputDuration] = useState(timeConvert(_.get(currentCourse, '[0].duration',0)));
	const [inputDurationNumber, setinputDurationNumber] = useState(_.get(currentCourse, '[0].duration'));

	
	const setinputDurationTime  = (duration) =>{
		setinputDuration(timeConvert(duration));
		setinputDurationNumber(parseInt(duration));
	}

	function timeConvert(n) {
		var num = n;
		var hours = num / 60;
		var rhours = Math.floor(hours);
		var minutes = (hours - rhours) * 60;
		var rminutes = Math.round(minutes);
		return (
			num + ' minutes = ' + rhours + ' hour(s) and ' + rminutes + ' minute(s).'
		);
	}

	const createCourse = () => {
		let authorsCreate = authorsAdded.map((item) => item.id);
		const newCourse = {
			"title": inputCourseName,
			"description": inputCourseDes,
			"duration": inputDurationNumber,
			"authors": authorsCreate
		 };
		 dispatch(addCourse(newCourse,props.token));
	}

	const editCourse = () =>{
		const newCourse = {
			"title": inputCourseName,
			"description": inputCourseDes,
			"duration": inputDurationNumber,
			"authors": authorsAdded
		 };
		 dispatch(edit(newCourse, currentCourse[0].id, props.token));
	}


	function createAuthor() {
		const author = {
			name :inputAuthor
		}
		dispatch(addAuthor(author,props.token));
	}
	function deleteAuthor(id) {
		let newValue = authorsAdded.filter((item) => item.id === id);
		setauthorsToAdd(prevArray => [...prevArray, ...newValue])
		setauthorsAdded(authorsAdded.filter((item) => item.id !== id));
	}
	function addAuthorClick(id) {
		let newValue = authorsToAdd.filter((item) => item.id === id);
		setauthorsAdded(prevArray => [...prevArray, ...newValue])
		setauthorsToAdd(authorsToAdd.filter((item) => item.id !== id));	
	}
	return (
		<>
		{props.token&&<div className='courseCreateStyle'>
			<div className='marginLeftDiv'>
				<Input
					labelText='Title'
					placeholder='Enter course name'
					style={inputCreateStyle}
					valueX={inputCourseName}
					onChange={(event) => setinputCourseName(event.target.value)}
				/>
				{id ? (
					<Link to="/courses">
						<Button label='Update course' onClick={() => editCourse()} />
					</Link>
					) : (
					<Link to="/courses">
						<Button label='Create course' onClick={() => createCourse()} />
 					</Link>
				)}
				
			</div>
			<div className='textAreaStyleDiv'>
				<TextArea
					placeholder='Description'
					style={textAreaStyle}
					value={inputCourseDes}
					onChange={(event) => setinputCourseDes(event.target.value)}
				/>
			</div>
			<div className='authorBlackBorder'>
				<div className='divContentRightAuthor'>
					<h2 className='hearderCenter'>Authors</h2>
					{props.authors ? (<div>{authorsToAdd.map(author =>{
								return <div>
											<div key={author.id}>
												<h3>{author.name}</h3>
											</div>
											<div>
												<Button
													label='Add author'
													onClick={() => addAuthorClick(author.id)}
												></Button>
											</div>
										</div>
								})}</div>	) : (
									<div className='hearderCenter'>Author list is empty</div>
								)}
					<h4 className='hearderCenter'>Course authors</h4>
					<div>
						{props.authors ? (
							<div>{authorsAdded.map(author =>{
								return <div>
											<div key={author.id}>
												<h3>{author.name}</h3>
											</div>
											<div>
												<Button
													label='Remove'
													onClick={() => deleteAuthor(author.id)}
												></Button>
											</div>
										</div>
								})}
							</div>
						) : (
							<div className='hearderCenter'>Author list is empty</div>
						)}
					</div>
				</div>
				<div className='divContentRightAuthor'>
					<h2 className='hearderCenter'>Add author</h2>
					<div>
						<Input
							required
							labelText='Author name'
							placeholder='Enter author name'
							style={inputCreateStyle}
							onChange={(event) => setinputAuthor(event.target.value)}
						/>
						<Button label='Create author' onClick={() => createAuthor()} />
					</div>
					<div>
						<Input
							required 
							labelText='Duration'
							placeholder='Enter duration in minutes...'
							style={inputCreateStyle}
							valueX={inputDurationNumber}
							onChange={(event) =>
								setinputDurationTime(event.target.value)
							}
						/>
						<h1>Duration: </h1>
						<h3>{inputDuration}</h3>
					</div>
				</div>
			</div>
		</div>}
		{ !props.token&&<Redirect to="/login" />}
		</>
	);
};

function mapStateToProps(state) {
	return {
	  token: state.user.token,
	  authors: state.authors,
	  courses: state.courses
	};
  }

export default  connect(mapStateToProps)(CourseForm);	
