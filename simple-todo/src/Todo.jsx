import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';


function Todo() {
    const [todos, setTodos] = useState([{task: "simple Task", id: uuidv4(), isDone: false}])
    const [newTodo, setNewTodo] = useState("")
 
    let updateTodo = (event) => {
        setNewTodo(event.target.value)
    }

    let addNewTask = () => {
        setTodos( (prevTodos) => {
            return [...prevTodos, { task: newTodo, id: uuidv4(), isDone: false }] // setTodos([...todos, newTodo]) for without uuid
        })
        setNewTodo("")
    }
    
    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    }    

    let upperCase = (id) => {
        setTodos(
            todos.map( (todo) => {
                if(todo.id == id) {
                return { ...todo, task: todo.task.toUpperCase() }
                }
                else{
                    return todo;
                }
            })
        )
    }
    let upperCaseAll = () => {
            setTodos(
                todos.map( (todo) => {
                    return { ...todo, task: todo.task.toUpperCase() }
                })
            )
    }

    let markDone = (id) => {
        setTodos(
            todos.map( (todo) => {
                if(todo.id == id) {
                return { ...todo, isDone: true, }
                }
                else{
                    return todo;
                }
            })
        )
    }

    let markAllDone = () => {
        setTodos(
            todos.map( (todo) => {
                return { ...todo, isDone: true}
            }) 
        )
    }

  return (
    <>
        <div>Todo</div>
        <input type="text" placeholder='Enter Todos Here' value={ newTodo } onChange={ updateTodo }/> &nbsp;&nbsp;&nbsp;
        <button onClick={addNewTask}>Add Todo</button>
        <br /> <br />
        <hr />
        <ul>
            {todos.map((todo) => (
                
                <li key= {todo.id} >
                    <span style={ todo.isDone ? {textDecorationLine: "line-through" } : {} } >{todo.task}</span>
                    &nbsp;&nbsp;&nbsp;
                    <button onClick={ () => deleteTodo(todo.id) }>Delete</button> &nbsp;&nbsp;&nbsp;
                    <button onClick={ () => upperCase(todo.id) }>Uppercase Selected</button>  &nbsp;&nbsp;&nbsp;
                    <button onClick={ () => markDone(todo.id) }>Mark As Done</button>
                </li>
                
            ))}
        </ul>
        <br /><br />
        <button onClick={upperCaseAll}>Uppercase All</button>   
        <br /> <br />
        <button style={ todos.isDone ? { isDecorationLine: "line-through"} : {} }
        onClick={markAllDone}>Mark All Done</button>
                    
    </>
  )
}

export default Todo