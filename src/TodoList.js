import React from 'react';

import TodoItem from './TodoItem'

const ToDoList = ({todoItems}) => (
    <ul>
        {
            todoItems.map(({id, label}) => <TodoItem key = {id} label = {label} />)
        }
    </ul>
)

export default ToDoList