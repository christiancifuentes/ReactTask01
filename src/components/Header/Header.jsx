import React from 'react';
import Logo from './Logo';
import Button from '../../common/Button/Button';
import { logOut } from '../../store/user/actionCreators';
import './Header.css';

import { connect, useDispatch } from "react-redux";

const Header = (props) => {

	const dispatch = useDispatch();
	const logOutClick = () => {
		dispatch(logOut(props.token));
	}
	
	return(
	<div className='headerStyle'>
		<div className='divContent'>
			<Logo />
		</div>

		<div className='divContentRight'>
			{props.token&&<Button label='Logout' onClick={logOutClick}/>}
		</div>
		<div className='divContentRight'>
			<h3>{props.email}</h3>
		</div>
	</div>
)};

function mapStateToProps(state) {
	return {
		email: state.user.email,
	  token: state.user.token
	};
  }

export default  connect(mapStateToProps)(Header);	
