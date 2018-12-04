import React, {Component} from 'react';
import {Grid,  } from '@material-ui/core';
import {Redirect} from 'react-router-dom';
import GridCreate from '../images/gridChest.jpg';
import GridPrograms from '../images/gridBack.jpg';
import GridExercises from '../images/gridLegs.jpg'

export default class Homepage extends Component {
    state = {
        test: 'test',
        redirectTo: null
    }

    handleStarted = (event) => {

        event.preventDefault();

        this.setState({
            redirectTo: '/signup'
        });
    }

    render() {
        if (this.state.redirectTo) {
            return <Redirect to={{ pathname: this.state.redirectTo }} />
        } else {
            return ( 
            <div>
                <Grid container spacing={16}>
                    <Grid item xs>
                    </Grid>
                    <Grid item xs={8}>             
                        <div className="imageContainer">
                            <button className= "button started" onClick={this.handleStarted} >  Get Started </button>
                        </div>

                        <h1 className ="journey"> Start your fitness journey!</h1> 
                        <Grid container spacing={16}>
                        <Grid item xs>
                            <img src = {GridCreate} alt="gridCreate"  className="gridImages" />
                        
                            <h3> Create Programs </h3> 
                        </Grid>
                        <Grid item xs>
                            <img src = {GridPrograms} alt="gridProGridPrograms" className="gridImages"  />
                            <h3>  Customize Programs</h3>                  
                        </Grid>
                        <Grid item xs>
                            <img src = {GridExercises} alt="gridExGridExercises" className="gridImages"  />
                            <h3>  View Exercises </h3>  
                        </Grid>
                        </Grid> 
                    </Grid>
                    <Grid item xs>
                    </Grid>
                </Grid>
  
            </div>
            )
        }
    }
}   

