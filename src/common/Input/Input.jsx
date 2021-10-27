import React from 'react';

const Input = ({ labelText, placeholder, onChange, name, id, style }) => (
	<>
		<label for={labelText}>{labelText}</label>
		<input
			type='text'
			id={id}
			name={name}
			placeholder={placeholder}
			style={style}
			onChange={onChange}
		></input>
	</>
);

export default Input;
