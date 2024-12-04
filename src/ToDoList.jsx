import { useState } from "react";
import { markDone, toggleDelete, toggleEdit, addTitle, updateTitle } from "./ToDoFunctions";
import "./TodoList.css"; // Import the CSS file

const initialTodos = [
  { id: 0, title: 'Walk the dog', done: false, editable: false },
  { id: 1, title: 'Go for a run', done: false, editable: false },
  { id: 2, title: 'Make dinner', done: false, editable: false },
];

export default () => {
  const [todos, setTodos] = useState(initialTodos);

  return (
    <div className="container">
      <h1 className="title">To-Do List</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((item) => (
          <li key={item.id} className={item.done ? "list-item-done" : "list-item"}>
            <input
              className="checkbox"
              type="checkbox"
              checked={item.done}
              onChange={() => markDone(item.id, todos, setTodos)}
            />
            {item.editable && !item.done ? (
              <input
                type="text"
                value={item.title}
                onChange={(e) => updateTitle(item.id, e.target.value, todos, setTodos)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    toggleEdit(item.id, todos, setTodos); // Exit edit mode on Enter
                  }
                }}
                autoFocus
                className="input-field"
              />
            ) : (
              <span>{item.title}</span>
            )}
            {!item.done && (
              <button
                onClick={() => toggleEdit(item.id, todos, setTodos)}
                className="button-edit"
              >
                ✏️
              </button>
            )}
            <button
              onClick={() => toggleDelete(item.id, todos, setTodos)}
              className="button-delete"
            >
              🗑️
            </button>
          </li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="Add a new task"
        onKeyDown={(e) => {
          if (e.key === "Enter" && e.target.value !== "") {
            addTitle(e.target.value, todos, setTodos)
            e.target.value=""
          }
        }}
        className="input-field"
      />
    </div>
  );
};