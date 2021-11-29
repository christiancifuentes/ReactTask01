import React from 'react';
import Logo from './Logo';
import Button from '../../common/Button/Button';
import {logoutUserThunk} from '../../store/user/thunk'
import './Header.css';
import { connect, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom"; 


const Header = (props) => {
	const dispatch = useDispatch();
	const logOutClick = () => {
		dispatch(logoutUserThunk(props.token));
	}  

	return(
	<div className='headerStyle' data-testid='header'>
		<div className='divContent'>
			<Logo />
		</div>
		<div className='divContentRight'>
			{props.token&&<Button label='Logout' onClick={logOutClick}/>}
		</div>
		<div className='divContentRight' data-testid='username'>
			{props.email}
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
