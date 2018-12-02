import React from 'react';

const Delete = props => (
  <div key={props.id} className="Delete">

    <button value={props.id} onClick={props.onDelete}>Delete</button>

  </div>
)

export default Delete;