import React from 'react';
import {Grid,Paper,  GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Create from '../images/createprogram.jpg';
import View from '../images/viewprograms.jpg';
import { Link } from 'react-router-dom';
import Logo from '../components/Navigation/logo.PNG';
import Image from '../images/gridArms.jpg'


const Homepage = (props) => {
    return(
        <div>
            <Grid container spacing={16}>
        <Grid item xs>
          
        </Grid>
        <Grid item xs={7}>
        <Paper className="paper">
              
    
<img src = {Image} alt="main" />

<h2> Start your fitneess journey</h2>
          </Paper>
        </Grid>
        <Grid item xs>
          
          </Grid>
      </Grid>
                  
           
        </div>
    )
}

export default Homepage;