import React from 'react';
import PropTypes from 'prop-types';
import TodoList from './components/TodoList'

TodoFeature.propTypes = {
    
};

function TodoFeature(props) {
    const todoList = [
        {
            id: 1,
            name: 'eat'
        },
        {
            id: 2,
            name: 'code'
        },
        {
            id: 3,
            name:'sleep'
        }
    ]
    return (
        <div>
            <h1>TodoList</h1>
            <TodoList todoList={todoList}></TodoList>
        </div>
    );
}

export default TodoFeature;