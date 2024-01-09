import React from 'react'

function Todo(props) {

   let inputval ="";
  return (
    <div style={{border:"5px solid blue",backgroundColor:"gray",width:"300px"
    ,height:"300px"}}>
      <input onChange={function(event){
        inputval =event.target.value
      }}/>
      <button onClick={function(event){
        props.setArr([...props.task,inputval])
      }}>Add</button>

      <div>
        {props.task.map(function(ele){
            return <p style={{marginLeft:"20px",color:"black",fontWeight:"900",fontSize:"25px"}}>
                {ele.id}
                {ele.todo}
                </p>
        })}
      </div>
    </div>
  )
}

export default Todo
