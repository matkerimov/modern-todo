import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faCoffee, faEdit, faSave, faTrash} from '@fortawesome/free-solid-svg-icons'
import TodoItem from "../TodoItem";

const Todo = () => {
    const [todos, setTodos] = useState([
        {id: 1, title: "train", createdAt: +new Date()},
        {id: 2, title: "eat", createdAt: +new Date()},
        {id: 3, title: "sleep", createdAt: +new Date()}
    ])
    const [newTodo, setNewTodo] = useState('')


    const handleClick = (e) => {
        setNewTodo(e.target.value)
    }
    const addTodo = () => {
        const newItem = {
            id: todos.length ? todos[todos.length - 1].id + 1 : 1,
            title: newTodo,
            createdAt: +new Date()
        }
        setTodos([...todos, newItem])
        setNewTodo('')
    }
    const deleteTodo = (id) => {
        setTodos(todos.filter(item => item.id !== id))
    }
    const updateTodo = (modified, id) => {
        setTodos(todos.map(item => item.id === id ? {...item, title: modified} : item    ))
    }

    return (
        <div className="row my-5">
            <div className="col-4 offset-md-4">
                <div className="d-flex mb-4">
                    <input className="form-control me-4" onChange={handleClick} value={newTodo} type="text"
                           onKeyPress={el => {
                               if (el.key === 'Enter' && !newTodo === "" ) addTodo()}} placeholder="entry"/>
                    <button className="btn btn-primary" onClick={addTodo} disabled={!newTodo.trim()}>Append</button>
                </div>
                <ul className="list-group">
                    {
                        todos.map(item =>
                            <TodoItem key={item.id} item={item} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
                        )
                    }
                </ul>
            </div>
        </div>
    );
};

export default Todo;