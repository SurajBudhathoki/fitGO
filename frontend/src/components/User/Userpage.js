import React, {Component} from 'react';
import Login from './Login';
export default class Userpage extends Component {

    state= {
        loggedIn: false,
        username: null
    }

updateUser (userObject) {
    this.setState(userObject)
}

render() {
    return(
        <div>
           <h1> Welcome! {this.state.username} </h1> 

            <Login updateUser = {this.updateUser} />

        </div>
    )

}

}
