import React, { useState } from 'react'
import '../App.css';

function TodoCreate({ createTodoButChilDestructiring }) {

    const [newTodo, setNewTodo] = useState("");

    const clearInput = () => {
        setNewTodo('');
    }

    const createTodo = () => {
        if (!newTodo) return; // boş ise bişey dönmesin diye
        const request = {
            id: Math.floor(Math.random() * 99999999),
            content: newTodo
        }
        createTodoButChilDestructiring(request)
        clearInput();
    }

    return (
        <div style={{ border: '1px solid', justifyItems: 'center', alignItems: 'center', width: '700px', justifySelf: 'center', backgroundColor: 'lightblue' }}
            className='todo-create' >
            <input style={{ width: '300px', height: '30px', marginLeft: '10px', paddingLeft: '200px' }}
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                type="text" placeholder='Todo Giriniz' />

            <button style={{ width: '100px', height: '35px', margin: '20px', border: '2px solid lightgray', borderRadius: '5px', backgroundColor: 'orange', color: 'black', fontWeight: 'bold' }} onClick={createTodo}> Todo Oluştur </button>
        </div>
    )
}

export default TodoCreate
