import React from 'react'
import SingleTask from './SingleTask'

let arr =["go to gym","read some books","do some exercise","go for a walk"]
const TaskContainer = () => {
  return (
    <div style={{ border:"5px solid blue",marginTop:"50px"}}>
      {arr.map(function(ele,index){
        return <SingleTask task={ele} taskno={index+1}/>
      })}
      {/* <SingleTask task={"go to gym"} taskno={1}/>
      <SingleTask task={"read some books"} taskno={2} />
      <SingleTask task={"do some exercise"} taskno={3}/>
      <SingleTask task={"go for a walk"} taskno={4}/> */}
    </div>
  )
}

export default TaskContainer
