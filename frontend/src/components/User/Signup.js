import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';

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
                        <label> Username <input className = "form-input" type = "text" name = "username" value={this.state.username} onChange = {this.handleChange}  /></label>
                        <label> Password <input className = "form-input" type = "password" name = "password" value={this.state.password} onChange = {this.handleChange}/></label>
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