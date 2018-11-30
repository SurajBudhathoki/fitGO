import React, { Component } from 'react';
import { Button, Modal, DialogTitle, Dialog, DialogActions } from '@material-ui/core';
import axios from 'axios';

export default class Delete extends Component {

  state = {
    open: false,
  }

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  deleteProgram = (event) => {

    console.log(event.target.value)
    // event.preventDefault();

       axios.delete(`/api/programs/${event.target.value}`)
       .then(() => {
          

          // this.getPrograms();

           console.log('deleted');

       } )

        this.setState({ open: false });
}


render() {
  return(
    <div key={this.props.id} >
    
    <h2> {this.props.programName} </h2>  
      
      <button color="secondary" variant="contained" value={this.props.id} onClick={this.handleClickOpen}>Delete</button>
      <button color="secondary" variant="contained" value={this.props.id} onClick={this.props.onUpdate}>Edit</button>


        <Modal open={this.state.open} onClose={this.handleClose}  >

          <div className="modal">
          <h3 > Are you sure? </h3>

      
              <Button onClick={this.deleteProgram}> yes </Button>
              <Button onClick={this.handleClose}> no </Button>

          </div>
          </Modal>

    </div>
    )
  }
}
  

