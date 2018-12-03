import React from 'react';
import {Grid,Paper,  GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Create from '../images/createprogram.jpg';
import View from '../images/viewprograms.jpg';
import { Link } from 'react-router-dom';
import Logo from '../components/Navigation/logo.PNG';



const Homepage = (props) => {
    return(
        <div>
            <Grid container spacing={16}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={9}>
        <Paper className="paper">
              
              hello

<img src = {Logo} alt="Logo" />
          </Paper>
        </Grid>
        <Grid item xs>
          
          </Grid>
      </Grid>
                  
           
        </div>
    )
}

export default Homepage;