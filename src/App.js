import Hearder from './components/Header/Header';
import Courses from './components/Courses/components/Courses/Courses';
import CreateCourse from './components/CreateCourse/CreateCourse';
import { useState } from 'react';
const appStyle = {
	margin: '1% 1% 0% 1%',
};

const App = () => {
	const [state, setState] = useState('');
	return (
		<div style={appStyle}>
			<Hearder />
			{state === 'false' || state === 'undefiend' ? (
				<CreateCourse stateChanger={setState} />
			) : (
				<Courses stateChanger={setState} />
			)}
		</div>
	);
};
export default App;
