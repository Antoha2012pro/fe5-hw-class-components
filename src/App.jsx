import React, { Component } from "react";
import "./App.css";
import TaskList from "./components/TaskList";

const initialTasks = [
  {
    id: "1",
    text: "qwe",
  },
  {
    id: "2",
    text: "asd",
  },
  {
    id: "3",
    text: "zxc",
  },
];

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: initialTasks,
    };
  }

  deleteTask = (idToDelete) => {
    this.setState({
      tasks: this.state.tasks.filter((task) => task.id !== idToDelete),
    });
  };

  addTask = (text) => {
    const newTask = {
      id: Date.now().toString(),
      text: text,
    };
    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  render() {
    const { tasks } = this.state;

    return (
      <div className="my-0 mx-auto py-0 px-4 md:w-[768px] space-y-5">
        <h2 className="text-center font-extrabold text-3xl mt-4">Список завдань</h2>
        <TaskList
          tasks={tasks}
          onDelete={this.deleteTask}
          onAdd={this.addTask}
        />
      </div>
    );
  }
}
