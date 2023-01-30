import React, { useState, useEffect } from 'react'
import styles from './todos.module.css'

const Todos = () => {
    const [todos, setTodos] = useState([])
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos?userId=1')
            .then(response => response.json())
            .then(json => setTodos(json))

        const listener = (event) => {
            console.log('click!');
        };

        document.addEventListener("mousedown", listener);

        return () => {
            document.removeEventListener("mousedown", listener);
            console.log('fechando lista');
        };

    }, [])
    return (
        <ul className={styles.lista}>
            {todos.map(todo => (
                <li className={styles.item} key={todo.id}>
                    <p>Title: {todo.title}</p>
                    <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                </li>))}
        </ul>
    )
}

export default Todos