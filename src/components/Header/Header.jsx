import React from 'react';
import Logo from './Logo';
import Button from '../../common/Button/Button';
import './Header.css';

import { connect } from "react-redux";


const Header = (props) => {
	const logOut = () =>{
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
			{props.name&&<Button label='Logout' onClick={logOut}/>}
		</div>
		<div className='divContentRight'>
			<h3>{props.name}</h3>
		</div>
	</div>
)};

function mapStateToProps(state) {
	return {
	  name: state.user.name
	};
  }

export default  connect(mapStateToProps)(Header);	
