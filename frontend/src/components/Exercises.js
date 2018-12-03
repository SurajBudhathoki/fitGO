import React, {Component} from 'react';
import axios from 'axios';
import {Grid,Paper, Tabs, Tab, AppBar } from '@material-ui/core';

import Chest from './Exercises/Chest';
import Back from './Exercises/Back';
import Legs from './Exercises/Legs';
import Arms from './Exercises/Arms';
import Shoulders from './Exercises/Shoulders';




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

 

                     <Grid container spacing={16}>
                            <Grid item xs>
                            
                            </Grid>
                            <Grid item xs={9}>
                            <Paper className="paper">
                                
                            <AppBar position="static" color="default">
                                <Tabs style={{ color: 'blue' }} 
                                     value={this.state.value}
                                    onChange={this.handleChange}
                                    fullWidth
                                >
                                    <Tab className="tab" selected={true} label="Chest" />
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
                            <Grid item xs>
                            
                            </Grid>
                        </Grid>


                        <Paper className= "paper">


                            


                        </Paper>
      
                  
           
            </div>
        )
    }


}    