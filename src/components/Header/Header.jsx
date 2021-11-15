import React from 'react';
import Logo from './Logo';
import Button from '../../common/Button/Button';
import './Header.css';

import { connect } from "react-redux";

const url = "http://localhost:3000/logout";

const Header = (props) => {

	const logOut = async() =>{

		const params = new URLSearchParams({
			"Authorization": props.token
		})

		await fetch(url, {method: 'DELETE', body: JSON.stringify(params),  headers: {'Content-Type': 'application/json', 'Authorization': props.token}});

		localStorage.setItem("token", "");
		localStorage.setItem("name", "");
		localStorage.setItem("email", "");
		props.dispatch({
			type: "logOut",
		})
	}
	return(
	<div className='headerStyle'>
		<div className='divContent'>
			<Logo />
		</div>

		<div className='divContentRight'>
			{props.token&&<Button label='Logout' onClick={logOut}/>}
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
