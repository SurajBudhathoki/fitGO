import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import axios from 'axios';


export default class Login extends Component {

    constructor() {
        super()
        this.state = {
            username: '',
            password: '',
            redirectTo: null
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
                redirectTo: '/'
            });
         }   

        })
        .catch(err => {
            console.log(err);
        })

    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
        return ( 
            <div >
                <h2> Login</h2>
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
                            <button onClick={this.handleClick} type ="submit"> Login</button>
                        </div>  
                    </form>  
            </div>
        )
        } 
    }

}