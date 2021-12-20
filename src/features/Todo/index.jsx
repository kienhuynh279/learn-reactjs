import React from "react";
import TodoList from "./components/TodoList";
import { useState } from "react";
import TodoForm from "./components/TodoForm";

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

  function handleTodoSubmit(formValues) {
    console.log("ValuesTodo", formValues);

    const newTodoList = [...todoList];
    const todoValue = {
      id: todoList.length + 1,
      ...formValues,
    };

    newTodoList.push(todoValue);

    setTodoList(newTodoList);
  }

  return (
    <div>
      <h1>TodoList</h1>
      <TodoList
        todoList={renderFileredTodoList}
        onTodoClick={hanedleTodoList}
      ></TodoList>

      <TodoForm onSubmit={handleTodoSubmit}></TodoForm>

      <div>
        <button onClick={handleAllTodoList}>Show All</button>
        <button onClick={handleNewTodoList}>Show new</button>
        <button onClick={handleCompletedTodoList}>Show Completed</button>
      </div>
    </div>
  );
}

export default TodoFeature;
