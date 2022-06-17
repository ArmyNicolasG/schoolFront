const Input = ({ attribute, handleChange }) => {
	return (<>
	
		<input 
			type={ attribute.type } 
			name={ attribute.name } 
			placeholder={ attribute.placeholder } 
			onChange={ (e) => handleChange(e) }
			className={ attribute.className }
		/>

	</>);
}

export default Input;