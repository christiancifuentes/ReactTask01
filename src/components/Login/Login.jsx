 import React from 'react'
 import Button from '../../common/Button/Button';
 import Input from '../../common/Input/Input';
 import { login } from '../../store/user/actionCreators';
 import '../Registration/Registration';

import { useState } from 'react';
import { connect, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom"; 

  const Login = (props) => {
    const dispatch = useDispatch();
    let history = useHistory();
    const [email,setEmail] = useState([]);
    const [password,setPassword] = useState([]);

    const handleChangePassword = (event) =>{
      setPassword(event.target.value);
    }

    const handleChangeEmail = (event) =>{
      setEmail(event.target.value);
    }

    const handleSubmit = () => {
      dispatch(login(email,password,history));
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
   