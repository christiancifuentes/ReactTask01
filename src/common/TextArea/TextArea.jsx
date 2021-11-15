import React from 'react';

const Input = ({
	value,
	labelText,
	placeholder,
	onChange,
	name,
	id,
	style,
	className,
}) => (
	<textarea
		value={value}
		placeholder={placeholder}
		style={style}
		onChange={onChange}
	></textarea>
);

export default Input;
