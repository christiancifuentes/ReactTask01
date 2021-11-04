import Hearder from './components/Header/Header';
import Courses from './components/Courses/components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import RegistrationForm from './components/Registration/Registration';
import LoginForm from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import {Link, Route} from 'react-router-dom'

import { useState } from 'react';
import CourseCard from './components/Courses/components/CourseCard/CourseCard';
const appStyle = {
	margin: '1% 1% 0% 1%',
};

const App = () => {
	const [state, setState] = useState('');
	return (
		<div style={appStyle}>
			<Hearder />
			<div className='courseStyle'>
				<Route path="/registration" component={RegistrationForm}/>
				<Route path="/login" component={LoginForm}/>
				<Route exact path="/courses" component={Courses}/>
				<Route exact path="/courses/add" component={CreateCourse}/>
				<Route exact path="/courses/1" component={CourseCard}/>	
			</div>
 		</div>
	);
};
export default App;
