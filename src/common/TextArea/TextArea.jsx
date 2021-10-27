import React from 'react';

const Input = ({
	labelText,
	placeholder,
	onChange,
	name,
	id,
	style,
	className,
}) => (
	<textarea
		placeholder={placeholder}
		style={style}
		onChange={onChange}
	></textarea>
);

export default Input;
