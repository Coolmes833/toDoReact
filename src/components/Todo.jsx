import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { FaEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";


function Todo({ eachTodoForComponenting, propsOnRemoveTodo, propsOnUpdateTodo }) {
    const { id, content } = eachTodoForComponenting;
    const [editable, setEditable] = useState(false);
    const [editTodo, setEditTodo] = useState(content);

    const removeTodo = () => {
        propsOnRemoveTodo(id);
    }
    const updateTodo = () => {
        const request = {
            id: id,
            content: editTodo,
        }
        propsOnUpdateTodo(request);
        setEditable(false);
    }
    return (
        <div style={{ width: '600px', display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', border: '1px solid lightgrey', padding: '10px', marginTop: '6px', backgroundColor: 'lightgray', justifySelf: 'center' }}>
            <div>
                {
                    editable ? <input style={{ width: '300px', height: '30px', marginLeft: '10px', paddingLeft: '200px' }}
                        value={editTodo} onChange={(e) => setEditTodo(e.target.value)}
                        type="text" /> : content
                }
            </div>

            <div>
                <IoIosRemoveCircle onClick={removeTodo} style={{ paddingRight: '30px', fontSize: '25px', color: 'Red' }} />

                {
                    editable ? <FaCheck style={{ fontSize: '25px', color: 'black' }} onClick={updateTodo} />

                        : <FaEdit style={{ fontSize: '25px', color: 'black' }} onClick={() => setEditable(true)} />

                }

            </div>
        </div>
    )
}

export default Todo
