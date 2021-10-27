import React from 'react';
import Logo from './Logo';
import Button from '../../common/Button/Button';
import './Header.css';

const Hearder = () => (
	<div className='headerStyle'>
		<div className='divContent'>
			<Logo />
		</div>

		<div className='divContentRight'>
			<Button label='Logout' />
		</div>
		<div className='divContentRight'>
			<h3>Christian</h3>
		</div>
	</div>
);

export default Hearder;
