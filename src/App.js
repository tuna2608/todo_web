import { useState, useEffect } from 'react'
import Task from './Task.js'
import Input from './Input.js'

function App() {
  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem('todoList')) ?? [],
  )
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    localStorage.setItem('todoList', JSON.stringify(todoList))
  }, [todoList])

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      handleAdd()
    }
  }

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  // localStorage.setItem('todoList',todoList);
  const handleAdd = () => {
    if (inputValue === '') {
      alert('Xin hãy nhập lại!')
    } else {
      setTodoList([...todoList, inputValue])
      setInputValue('')
    }
  }

  const handleDelete = (e) => {
    setTodoList(todoList.filter((value, index) => index !== e))
  }
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center bg-gradient-to-r from-[#ffc482] to-[#ff8e35]">
        <div className="bg-white w-full  rounded-lg p-4 max-w-2xl drop-shadow-xl min-h-[32rem] flex flex-col">
          <h1 className="text-4xl font-semibold text-[#333] text-center mb-4">
            Todo App
          </h1>
          <Input
            funcChange={(e) => handleChange(e)}
            funcEnter={(e) => handleEnter(e)}
            info={inputValue}
          ></Input>
          <button
            className="text-lg p-2 w-full bg-orange-400 rounded-lg text-white font-semibold"
            onClick={() => handleAdd()}
          >
            Add task
          </button>
          <div className="flex flex-col flex-1 justify-start mt-4 gap-4">
            {todoList.map((task, index) => (
              <Task
                info={task}
                index={index}
                functionDelete={() => handleDelete(index)}
              ></Task>
            ))}
          </div>
          <p className="text-end text-lg">
            You have {todoList.length} {todoList.length > 1 ? 'tasks' : 'task'}
          </p>
        </div>
      </div>
    </>
  )
}

export default App
