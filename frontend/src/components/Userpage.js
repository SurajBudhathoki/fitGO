import React from 'react';
import {Grid,Paper,  GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Create from '../images/createprogram.jpg';
import View from '../images/viewprograms.jpg';
import { Link } from 'react-router-dom';




const Userpage = (props) => {
    return(
        <div>
            <Grid container spacing={16}>
        <Grid item xs>
        {props.username}
        </Grid>
        <Grid item xs={8}>
        {/* <Paper className="paper"> */}
               
        <br/>
              {/* <GridList  cellHeight={300} cols={1} spacing={16} >          
               <GridListTile > <Link to ="/create">  <img src = {Create} className="homeImg" alt="createProgram" /> <GridListTileBar 
              title= "Create a Program" />  </Link>
             <Link to ="/create">   </Link>
              </GridListTile> 
              <GridListTile > <Link to ="/view">  <img src = {View}  className="homeImg" alt="viewProgram" />  <GridListTileBar
              title= "View Programs" className="girdlist"/> </Link>
              <Link to ="/view"> 
              </Link> 
              </GridListTile>
              </GridList> */}
                <Grid spacing={16} >
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

          {/* </Paper> */}
        </Grid>
        <Grid item xs>
          
        </Grid>
      </Grid>
                  
            
           
        </div>
    )
}

export default Userpage;
