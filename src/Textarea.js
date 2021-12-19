import React, { useEffect, useState } from 'react'
import Todo from './Todo';
import './Textarea.css'
import Button from '@mui/material/Button';
import db from './firebase';
import firebase from 'firebase/app';

function Textarea() {
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
    // console.log(input)

    useEffect(() => {
        db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
            // console.log(snapshot.docs.map(doc=> doc.data()))
            setTodos(snapshot.docs.map(doc=> ({id:doc.id, todo: doc.data().todo})))
        })
        
    }, [])

    const addTodo = (event) => {
        event.preventDefault();
        db.collection('todos').add({
            todo: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
        setTodos([...todos, input]);
        setInput('');
    }
    return (
        <div className='main-div'>
        <div className='upper-div'>
            <form>
                <input placeholder='Type here...' value={input} onChange={event=> setInput(event.target.value)}/>
                <Button className='button' variant="contained"  disabled={!input} type='submit' onClick={addTodo}>Add Todo</Button>
            </form>
        </div>
        <div class='points'>
            {todos.map(todo=>(
                <Todo todo={todo}/>
            ))}
        </div>
        </div>
    )
}

export default Textarea
