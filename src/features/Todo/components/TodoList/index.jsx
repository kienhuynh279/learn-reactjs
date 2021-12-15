import classnames from "classnames";
import PropTypes from "prop-types";
import React from "react";
import "./style.scss";

TodoList.propTypes = {
  todoList: PropTypes.array,
  onTodoClick: PropTypes.func,
};

TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null,
};

function TodoList({ todoList, onTodoClick }) {
  const handleTodoList = (todo, idx) => {
    if (!onTodoClick) return;

    onTodoClick(todo, idx);
  };

  return (
    <ul className={classnames("todo-list")}>
      {todoList.map((todo, idx) => (
        <li
          key={todo.id}
          className={classnames({
            "todo-item": true,
            completed: todo.status === "completed",
          })}
          onClick={() => handleTodoList(todo, idx)}
        >
          {todo.name}
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
