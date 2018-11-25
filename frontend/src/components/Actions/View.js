import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {Grid,Paper, GridList, GridListTile, GridListTileBar } from '@material-ui/core';
import axios from 'axios';
import Sidenav from '../Navigation/Sidenav';


export default class View extends Component {

    state = {
        programList: []
    }

    componentDidMount() {
        this.getPrograms();
    }

    getPrograms = () => {
        axios.get('/api/programs')
        .then((result) => {
            console.log(result.data);
            this.setState({programList: result.data});       
        })    
    }

    render() {
        return(
            <div>
                <Grid container spacing={24}>
                    <Grid item xs={3}>
                        
                        <Sidenav />
                        
                    </Grid>
                    <Grid item xs={9}> 
                        <Paper className="paper" >
                            <h1> Available Programs</h1>
                           

                        </Paper>
                    </Grid>
                 </Grid>   
            </div>
        )
    }

}   