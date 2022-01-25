import React, { useEffect, useMemo } from 'react';
import queryString from 'query-string';
import TodoList from '../../components/TodoList';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import { useRouteMatch } from 'react-router-dom';
import HookForm from '../../components/FormHook';

ListPageFeature.propTypes = {};

function ListPageFeature(props) {
  const initTodoList = [
    {
      id: 1,
      name: 'eat',
      status: 'new',
    },
    {
      id: 2,
      name: 'code',
      status: 'completed',
    },
    {
      id: 3,
      name: 'sleep',
      status: 'new',
    },
  ];

  const location = useLocation();
  const history = useHistory();
  const match = useRouteMatch();
  const [todoList, setTodoList] = useState(initTodoList);
  const [filteredStatus, setFilterStatus] = useState(() => {
    const params = queryString.parse(location.search);

    return params.status || 'all';
  });

  function hanedleTodoItem(todo, idx) {
    //clone one new array
    const newTodoList = [...todoList];

    //toggle todo
    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === 'new' ? 'completed' : 'new',
    };

    //update todo
    setTodoList(newTodoList);
  }

  useEffect(() => {
    const params = queryString.parse(location.search);
    setFilterStatus(params.status || 'all');
  }, [location.search]);

  const handleAllTodoList = () => {
    const queryParam = { status: 'all' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleNewTodoList = () => {
    const queryParam = { status: 'new' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };
  const handleCompletedTodoList = () => {
    const queryParam = { status: 'completed' };
    history.push({
      pathname: match.path,
      search: queryString.stringify(queryParam),
    });
  };

  const renderFileredTodoList = useMemo(() => {
    return todoList.filter((todo) => filteredStatus === 'all' || filteredStatus === todo.status);
  }, [todoList, filteredStatus]);

  const handleFormSubmit = (values) => {
    const newTodo = {
      id: todoList.length + 1,
      title: values.title,
      status: 'new',
    };

    const newTodoList = [...todoList, newTodo];
    console.log('new todo list:', newTodoList);

    setTodoList(newTodoList);
  };

  return (
    <div>
      <h1>Form Hook</h1>
      <HookForm onSubmit={handleFormSubmit}></HookForm>

      <h1>TodoList</h1>
      <TodoList todoList={renderFileredTodoList} onTodoClick={hanedleTodoItem}></TodoList>
      <div>
        <button onClick={handleAllTodoList}>Show All</button>
        <button onClick={handleNewTodoList}>Show new</button>
        <button onClick={handleCompletedTodoList}>Show Completed</button>
      </div>
    </div>
  );
}

export default ListPageFeature;
