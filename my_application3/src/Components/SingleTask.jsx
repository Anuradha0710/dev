import React from 'react'

const SingleTask = ({task, taskno}) => {
    //destrucruring
    // let task = props.task;
  return (
    <div style={{margin:"10px",textAlign:"center",border:"5px solid pink", color:"white",fontSize:"24px"}}>
      {taskno}
      {task}
      <button>Delete</button>
    </div>
  )
}

export default SingleTask
