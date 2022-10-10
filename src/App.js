import { useState } from "react";

function App() {
  const [todoList,setTodoList] = useState([]);
  const [inputValue,setInputValue] = useState("");

  const handleEnter = (e) => {
      if (e.key==="Enter"){
        handleAdd();
      }
  }
  
  const handleChange = (e) => {
    setInputValue(e.target.value);
  }
  const handleAdd = () => {
    if (inputValue==="") {
      alert("Xin hãy nhập lại!");
    }else{
      setTodoList([...todoList,inputValue]);
      setInputValue("");
    }
  }

  const handleDelete = (e) => {
    setTodoList(todoList.filter((value,index)=>index!==e)); 
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-[#ffc482] to-[#ff8e35]">
        <div className="bg-white w-full  rounded-lg p-4 max-w-2xl drop-shadow-xl min-h-[32rem] flex flex-col">
          <h1 className="text-4xl font-semibold text-[#333] text-center mb-4">
            Todo App
          </h1>
          <input
            type="text"
            className="border-[1px] border-[#666] rounded-lg w-full h-12 py-2 px-4 text-lg mb-4 outline-[#ff8e35]"
            placeholder="Task name"
            onChange={(e) => handleChange(e)}
            value = {inputValue} 
            onKeyDown={(e) => handleEnter(e)}
          ></input>
          <button
            className="text-lg p-2 w-full bg-orange-400 rounded-lg text-white font-semibold"
            onClick={()=> handleAdd()}
          >
            Add task
          </button>
          <div className="flex flex-col flex-1 justify-start mt-4 gap-4">
            
              {todoList.map((task,index) => (
                <div className="flex flex-row items-center gap-4" key={index}>
                <div className="text-lg py-2 px-4 bg-orange-400 text-white rounded-lg" >
                  {index+1}
                </div>
                <p className="text-lg flex-1">{task}</p>
                <button
                  className="text-lg text-[#da1414]"
                  onClick={()=>handleDelete(index)}
                >
                  DELETE
                </button>
              </div>
              ))
              }
            
          </div>
          <p className="text-end text-lg">You have {todoList.length} {(todoList.length>1)? "tasks" : "task"}</p>
        </div>
      </div>
    </>
  );
}

export default App;
