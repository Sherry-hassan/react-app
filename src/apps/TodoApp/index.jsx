import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../TodoApp/todo.css";
import { MdDeleteForever } from "react-icons/md";

const TodoApp = () => {
  const [isInputValue, setInputValue] = useState("");
  const [isTask, setTask] = useState([]);

  // Load tasks from localStorage on component mount
  useEffect(() => {
    const rawTodos = JSON.parse(localStorage.getItem("reactTodo")) || [];
    setTask(rawTodos);
  }, []);

  const handleInputChange = (value) => {
    setInputValue(value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    if (!isInputValue.trim()) return; // Prevent empty task submission

    const updatedTasks = [...isTask, isInputValue];
    localStorage.setItem("reactTodo", JSON.stringify(updatedTasks));
    setTask(updatedTasks);
    setInputValue(""); // Clear input field
  };

  const handleDeleteTask = (taskToDelete) => {
    const updatedTasks = isTask.filter((task) => task !== taskToDelete);
    localStorage.setItem("reactTodo", JSON.stringify(updatedTasks));
    setTask(updatedTasks);
  };

  const handleClearAll = () => {
    localStorage.removeItem("reactTodo");
    setTask([]);
  };

  return (
    <Container
      className="w-100 d-flex align-items-center todo-container d-flex flex-column align-items-center min-vh-100 pt-3 text-white overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(100deg, #001214, #001f29)",
        transition: "0.3s linear",
      }}
    >
      <header className="mx-3 min-vh-10 w-100 d-flex flex-column align-items-center justify-content-around fs-1 ">
        <h1 className="text-white text-center fs-1">Todo App</h1>
      </header>
      <section className="form mx-3 min-vh-10 w-100 ">
        <form
          className="d-flex justify-content-center my-3 w-100 fs-5 p-2"
          onSubmit={handleFormSubmit}
        >
          <div>
            <input
              type="text"
              autoComplete="off"
              value={isInputValue}
              onChange={(event) => handleInputChange(event.target.value)}
              className="todo-input"
              placeholder="Enter a task"
            />
          </div>
          <div>
            <button type="submit" className="todo-btn">
              Add Task
            </button>
          </div>
        </form>
      </section>
      <section className="myUnOrdList">
        <ul>
          {isTask.map((curTask, index) => {
            return (
              <li key={index} className="todo-item d-flex align-items-center">
                <span>{curTask}</span>
                <button
                  className="delete-btn"
                  onClick={() => handleDeleteTask(curTask)}
                >
                  <MdDeleteForever />
                </button>
              </li>
            );
          })}
        </ul>
      </section>
      <button className="clear-btn" onClick={handleClearAll}>
        Clear All
      </button>
    </Container>
  );
};

export default TodoApp;
