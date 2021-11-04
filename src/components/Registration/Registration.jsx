 import React from 'react'
 import Button from '../../common/Button/Button';
 import Input from '../../common/Input/Input';
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

      handleSubmit(){
      
        const newUser = {
            "name":this.state.name,
            "email":this.state.email,
            "password":this.state.password,
         };
         /*const newUser =  {
            "name": "string",
            "email": "string@ssss.com",
            "password": "string"
          }*/
        fetch("http://localhost:3000/register", {
            method: 'POST',
            body: JSON.stringify(newUser),
            headers: {
              'Content-Type': 'application/json',
        },
      }).then((result) => {
          if(result.json().result){
            alert('hol: '+result.json().result);
            return false;
          }else{
            alert('ERROR');
          }
    })


    }   
   
   render() {
     return (
       <form className='registrationDivStyle' onSubmit={this.handleSubmit} action="#">
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
         <Button type="submit" label="Registration" />
         <p>If you have an account you can <a href="login"> Login</a></p>
         </form>
     );
   }
 }
 