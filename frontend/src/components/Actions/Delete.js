import React from 'react';

const Delete = props => (
  <div key={props.id} className="Delete">

    <button className="button deleteButton"  value={props.id} onClick={props.onDelete}> 
    Delete
    {/* <i className="material-icons">
delete
</i>  */}
</button>

  </div>
)

export default Delete;