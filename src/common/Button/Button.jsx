import React from 'react';

const buttonStyle = {
	fontSize: '12px',
	backgroundColor: 'white',
	color: 'black',
	border: '2px solid #b53ec9',
	marginLeft: '10px',
	height: '30px',
	cursor: 'pointer',
	marginTop: '5px'
};

const Button = ({ label, onClick, type }) => (
	<button type={type} className='btn' style={buttonStyle} onClick={onClick}>
		{label}
	</button>
);

export default Button;
