import React from "react";
import PropTypes from "prop-types";
import TodoList from "./components/TodoList";
import { useState } from "react";

TodoFeature.propTypes = {};

function TodoFeature(props) {
  const initTodoList = [
    {
      id: 1,
      name: "eat",
      status: "new",
    },
    {
      id: 2,
      name: "code",
      status: "completed",
    },
    {
      id: 3,
      name: "sleep",
      status: "new",
    },
  ];

  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilterStatus] = useState("all");

  function hanedleTodoList(todo, idx) {
    //clone one new array
    const newTodoList = [...todoList];

    //toggle todo
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "completed" : "new",
    };

    //update todo
    setTodoList(newTodoList);
  }

  const handleAllTodoList = () => {
    setFilterStatus("all");
  };
  const handleNewTodoList = () => {
    setFilterStatus("new");
  };
  const handleCompletedTodoList = () => {
    setFilterStatus("completed");
  };

  const renderFileredTodoList = todoList.filter(
    (todo) => filteredStatus === "all" || filteredStatus === todo.status
  );

  return (
    <div>
      <h1>TodoList</h1>
      <TodoList
        todoList={renderFileredTodoList}
        onTodoClick={hanedleTodoList}
      ></TodoList>

      <div>
        <button onClick={handleAllTodoList}>Show All</button>
        <button onClick={handleNewTodoList}>Show new</button>
        <button onClick={handleCompletedTodoList}>Show Completed</button>
      </div>
    </div>
  );
}

export default TodoFeature;
