import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';
import {TextField, } from '@material-ui/core';

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            redirectTo: null,
        
        }
        //using bind to create a new function  to call the this keyword with the provided value
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    //handling when user types on the input boxes
    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        });
    }

    //posting the username and password on clicking signup button
    handleClick = (event) => {

        event.preventDefault();

        axios.post('/api/users', {
                    username: this.state.username,
                    password: this.state.password  
        }).then((result) => {
            console.log(result)

            this.setState({
                redirectTo: '/login'
            });

        }).catch((err) => {
            console.log(err)
        })

    }

    //rendering on the html
    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return (
            <div className="userForm">
                <h1> Sign up </h1>
                    <form>

                           <div className="inner-wrap">
                           <TextField type="text" label="Username" margin="normal" onChange = {this.handleChange} name="username"  required= {true} value={this.state.username}/> <br/>
      <TextField type="password" label="Password" margin="normal" value={this.state.password} required= {true} onChange = {this.handleChange} name="password" /> <br/>
 
                        <div >
                        <button className= "button submitButton" onClick={this.handleClick} type ="submit"> Sign Up</button>
                    </div>
                    </div>

                    </form>  
            </div>
        )
    }
}


}