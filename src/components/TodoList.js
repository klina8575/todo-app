// TodoListItem을 감싸고 있는
import React from "react";
import TodoListItem from "./TodoListItem";
import "./TodoList.scss";

function TodoList({ todos, onRemove }) {
  return (
    <div className="TodoList">
      {todos.map((todo) => (
        <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} />
      ))}
    </div>
  );
}

export default TodoList;
