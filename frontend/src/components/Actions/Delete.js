// import React, { Component } from 'react';
// import { Button, Modal, DialogTitle, Dialog, DialogActions } from '@material-ui/core';
// import axios from 'axios';

// export default class Delete extends Component {

//   state = {
//     open: false,
//     deleteID: ''
//   }

//   handleClickOpen = () => {
//     this.setState({ open: true });
//   };

//   handleClose = () => {
//     this.setState({ open: false });
//   };


  
//   deleteProgram = (event) => {

//     console.log(event.target.value)

//     this.setState({ deleteID: event.target.value});

//     // event.preventDefault();
//     //this.setState({ open: false });

//        axios.delete(`/api/programs/${this.state.deleteID}`)
//        .then(() => {
          

//            this.props.getPrograms();

//            console.log('deleted');

//        } )

        
// }


// render() {
//   return(
//     <div key={this.props.id} >
    

      
//       <button color="secondary" variant="contained" value={this.props.id} onClick={this.handleClickOpen}>Delete</button>



//         <Modal open={this.state.open} onClose={this.handleClose}  >

//           <div className="modal">
//           <h3 > Are you sure? </h3>

      
//               <button onClick={this.deleteProgram}> yes </button>
//               <Button onClick={this.handleClose}> no </Button>

//           </div>
//           </Modal>

//     </div>
//     )
//   }
// }
  

import React from 'react';

const Delete = props => (
  <div key={props.id} className="Delete">

    <button value={props.id} onClick={props.onDelete}>Delete</button>

  </div>
)

export default Delete;