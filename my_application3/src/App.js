
//if you want write js inside your JSx => use {}
import InputContainer from "./Components/InputContainer";

// import Counter from "./Components/Counter";

import TaskContainer from "./Components/TaskContainer";
function App(){
  let styleObj = {width:"400px",height:"500px",backgroundColor:"black"}
  return(
    <div style={styleObj}>
      {/* <Counter/> */}
      <InputContainer/>
      <TaskContainer/>
    </div>
  )
}

export default App;
