import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

import "./App.css";
import styled from "styled-components";

function App() {
  // Tasks (ToDo List) State
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: false },
    { id: 2, title: "Task 2", status: false },
  ]);

  // Temp State
  const [newTask, setNewTask] = useState("");
  const [updateData, setUpdateData] = useState("");

  // Add task
  /////////////////////
  const addTask = () => {
    //
  };

  // Delete task
  /////////////////////
  const deleteTask = (id) => {
    //
  };

  // Mark task as done or completed
  /////////////////////
  const markDone = (id) => {
    //
  };

  // Cancel update
  /////////////////////
  const cancelUpdate = () => {
    //
  };

  // Change task
  /////////////////////
  const changeTask = (e) => {
    //
  };

  // Update task
  /////////////////////
  const updateTask = (e) => {
    //
  };

  const StyledTask = styled.div`
    text-decoration: line-through;
    opacity: 0.3;
  `;

  return (
    <div className="container App">
      <br />
      <br />
      <h2>To Do List App (ReactJS)</h2>
      <br />
      <br />
      {/* Display To-Dos */}

      {toDo.length ? "" : "No task saved..."}

      {toDo.map((task, index) => {
        return (
          <React.Fragment key={task.id}>
            <div className="col taskBg">
              <StyledTask className={task.status ? "done" : ""}>
                <span className="taskText">{index + 1}</span>
                <span className="taskText">{task.title}</span>
              </StyledTask>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default App;
