import React from 'react'
import './Todo.css'
import db from './firebase';
import DeleteIcon from '@material-ui/icons/Delete';

function Todo(props) {
    return (
        <div className='todos'>
            ➡️{props.todo.todo}
            <DeleteIcon onClick={event=>db.collection('todos').doc(props.todo.id).delete()}/>
        </div>
    )
}

export default Todo
