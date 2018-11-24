import React from 'react';
import {Paper,  List, ListItem} from '@material-ui/core';
import { Link } from 'react-router-dom';

const Sidenav = (props) => (
    <div>
         <Paper className= "paper">
                        <List>
                            <ListItem className="menuItems" button> <Link  to="/exercises">Exercises </Link>   </ListItem>
                            <ListItem className="menuItems" button>About</ListItem>
                            <ListItem className="menuItems" button>BMI</ListItem>
                        </List>
                    </Paper>
   

    </div>
    
  )

export default Sidenav;