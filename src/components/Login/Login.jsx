 import React from 'react'
 import Button from '../../common/Button/Button';
 import Input from '../../common/Input/Input';
 import '../Registration/Registration';
 
 export default class LoginForm extends React.Component {
   registerUser = ({ serialized, fields, form }) => {
     return fetch('https://backend.dev', {
       body: JSON.stringify(serialized)
     })
   }
   
   render() {
     return (
       <form className='registrationDivStyle'>
           <h2>Login</h2>
           <Input
             className="inputCreateStyle"
             name="userEmail"
             type="email"
             labelText="E-mail"
             placeholder="Enter email"
             required />
          <Input
             className="inputCreateStyle"
             name="userPassword"
             type="password"
             labelText="Password"
             placeholder="Enter password"
             required /> 
         <div className='divButtonStyle'><Button label="Login" /></div>
         <p>If you not have an account you can <a href="registration"> Registration</a></p>
         </form>
     );
   }
 }
 