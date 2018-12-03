import React from 'react';

const Edit = props => (
  <div key={props.id} className="Edit">

    <button className= "button submitButton" value={props.id} onClick={props.onUpdate}> 
    Edit
    {/* <i className="material-icons edit">
edit
</i> */}
 </button>

  </div>
)

export default Edit;
