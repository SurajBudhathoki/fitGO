import React, { Component } from 'react';
import { BrowserRouter, Route} from "react-router-dom";
import Signup from './components/User/Signup';
import Login from './components/User/Login';
import Homepage from './components/Homepage';
import Exercises from './components/Exercises';
import Userpage from './components/Userpage';
import Navbar from './components/Navigation/Navbar';

import Create from './components/Actions/Create';
import View from './components/Actions/View';
import './App.css';


class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null,
      open: false,
    
    }

    this.updateUser = this.updateUser.bind(this)
  }


  updateUser (userObject) {
    this.setState(userObject)
  }

  render() {
    return (
      <BrowserRouter>
      
      <div className="App">

         <Navbar updateUser={this.updateUser} loggedIn={this.state.loggedIn} username={this.state.username} />
         {/* {this.state.loggedIn 
          // && <p className="welcome">Welcome, {this.state.username}!</p>
        } */}

        <div className="content">
        
        <Route exact path="/" component={Homepage} />
        <Route path="/signup" component={Signup} />
        <Route path="/login" render={() =>
            <Login updateUser={this.updateUser}/>}/>
        <Route path="/userpage" component={Userpage} username={this.state.username}/>
        <Route path="/exercises" component={Exercises}  />

        <Route path="/create" component={Create} />
        <Route path="/view" component={View} />
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;

