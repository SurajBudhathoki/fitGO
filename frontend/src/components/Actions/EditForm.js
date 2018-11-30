import React from 'react';

const EditForm = props => (
  <div>
    <h1>Edit </h1>
 
      <input value={props.val} onChange={props.changeHandler} />
      <button onClick={props.clickHandler}>Submit</button>
   
  </div>
)

export default EditForm;