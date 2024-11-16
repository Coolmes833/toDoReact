import React from 'react'
import Todo from './Todo'

function TodoList({ todosToChildDestructiring, onRemoveTodo, onUpdateTodo }) {
    return (
        <div>
            {
                todosToChildDestructiring && todosToChildDestructiring.map((eachTodoMapping) => ( // içi dolu ise demek &&
                    <Todo key={eachTodoMapping.id} eachTodoForComponenting={eachTodoMapping} propsOnRemoveTodo={onRemoveTodo} propsOnUpdateTodo={onUpdateTodo} /> // Todo.jsx component geçtik
                ))


            }

        </div>
    )
}

export default TodoList
