import React from 'react';
import {Grid,Paper,  } from '@material-ui/core';



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