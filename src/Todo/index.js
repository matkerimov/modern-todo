import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash, faEdit, faSave} from '@fortawesome/free-solid-svg-icons'

const Todo = () => {
    const [todos, setTodos] = useState([
        {id: 1, title: "Проснуться", createdAt: +new Date()},
        {id: 1, title: "Проснуться", createdAt: +new Date()},
        {id: 1, title: "Проснуться", createdAt: +new Date()}
    ])
    const [newTodo, setNewTodo] = useState('')
    const [edit, setEdit] = useState(false)

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
    return (
        <div className="row offset-md-4 my-5">
            <div className="col-md-6">
                <div className="d-flex mb-4">
                    <input className="form-control  me-3" onKeyPress={el => {
                        if (el.key === 'Enter') addTodo()
                    }} onChange={handleClick} value={newTodo} type="text" placeholder="search"/>
                    <button className="btn btn-primary" onClick={addTodo} disabled={!newTodo.trim()}>Добавить</button>
                </div>
                <ul className="list-group mt-4">
                    {
                        todos.map(item => (
                            <li key={item.id}
                                className="list-group-item d-flex justify-content-between align-item-center ">
                                {
                                    edit ? <input type="text" defaultValue={item.title}/> : <span>{item.title}</span>

                                }
                                <div>
                                    <button className="btn btn-warning me-2 btn-sm text-light"
                                            onClick={() => edit ? setEdit(false) : setEdit(true)}>
                                        {
                                          edit ?  <FontAwesomeIcon icon={faSave}/> :  <FontAwesomeIcon icon={faEdit}/>
                                        }
                                    </button>
                                    <button className="btn btn-danger btn-sm" onClick={() => deleteTodo(item.id)}>
                                        <FontAwesomeIcon
                                            icon={faTrash}/></button>
                                </div>
                            </li>
                        ))
                    }
                </ul>
            </div>

        </div>
    );
};

export default Todo;