import React, { Component } from "react";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newTaskValue: "",
      isNewTaskHidden: true,
    };
  }

  render() {
    const { tasks, onDelete, onAdd } = this.props;
    const { newTaskValue, isNewTaskHidden } = this.state;
    return (
      <div className="flex flex-col md:flex-row justify-between gap-10 md:gap-0">
        <div className="flex flex-col w-full max-w-70 items-start">
          <label className="font-mono text-1xl">Нова Задача</label>
          <input
            className="mb-3 border border-blue-200 py-1 px-2 rounded-xl focus:outline-none w-full"
            type="text"
            placeholder="Помити посуд..."
            value={newTaskValue}
            onChange={(event) => {
              const value = event.target.value;
              this.setState({
                newTaskValue: value,
                isNewTaskHidden: value.trim().length === 0,
              });
            }}
          />

          {isNewTaskHidden ? (
            <p className="bg-gray-600 text-white py-1 px-2 rounded-xl cursor-not-allowed">
              Напиши свою першу задачу!
            </p>
          ) : (
            <button
              className="bg-blue-500 border-none text-black rounded-2xl py-2 px-4 focus:outline-none hover:opacity-80 transition-all hover:cursor-pointer"
              onClick={(event) => {
                event.preventDefault();
                onAdd(newTaskValue);
                this.setState({ newTaskValue: "", isNewTaskHidden: true });
              }}
            >
              Додати задачу
            </button>
          )}
        </div>

        <ul className="w-full max-w-80 flex flex-wrap gap-6 items-start content-start">
          {tasks.map(({ id, text }) => (
            <li
              className="group bg-blue-200 rounded-xl py-2 px-2 relative flex flex-col gap-2"
              key={id}
            >
              <p>{text}</p>
              <button
                className="opacity-0 group-hover:opacity-100 transition-opacity bg-red-500 text-white rounded-xl px-2 py-1 hover:opacity-80 hover:cursor-pointer"
                onClick={() => onDelete(id)}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
