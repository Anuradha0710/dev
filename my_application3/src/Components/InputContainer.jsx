import React from 'react'

function InputContainer({setInput}){
  let input ="";

  function addHandler(){
    setInput(input)
  }
  return (
    <div style={{display:"flex",justifyContent:"center",paddingTop:"50px"}}>
      <input onChange={  function inputHandler(event){
          input= event.target.value;
          console.log(input);
       }} type="text" style={{padding:"20px 30px"}} />
      <button style={{padding:"20px 30px"}} onClick={addHandler}>Add</button>
    </div>
  )
}

export default InputContainer
