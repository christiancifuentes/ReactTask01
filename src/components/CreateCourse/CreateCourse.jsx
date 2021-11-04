import Input from '../../common/Input/Input';
import Button from '../../common/Button/Button';
import TextArea from '../../common/TextArea/TextArea';

import { useState } from 'react';
import { Link } from 'react-router-dom';

import { mockedAuthorsList } from '../Courses/components/Courses/mockedAuthorsList';

import './CreateCourse.css';

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

const CreateCourse = ({ stateChanger }) => {
	const [authorsToAdd] = useState(mockedAuthorsList);
	const [authorsAdded] = useState([]);
	const [inputAuthor, setinputAuthor] = useState('');
	const [inputCourseName, setinputCourseName] = useState('');
	const [inputCourseDes, setinputCourseDes] = useState('');
	const [inputDuration, setinputDuration] = useState('');
	const [mockedAuthors, setmockedAuthors] = useState(
		authorsToAdd.map((author) => (
			<div>
				<div key={author.id}>
					<h3>{author.name}</h3>
				</div>
				<div>
					<Button
						label='Add author'
						onClick={() => addAuthor(author.id)}
					></Button>
				</div>
			</div>
		))
	);
	const [mockedAuthorsAdd, setmockedAuthorsAdd] = useState(
		authorsAdded.map((author) => (
			<div>
				<div key={author.id}>
					<h3>{author.name}</h3>
				</div>
				<div>
					<Button
						label='Add author'
						onClick={() => deleteAuthor(author.id)}
					></Button>
				</div>
			</div>
		))
	);
	let fullListItems;
	let itemsAdd;
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
	function makeId(length) {
		var result = '';
		var characters =
			'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;
		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
	function dateToday() {
		var today = new Date();
		var dd = today.getDate();

		var mm = today.getMonth() + 1;
		var yyyy = today.getFullYear();
		if (dd < 10) {
			dd = '0' + dd;
		}

		if (mm < 10) {
			mm = '0' + mm;
		}
		return (today = dd + '/' + mm + '/' + yyyy);
	}
	const newCourse = [];
	function createCourse() {
		newCourse.push({
			id: makeId(36),
			title: inputCourseName,
			description: inputCourseDes,
			creationDate: dateToday(),
			duration: inputDuration,
			authors: authorsAdded,
		});
	}
	function createAuthor() {
		console.log(fullListItems);
		if (fullListItems === undefined) {
			fullListItems = authorsToAdd.filter((item) => item.id !== makeId(36));
			fullListItems.push({ name: inputAuthor, id: makeId(36) });
		}
		console.log(fullListItems);
		setmockedAuthors(
			fullListItems.map((author) => (
				<div>
					<div key={author.id}>
						<h3>{author.name}</h3>
					</div>
					<div>
						<Button
							label='Add author'
							onClick={() => addAuthor(author.id)}
						></Button>
					</div>
				</div>
			))
		);
	}
	function deleteAuthor(id) {
		if (itemsAdd === undefined) {
			itemsAdd = authorsToAdd.filter((item) => item.id !== id);
		} else {
			itemsAdd = itemsAdd.filter((item) => item.id !== id);
		}
		if (fullListItems === undefined) {
			fullListItems = authorsToAdd.filter((item) => item.id === id);
		} else {
			const element = authorsToAdd.filter((item) => item.id === id);
			fullListItems.push({ name: element[0].name, id: element[0].id });
		}

		setmockedAuthors(
			fullListItems.map((author) => (
				<div>
					<div key={author.id}>
						<h3>{author.name}</h3>
					</div>
					<div>
						<Button
							label='Add author'
							onClick={() => addAuthor(author.id)}
						></Button>
					</div>
				</div>
			))
		);

		setmockedAuthorsAdd(
			itemsAdd.map((author) => (
				<div>
					<div key={author.id}>
						<h3>{author.name}</h3>
					</div>
					<div>
						<Button
							label='Add author'
							onClick={() => deleteAuthor(author.id)}
						></Button>
					</div>
				</div>
			))
		);
	}
	function addAuthor(id) {
		if (fullListItems === undefined) {
			fullListItems = authorsToAdd.filter((item) => item.id !== id);
		} else {
			fullListItems = fullListItems.filter((item) => item.id !== id);
		}
		if (itemsAdd === undefined) {
			itemsAdd = authorsToAdd.filter((item) => item.id === id);
		} else {
			const element = authorsToAdd.filter((item) => item.id === id);
			itemsAdd.push({ name: element[0].name, id: element[0].id });
		}

		setmockedAuthors(
			fullListItems.map((author) => (
				<div>
					<div key={author.id}>
						<h3>{author.name}</h3>
					</div>
					<div>
						<Button
							label='Add author'
							onClick={() => addAuthor(author.id)}
						></Button>
					</div>
				</div>
			))
		);

		setmockedAuthorsAdd(
			itemsAdd.map((author) => (
				<div>
					<div key={author.id}>
						<h3>{author.name}</h3>
					</div>
					<div>
						<Button
							label='Add author'
							onClick={() => deleteAuthor(author.id)}
						></Button>
					</div>
				</div>
			))
		);
	}
	return (
		<div className='courseCreateStyle'>
			<div className='marginLeftDiv'>
				<Input
					labelText='Title'
					placeholder='Enter course name'
					style={inputCreateStyle}
					onChange={(event) => setinputCourseName(event.target.value)}
				/>
				<Link to="/courses">
					<Button label='Create course' onClick={() => createCourse()} />
 				</Link>
				
			</div>
			<div className='textAreaStyleDiv'>
				<TextArea
					placeholder='Description'
					style={textAreaStyle}
					onChange={(event) => setinputCourseDes(event.target.value)}
				/>
			</div>
			<div className='authorBlackBorder'>
				<div className='divContentRightAuthor'>
					<h2 className='hearderCenter'>Authors</h2>
					<div>{mockedAuthors}</div>
					<h4 className='hearderCenter'>Course authors</h4>
					<div>
						{authorsAdded ? (
							<div>{mockedAuthorsAdd}</div>
						) : (
							<div className='hearderCenter'>Author list is empty</div>
						)}
					</div>
				</div>
				<div className='divContentRightAuthor'>
					<h2 className='hearderCenter'>Add author</h2>
					<div>
						<Input
							labelText='Author name'
							placeholder='Enter author name'
							style={inputCreateStyle}
							onChange={(event) => setinputAuthor(event.target.value)}
						/>
						<Button label='Create author' onClick={() => createAuthor()} />
					</div>
					Duration
					<div>
						<Input
							labelText='Duration'
							placeholder='Enter duration in minutes...'
							style={inputCreateStyle}
							onChange={(event) =>
								setinputDuration(timeConvert(event.target.value))
							}
						/>
						<h1>Duration: </h1>
						<h3>{inputDuration}</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CreateCourse;
