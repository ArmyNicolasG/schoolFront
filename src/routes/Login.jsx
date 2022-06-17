import { useState } from 'react';
import Input from '../components/Input.jsx';
import '../styles/Login.css';
//require('dotenv').config();

//const { SRV_API_HOST } = process.env;

export default function Login(){
	
	const [ message, setMessage ] = useState('');
	const [ id, setId ] = useState("");
	const [ password, setPassword ] = useState("");

	function handleChange(event) {
		if(event.target.name === "id"){
			setId(event.target.value);
		}
		else if(event.target.name === "password"){
			setPassword(event.target.value);
		}
	}

	async function handleSubmit(event) {
		event.preventDefault();
		const data = JSON.stringify({
			userId: id,
			password: password
		});
		await window.fetch(`${process.env.SRV_API_HOST}/login`, {
			headers: { "Content-Type" : "application/json" },
			method: "POST",
			body: data
		}).then(res => res.json()).then(data => { setMessage(data.message) }).catch((err) => { console.log(err); });
	}

	return(
		<div className="login-container">
			<form>
				<Input attribute={{
					type: "text",
					name: "id",
					placeholder: "Documento de Identidad",
					className: "login-input"
				}} handleChange={handleChange}	
				/>
				<Input attribute={{
					type: "password",
					name: "password",
					placeholder: "Contraseña",
					className: "login-input"
				}} handleChange={handleChange}
				/>

				<input type="submit" value="Enviar" onClick={ handleSubmit } />
			</form>
			<p>{ message }</p>
		</div>
	);
}