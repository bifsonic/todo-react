import "./styles.css";
import Sidebar from "./Sidebar";
import TaskForm from "./TaskForm";
import Task from "./Task";
import { useState } from "react";

function Example(props) {
  console.log(props);
  return (
    <input
      defaultValue={props.defaultValue}
      onChange={(event) => props.onChange(event)}
    />
  );
}

export default function App() {
  const [value, setValue] = useState("");
  const [tasks, setTasks] = useState([
    "My First Task !!!!!",
    "My Second Task!!"
  ]);

  const changeSearch = (event) => {
    console.log(event);
    setValue(event.target.value);
  };

  const createTask = () => {
    setTasks([...tasks, value]);
  };

  return (
    <div className="container">
      <Sidebar />
      <div className="tasks">
        <Example
          defaultValue={value}
          onChange={(event) => changeSearch(event)}
        />
        <div>{value}</div>
        <TaskForm onSubmit={createTask} />
        {tasks.map((task) => (
          <Task text={task} />
        ))}
      </div>
    </div>
  );
}
