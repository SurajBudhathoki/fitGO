import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Grid} from '@material-ui/core/';
import axios from 'axios';



export default class Navbar extends Component {
    constructor() {
        super()
        this.logout = this.logout.bind(this)
    }

    logout(event) {

        event.preventDefault();
       

        axios.post('/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {
            this.props.updateUser({
              loggedIn: false,
              username: null
            })
          }
        }).catch(err => {
            console.log('Logout error')
        })
      };

render() {

    const loggedIn = this.props.loggedIn;

    return (
        <div>

             
                <AppBar position="static">
                    <div>
                        {loggedIn ? 
                        (
                            <Toolbar>
                                  <Grid justify="space-between" container spacing={16}>
                                    <Grid item md = {11}>
                                <Link className="logo" to="/"> Logo </Link>
                                </Grid> 
                                <Grid item md= {1}>
                            <Link to="#" className="logout" onClick={this.logout}>Logout</Link>
                            </Grid>
                            </Grid>
                            </Toolbar>
                        ) : (
                                <Toolbar  >
                                    <Grid justify="space-between" container spacing={16}>
                                    <Grid item md = {10}>
                                    
                                    <Typography variant="h6" color="inherit">
                                    <Link  className="logo" to="/"> Logo </Link>  
                                    </Typography>
                                    </Grid>
                                    <Grid item md={2}>
                                    <Link  className="navs" to="/login"> Login </Link>
                                    <Link className="navs" to="/signup"> Sign up </Link>
                                    
                                    </Grid>
                                  </Grid>  
                                </Toolbar>

                                
                            )}
                    </div>
                   
                </AppBar>

        </div>
    )
}

}    