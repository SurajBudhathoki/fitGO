import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar,  Grid} from '@material-ui/core/';
import { List, ListItem, Drawer, IconButton} from '@material-ui/core';
import axios from 'axios';



export default class Navbar extends Component {
    constructor() {
        super()
        this.state ={
            left: false
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
                                    <Grid item md = {9}>
                                {/* <Link className="logo" to="/"> Logo </Link> */}
                                <IconButton onClick={this.toggleDrawer('left', true)}> 
                    <i className="material-icons" id="menu" >menu</i>  </IconButton>
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >                   
                        <List>
                            <ListItem className="menuItems" button> <Link  to="/exercises"> View Exercises </Link>   </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/create">Create Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">View Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">Edit Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">Delete Program </Link> </ListItem>
                        </List>                            
                    </div>
                </Drawer>
                                </Grid> 
                                <Grid item md= {3}>
                                 {this.props.username} 
                            <Link to="#" className="logout" onClick={this.logout}>Logout</Link>
                            </Grid>
                            </Grid>
                            </Toolbar>
                        ) : (
                                <Toolbar  >
                                    <Grid justify="space-between" container spacing={16}>
                                    <Grid item md = {10}>
                                    
                                    {/* <Typography variant="h6" color="inherit"> */}
                                    {/* <Link  className="logo" to="/"> Logo </Link> */}
                                    <IconButton onClick={this.toggleDrawer('left', true)}> 
                    <i className="material-icons" id="menu">menu</i>  </IconButton> 
                    <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
                    <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('left', false)}
                        onKeyDown={this.toggleDrawer('left', false)}
                    >                   
                        <List>
                            <ListItem className="menuItems" button> <Link  to="/exercises"> View Exercises </Link>   </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/create">Create Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">View Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">Edit Program </Link> </ListItem>
                            <ListItem className="menuItems" button> <Link  to="/view">Delete Program </Link> </ListItem>
                        </List>                            
                    </div>
                </Drawer> 
                                    {/* </Typography> */}
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