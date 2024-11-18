import React, { useState } from "react";
import {Container} from "react-bootstrap"
 import '../TodoApp/todo.css';
import { MdDeleteForever } from "react-icons/md";

const TodoApp = () => {
  const [inputValue, setInputValue] = useState("")
  const [task, setTask] = useState(()=>{
    const rawTodos = localStorage.getItem("reactTodo")
    if(!rawTodos) return []
    return JSON.parse(rawTodos)
  })


  const handleInputChange = (value) => {
    setInputValue(value)
  }
  const handleFormSubmit = (event) => {
    event.preventDefault()

    if (!inputValue) return

    if (task.includes(inputValue)) {
      setInputValue("")
      return
    }
    localStorage.setItem("reactTodo",JSON.stringify(task))

    setTask((prevTask) => [...prevTask, inputValue])
    setInputValue("")
  }
  const handleDeleteTodo = (value) => {
    const updatedTask = task.filter((curTask) => curTask !== value)
    setTask(updatedTask)
  }
  const handleTodoData = () => {
    setTask([])
  }
  return (
    <Container
      className="w-100 d-flex align-items-center todo-container d-flex flex-column align-items-center min-vh-100 pt-3 text-white overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(100deg, #001214, #001f29)",
        transition: "0.3s linear",
      }}
    >      <header className="mx-3 min-vh-10 w-100 d-flex flex-column align-items-center justify-content-around fs-1 ">
        <h1 className="text-white text-center fs-1">Todo App</h1>
      </header>
      <section className="form mx-3 min-vh-10 w-100 ">
        <form className="d-flex justify-content-center my-3 w-100 fs-5 p-2" onSubmit={handleFormSubmit}>
          <div>
            <input type="text" 
             autoComplete="off" value={inputValue} onChange={(event) => handleInputChange(event.target.value)} />
          </div>
          <div>
            <button type="submit" className="todo-btn">Add Task</button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {
            task.map((curTask, index) => {
              return <li key={index} className="todo-item">
                <span>{curTask}</span>
                <button className="delete-btn" onClick={() => handleDeleteTodo(curTask)}>
                  <MdDeleteForever />
                </button>
              </li>
            })
          }
        </ul>
      </section>

      <button className="clear-btn" onClick={handleTodoData}>Clear All</button>



    </Container>
  );
};

export default TodoApp;



