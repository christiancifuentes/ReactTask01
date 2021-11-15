 import React from 'react'
 import Button from '../../common/Button/Button';
 import Input from '../../common/Input/Input';

 import { useHistory } from "react-router-dom";

 import './Registration.css';
 
 export default class RegistrationForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: '',email: '', password: ''};
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChangeName(event) {
        this.setState({name: event.target.value});
      }
      handleChangeEmail(event) {
        this.setState({email: event.target.value});
      }
      handleChangePassword(event) {
        this.setState({password: event.target.value});
      }

      async handleSubmit(){
      
        const newUser = {
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password,
         };

        await fetch("http://localhost:3000/register", {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
              'Content-Type': 'application/json',
        },
      }).then((result) => {
        console.log(result);
        console.log(result.json());

          if(result.status=='201'){
            alert('User created successfully!');
            this.props.history.push('/login')
          }else{
            alert('ERROR!');
          }
      })
    }   
   
   render() {
     return (
       <div className='registrationDivStyle'>
           <h2>Registration</h2>
           <Input
             className="inputCreateStyle"
             name="firstName"
             labelText="Name"
             placeholder="Enter name"
             required={({ get }) => {
               return !!get(['primaryInfo', 'lastName', 'value'])
             }}
             value={this.state.name} 
             onChange={this.handleChangeName}  />
           <Input
             className="inputCreateStyle"
             name="userEmail"
             type="email"
             labelText="E-mail"
             placeholder="Enter email"
             required 
             value={this.state.email} 
             onChange={this.handleChangeEmail} />
          <Input
             className="inputCreateStyle"
             name="userPassword"
             type="password"
             labelText="Password"
             placeholder="Enter password"
             required
             value={this.state.password} 
             onChange={this.handleChangePassword}  /> 
         <Button type="submit" label="Registration" onClick={this.handleSubmit}/>
         <p>If you have an account you can <a href="login"> Login</a></p>
         </div>
     );
   }
 }
 