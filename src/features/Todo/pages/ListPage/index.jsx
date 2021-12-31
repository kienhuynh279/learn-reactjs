import React, { useEffect, useMemo } from "react";
import queryString from "query-string";
import TodoList from "../../components/TodoList";
import { useState } from "react";
import TodoForm from "../../components/TodoForm";
import { useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useRouteMatch } from "react-router-dom";

ListPageFeature.propTypes = {};

function ListPageFeature(props) {
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

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);
    console.log(params);

    return params.status || "all";
  });

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

  useEffect(() => {
    const params = queryString.parse(location.search);
    // console.log(params);
    setFilterStatus(params.status || "all");
  }, [location.search]);

  const handleAllTodoList = () => {
    // setFilterStatus("all");
    const queryParam = { status: "all" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleNewTodoList = () => {
    const queryParam = { status: "new" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleCompletedTodoList = () => {
    const queryParam = { status: "completed" };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const renderFileredTodoList = useMemo(() => {
    return todoList.filter(
      (todo) => filteredStatus === "all" || filteredStatus === todo.status
    );
  }, [todoList, filteredStatus]);

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

export default ListPageFeature;
