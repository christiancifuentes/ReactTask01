import Hearder from './components/Header/Header';
import Courses from './components/Courses/components/Courses/Courses';
import RegistrationForm from './components/Registration/Registration';
import LoginForm from './components/Login/Login';
import CourseInfo from './components/CourseInfo/CourseInfo';
import Error from './components/Error/Error'
import CourseForm from './components/CourseForm/ CourseForm';
import PrivateRoute from './components/PrivateRouter/PrivateRouter';

import {Route,Switch} from 'react-router-dom'

const appStyle = {
	margin: '1% 1% 0% 1%',
};

const App = () => {
	return (
		<div style={appStyle}>
			<Hearder />
			<div className='courseStyle'>
				<Switch>
					<Route exact path="/" component={Courses} />
					<Route exact path="/registration" component={RegistrationForm}/>
					<Route exact path="/login" component={LoginForm}/>
					<Route exact path="/courses" component={Courses}/>
					<Route exact path="/courses/add" component={CourseForm} />
					
					<Route exact path="/courses/:id" component={CourseInfo}/>
					<Route exact path="/courses/update/:id" component={CourseForm}/>
					<Route path="*" component={Error}/>
				</Switch>
			</div>
 		</div>
	);
};

export default App;	