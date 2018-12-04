import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {TextField, } from '@material-ui/core';




export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null,
            userText: '',
            passwordText: '',
            error: false,
        }
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    //handling when user types on the input boxes
    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    //posting the username and password on clicking signup button
    handleClick = (event) => {

        event.preventDefault();

        if(this.state.username === '' || this.state.password === '' ) {


            this.setState({ userText: "plese enter username" , passwordText : "please enter password", error: true })
        }
        else {


        
        axios.post('/login', {
            username: this.state.username,
            password: this.state.password
        })
        .then(response => {
            console.log(response);
         if(response.status === 200) {
            this.props.updateUser({
                loggedIn: true,
                username: response.data.username
            })
            
            this.setState({
                redirectTo: '/userpage'
            });
         }   

        })
        .catch(err => {
            console.log(err);
        })

    }

    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return ( 


            <div className="userForm">
            <h1>Log In </h1>
            <form>
   
    <div className="inner-wrap">

      <TextField type="text" label="Username" margin="normal" onChange = {this.handleChange} name="username"  helperText = {this.state.userText} error = {this.state.error} value={this.state.username} required= {true} /> <br/>
      <TextField type="password" label="Password" margin="normal" value={this.state.password} required= {true} onChange = {this.handleChange} name="password" helperText = {this.state.passwordText} error = {this.state.error}  /> <br/> <br/>
            
        <div>
        <button className= "button submitButton" onClick={this.handleClick} type ="submit"> Login</button> <br/>
        <div>
            <p> Don't have an account? <a href = '/signup'> Sign up now! </a> </p>    
        </div>
     </div>
    </div>

   
</form>
</div>
        )
        } 
    }

   

}