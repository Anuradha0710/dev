import React from 'react'
import SingleTask from './SingleTask'


const TaskContainer = () => {
  return (
    <div style={{ border:"5px solid blue",marginTop:"50px"}}>
      <SingleTask task={"task 1"} taskno={1}/>
      <SingleTask task={"read some books"} taskno={2} />
      <SingleTask task={"do some exercise"} taskno={3}/>
      <SingleTask task={"go for a walk"} taskno={4}/>
    </div>
  )
}

export default TaskContainer
