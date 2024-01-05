
//if you want write js inside your JSx => use {}
import { useState } from "react";
import InputContainer from "./Components/InputContainer";

// import Counter from "./Components/Counter";

import TaskContainer from "./Components/TaskContainer";
function App(){

  const [input ,setInput] = useState("");
  
  let styleObj = {width:"400px",height:"500px",backgroundColor:"black"}
  return(
    <div style={styleObj}>
      {/* <Counter/> */}
      <InputContainer setInput={setInput}/>
      <TaskContainer task={input}/>
    </div>
  )
}

export default App;
