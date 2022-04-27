// TodoListItem을 감싸고 있는
import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

function TodoList({ todos }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} />
      ))}
    </div>
  );
}

export default TodoList;
