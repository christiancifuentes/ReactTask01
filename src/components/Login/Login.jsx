 import React from 'react'
 import Button from '../../common/Button/Button';
 import Input from '../../common/Input/Input';
 import '../Registration/Registration';

import { useState } from 'react';
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";


 const url = "http://localhost:3000/login";
 

  const Login = (props) => {
    let history = useHistory();
    const [name,setName] = useState([]);
    const [email,setEmail] = useState([]);
    const [password,setPassword] = useState([]);
    const [token,setToken] = useState([]);

    const handleChangePassword = (event) =>{
      setPassword(event.target.value);
    }

    const handleChangeEmail = (event) =>{
      setEmail(event.target.value);
    }

	const handleSubmit = async()=>{

    const newUser = {
      "email":email,
      "password":password,
   };
     
		const response = await fetch(url, {method: 'POST',body: JSON.stringify(newUser), headers: {'Content-Type': 'application/json'}});
		const info = await response.json();
		if(info.successful){
			setToken(info.result);
      setName(info.user.name);
      localStorage.setItem("token", info.result);
      localStorage.setItem("name", info.user.name);
      localStorage.setItem("email", info.user.email);
      props.dispatch({
        type: "login",
        payload:{
          name: info.user.name,
          email: info.user.email,
          token: info.result
        }
      });
      history.push(`/courses/`);
		}else{
      alert('LOGIN ERROR!');
    }
	}
     return (
       <div className='registrationDivStyle'>
           <h2>Login</h2>
           <Input
             className="inputCreateStyle"
             name="userEmail"
             type="email"
             labelText="E-mail"
             placeholder="Enter email"
             required 
             value={email} 
             onChange={handleChangeEmail} />
          <Input
             className="inputCreateStyle"
             name="userPassword"
             type="password"
             labelText="Password"
             placeholder="Enter password"
             required
             value={password} 
             onChange={handleChangePassword}  /> 
         <div className='divButtonStyle'><Button label="Login" onClick={handleSubmit}/></div>
         <p>If you not have an account you can <a href="registration"> Registration</a></p>
         </div>
     );
   }

   export default  connect(null)(Login);	
 