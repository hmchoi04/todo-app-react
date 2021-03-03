import React from 'react';

import TodoItem from './TodoItem';

const TodoList = ({ todoItems, onRemoveTodo, onToggleTodoDone }) => {
    return (
        <ul>
            {
                todoItems && Array.isArray(todoItems) && todoItems.length > 0 && todoItems.map(({ id, todo, isDone}) =>(
                    <TodoItem
                        key={id}
                        id={id}
                        todo={todo}
                        onRemoveTodo={onRemoveTodo}
                        onToggleTodoDone={onToggleTodoDone}
                        isDone={isDone}
                    />
                ))
            }
        </ul>
    )
};

export default React.memo(TodoList);