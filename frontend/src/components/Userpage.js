import React from 'react';
import {Grid, } from '@material-ui/core';
import Create from '../images/createprogram.jpg';
import View from '../images/viewprograms.jpg';
import { Link } from 'react-router-dom';




const Userpage = (props) => {
    return(
        <div>
            <Grid container spacing={16}>
        <Grid item xs>
        
        </Grid>
        <Grid item xs={8}> 
        <br/>
                <Grid >
            <Grid item xs>
            <Link to ="/create" className="userLinks">
            <img src = {Create} className="homeImg" alt="createProgram" />
            <h3 className="prog"> Create a Program</h3>
            </Link>
            </Grid>
            <Grid item xs>
            <Link to ="/view" className="userLinks">
            <img src = {View}  className="homeImg" alt="viewProgram" />
            
            <h3 className="prog"> View Programs </h3>
            </Link>
            </Grid>
           
          
          </Grid>    

          
        </Grid>
        <Grid item xs>
          
        </Grid>
      </Grid>
                  
            
           
        </div>
    )
}

export default Userpage;
