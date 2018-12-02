import React, {Component} from 'react';
import axios from 'axios';
import {Grid,Paper, GridList, GridListTile, GridListTileBar, Tabs, Tab, AppBar } from '@material-ui/core';

import Chest from './Chest';
import Back from './Exercises/Back';
import Legs from './Exercises/Legs';
import Arms from './Exercises/Arms';
import Shoulders from './Exercises/Shoulders';
import Sidenav from './Navigation/Sidenav';



export default class Exercises extends Component {

    state = {
       
        backList: [],
        chestList: [],
        legsList: [],
        armsList: [],
        shouldersList: [],
        value: 0,
    }

    
    componentDidMount() {

        this.getChestExercises();
        this.getBackExercises();
        this.getArmsExercises();
        this.getLegsExercises();
        this.getShouldersExercises();
    }

    // displaying chest workouts
    getChestExercises = () => {
        axios.get('/exercises/chest')
        .then((result) => {
            this.setState({chestList: result.data});
        })

    }

    //displaying back workouts
    getBackExercises = () => {
        axios.get('/exercises/back')
        .then((result) => {

            this.setState({backList: result.data});
        })
    }

    //displaying legs workouts
    getLegsExercises = () => {
        axios.get('/exercises/legs')
        .then((result) => {

            this.setState({legsList: result.data});
        })
    }

    //displaying arms workouts
    getArmsExercises = () => {
        axios.get('/exercises/arms')
        .then((result) => {

            this.setState({armsList: result.data});
        })
    }

    //displaying shoulders workouts
    getShouldersExercises = () => {
        axios.get('/exercises/shoulders')
        .then((result) => {

            this.setState({shouldersList: result.data});
        })
    }

    handleChange = (event, value) => {
        this.setState({ value });
      };

    render() {    
        return (
            <div>

                <Grid container spacing={24}>
                    <Grid item lg={3}>
                        
                        <Sidenav />
                        
                    </Grid>
                    <Grid item lg={9} className="exerciseGrid">    
                        <Paper className= "paper">


                              <AppBar position="static" color="default">
                                <Tabs
                                     value={this.state.value}
                                    onChange={this.handleChange}
                                    fullWidth
                                >
                                    <Tab label="Chest" />
                                    <Tab label="Back" />
                                    <Tab label="Legs" />
                                    <Tab label="Arms" />
                                    <Tab label="Shoulders" />
                            
                                </Tabs>
                                </AppBar>
                                {this.state.value === 0 && <Chest  displayChest={this.state.chestList} />}
                                {this.state.value === 1 && <Back displayBack={this.state.backList} />}
                                {this.state.value === 2 && <Legs displayLegs={this.state.legsList} />}
                                {this.state.value === 3 && <Arms displayArms={this.state.armsList }/> }
                                {this.state.value === 4 && <Shoulders displayShoulders={this.state.shouldersList} /> }
                                <br></br>


                        </Paper>
                    </Grid>
                </Grid>    
                  
           
            </div>
        )
    }


}    