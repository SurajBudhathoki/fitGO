import React, { Component } from 'react';
import axios from 'axios';

export default class Signup extends Component {
    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
        
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
        }).catch((err) => {
            console.log(err)
        })

    }

    //rendering on the html
    render() {
        return (
            <div>
                <h2> Sign up</h2>
                    <form>
                        <div className ="form-group">
                            <label> Username  </label>  
                            <input className = "form-input" type = "text" name = "username" value={this.state.username} onChange = {this.handleChange}  />
                        </div>
                        <div className = "form-group">
                            <label> Password  </label>  
                            <input className = "form-input" type = "password" name = "password" value={this.state.password} onChange = {this.handleChange}/>
                        </div>
                        <div className = "form-group">
                            <button onClick={this.handleClick} type ="submit"> Sign up</button>
                        </div>  
                    </form>  
            </div>
        )
    }



}