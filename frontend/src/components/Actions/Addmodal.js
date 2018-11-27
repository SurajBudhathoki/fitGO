import React, { Component } from 'react';
import {Modal, Button, Typography, Select, Dialog} from '@material-ui/core';
import axios from 'axios';



  

export default class Addmodal extends Component {

    state = {
        open: false,
        reps:'',
        sets:'',
        exercises:'',
        exerciseList: [],
        day: '', 

      };
    
      componentDidMount() {
        this.getExercises();
    }

    handleChange =  (event) => {

        
        this.setState({
            [event.target.name]: event.target.value
        });

        
    }
      handleOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };

      addDay = (event) => {
        event.preventDefault();

        axios.post('/api/days', {
            exercises: this.state.exercises,
            sets: this.state.sets,
            reps: this.state.reps,
            day: this.state.day
        }).then(response => {
            console.log(response);
        }).catch(err => {
            console.log(err);
        });

        this.handleClose();

     
    }

    getExercises = () => {
        axios.get('/api/exercises')
        .then((result)=>{
            this.setState({exerciseList : result.data});
            console.log(result.data);
        })
    }

    render() {
      
        return(
            <div>
                 
                    <Button onClick={this.handleOpen} variant="contained"> Add  an exercise</Button>
                    <Modal 
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                    open={this.state.open}
                    onClose={this.handleClose}
                    >
                    <div className= "modal" >
                        <Typography variant="display2" id="modal-title">
                       Add
                        </Typography>
                        
                                Day <input name="day" value={this.state.day} onChange={this.handleChange}/>
                              <Select native name="exercises"  onChange= {this.handleChange} value={this.state.exercise} >
                               
                               {this.state.exerciseList.map((exercises, index)=>(
                                       
                                       <option key = {index} > 
                                     
                                           {exercises.exerciseName}

                                         
                                       </option>
                                       
                                   ) )}
                               </Select> <br/>
                            <input name = "sets" value={this.state.sets} onChange= {this.handleChange} />
                            <input name = "reps" value={this.state.reps} onChange= {this.handleChange} />
                            <button onClick={this.addDay} >  Add to program</button>
                       
                      
                    </div>
                    </Modal>
            </div>
        )
    }
}