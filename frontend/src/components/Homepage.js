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
        <Grid item xs={8}>
        <Paper className="mainPaper">
              
            <div className="imageContainer">

            {/* <Link to = '/login' className= "started" >
                Get Started
             </Link> */}
            {/* <img src = {Image} alt="main" className= "mainImage" /> */}
               <button className= "button started" >  Get Started </button>
            </div>


<h1> Start your fitness journey</h1>
          </Paper>
        </Grid>
        <Grid item xs>
          
          </Grid>
      </Grid>
                  
           
        </div>
    )
}

export default Homepage;