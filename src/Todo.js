import React, { useState, useCallback } from 'react';
import TodoList from './TodoList';
import AddNewTodoForm from './AddNewTodoForm';

import {getTodoItemsFromLocalStorage, saveTodoItemsToLocalStorage} from './helpers'


const ToDo = () => {
  const [todoItems, setTodoItems] = useState(getTodoItemsFromLocalStorage('todo') || [])
  const addToHandler = useCallback(todo => {
    let latesetTodoItem = null
    if (todoItems.length == 1) {
      latesetTodoItem = todoItems[0]
    }
    else if (todoItems.length > 1) {
      const todoItemsDesecendingSortedById = todoItems.sort((a, b) => a.id, b.id)
      latesetTodoItem = todoItemsDesecendingSortedById[0]
    }
    const newTodoItems = [
      {id: latesetTodoItem ? latesetTodoItem.id + 1: 0, 
      todo, 
    }, 
    ...todoItems,
  ]
  setTodoItems(newTodoItems)
  saveTodoItemsToLocalStorage('todo', newTodoItems)
}, [todoItems]

  return (
    <div className="todo">
      <h1>Todo</h1>
      <AddNewTodoForm
        onAddTodo={addToHandler}
      />
      <TodoList todoItems={todoItems}/>
    </div>
  );
}


export default ToDo;
