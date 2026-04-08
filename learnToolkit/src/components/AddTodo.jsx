import { useState } from "react";
import {useDispatch} from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {

  const [input, setInput] = useState('')
  const dispatch = useDispatch()

  const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')
  }

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>Todo App</h2>

      {/* Form */}
      <form onSubmit={addTodoHandler}>
        <input
          type="text"
          placeholder="Enter a todo"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ padding: "8px", width: "70%" }}
        />
        <button type="submit" style={{ padding: "8px 12px", marginLeft: "10px" }}>
          Add
        </button>
      </form>

      {/* Todo List */}
      {/* <ul style={{ marginTop: "20px" }}>
        {todos.map((item) => (
          <li key={item.id} style={{ marginBottom: "10px" }}>
            {item.text}
            <button
              onClick={() => handleDelete(item.id)}
              style={{ marginLeft: "10px" }}
            >
              ❌
            </button>
          </li>
        ))}
      </ul> */}
    </div>
  );
}

export default AddTodo