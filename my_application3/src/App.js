
//if you want write js inside your JSx => use {}
import InputContainer from "./Components/InputContainer";
import TaskContainer from "./Components/TaskContainer";
function App(){
  let styleObj = {width:"400px",height:"500px",backgroundColor:"black"}
  return(
    <div style={styleObj}>
      <InputContainer/>
      <TaskContainer/>
    </div>
  )
}

export default App;
