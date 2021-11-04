import React from 'react';

const Input = ({ labelText, placeholder, onChange, name, id, style, className, type}) => (
	<>
		<label for={labelText}>{labelText}</label>
		<input
			className={className}
			id={id}
			name={name}
			placeholder={placeholder}
			style={style}
			onChange={onChange}
			type={type}
		></input>
	</>
);

export default Input;
