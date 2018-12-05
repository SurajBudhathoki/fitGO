import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { AppBar, Toolbar,  Grid} from '@material-ui/core/';
import { List, ListItem, Drawer, IconButton, Divider} from '@material-ui/core';
import axios from 'axios';
import Logo from '../Navigation/logo.PNG';


export default class Navbar extends Component {
    constructor() {
        super()
        this.state ={
            left: false,
            redirectTo: null,
        }
        this.logout = this.logout.bind(this)
    }


    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

    logout(event) {

        event.preventDefault();
       

        axios.post('/logout').then(response => {
          console.log(response.data)
          if (response.status === 200) {

            this.setState({
                redirectTo: '/'
            });

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

    if (this.state.redirectTo) {
        return <Redirect to={{ pathname: this.state.redirectTo }} />
    } else {

    return (
        <div >

                
                <AppBar position= "static"   style={{ backgroundColor: 'white' }} >
                    <Toolbar>

                      {loggedIn ?  
                      
                      <Grid container style={{ color: 'blue' }} >
                        <Grid item xs>
                        <IconButton className ="menuButton"  onClick={this.toggleDrawer('left', true)}> 
                    <i className="material-icons" id="menu" >menu</i>  </IconButton>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >                   
                        <List>
                            <ListItem className="menuItems" button> <Link to ="/"> <img src = {Logo} alt="Logo" className= "Logo" /> </Link> </ListItem>
                            <Divider />
                            <ListItem className="menuItems" button> <Link  to="/exercises"> View Exercises </Link>   </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/create">Create Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">View Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">Edit Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">Delete Program </Link> </ListItem>
                        </List>                            
                    </div>
                </Drawer>
                        </Grid>
                        <Grid item xs>
                        <Link  className="logogrid" to="/"> <img src = {Logo} alt="Logo" className= "Logo" /> </Link>
                        </Grid>
                        <Grid item xs={3} className= "navGrid" >
                        <Link to = "/userpage" className="acc" > 
                                <i className ="material-icons "> account_circle</i> {this.props.username}  </Link>
                                
                            <Link to="#" className="logout" onClick={this.logout}>Logout</Link>
                        </Grid>
                     </Grid>   :


                          

                            <Grid container style={{ color: 'blue' }} >
                        <Grid item xs>
                        <IconButton className ="menuButton"  onClick={this.toggleDrawer('left', true)}> 
                    <i className="material-icons" id="menu" >menu</i>  </IconButton>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >                   
                        <List>
                            <ListItem className="menuItems" button> <Link to ="/"> <img src = {Logo} alt="Logo" className= "Logo" /> </Link> </ListItem>
                            <Divider />
                            <ListItem className="menuItems" button> <Link  to="/exercises"> View Exercises </Link>   </ListItem>

                        </List>                            
                    </div>
                </Drawer>
                        </Grid>
                        <Grid item xs>
                        <Link  className="logogrid" to="/"> <img src = {Logo} alt="Logo" className= "Logo" /> </Link>
                        </Grid>
                        <Grid item xs={3} className= "navGrid" >
                        <Link  className="login" to="/login"> Login </Link>
                                    <Link className="signup" to="/signup"> Sign up </Link>
                        </Grid>
                      </Grid> }


                    </Toolbar>
                </AppBar>
             
               

        </div>
    )
}
 }

}    