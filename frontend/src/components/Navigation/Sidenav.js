import React, { Component } from 'react';
import {Paper,  List, ListItem, Drawer, Divider, Button, IconButton} from '@material-ui/core';
import SvgIcon from '@material-ui/core/SvgIcon';
import { Link } from 'react-router-dom';

export default class Sidenav extends Component {
    
    state = {
        left : false
    }

    toggleDrawer = (side, open) => () => {
        this.setState({
          [side]: open,
        });
      };

    render() {
    return (
    <div>
        {/* <IconButton onClick={this.toggleDrawer('left', true)}> 
        <i class="material-icons">menu</i>  </IconButton>

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
       </Drawer> */}


    </div>
    
    )
 
  }

}