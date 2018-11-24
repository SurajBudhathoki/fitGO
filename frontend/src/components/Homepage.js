import React from 'react';
import {Grid,Paper,  GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import Create from '../images/createprogram.jpg';
import View from '../images/viewprograms.jpg';
import { Link } from 'react-router-dom';
import Sidenav from './Navigation/Sidenav';



const Homepage = (props) => {
    return(
        <div>
            <Grid container spacing={24}>
                <Grid item xs={3}>
                    <Sidenav/>
                </Grid>
                <Grid item xs={9}>
                    <Paper className="paper">
              
                        <GridList  cellHeight={300}>          
                         <GridListTile  cols={2}> <Link to ="/create">  <img src = {Create} className="homeImg" alt="createProgram" /> </Link>
                       <Link to ="/create">  <GridListTileBar 
                        title= "Create a Program" /> </Link>
                        </GridListTile> 
                        <GridListTile  cols={2}> <Link to ="/view">  <img src = {View}  className="homeImg" alt="viewProgram" /> </Link>
                        <Link to ="/view"> 
                        <GridListTileBar
                        title= "View Programs"/> </Link> 
                        </GridListTile>
                        </GridList>

                    </Paper>
                </Grid>

            </Grid>
        </div>
    )
}

export default Homepage;