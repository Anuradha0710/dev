import { useEffect, useState } from "react";
import Todo from "./components/Todo";

function App() {
  // let arr =["task 1","task 2","task 3"]

let temparr=[]

useEffect(()=>{
  fetch('https://dummyjson.com/todos')
  .then(async(res)=>{
  let temp=await  res.json();
  setArr(temp.todos)
  console.log(arr);
  })
  .catch(err=>{
  // console.log(err);
  })
},[])



  const [arr , setArr] = useState(["task 1"])
  return (
    <div style={{border:"5px solid red",width:"500px",height:"400px",
    backgroundColor:"pink",display:"flex",justifyContent:"center",alignItems:"center"}}>
      <Todo task={arr} setArr={setArr}/>
    </div>
  );
}

export default App;
