import React, { useState } from 'react';
import TodoList from './components/Todolist';

function App() {
    const[task,setTask] = useState("")
    const [todos,setTodos] = useState([]);

    const changeHandler = (e) => {
        setTask(e.target.value)
    }
    // for adding the to do
    const submitHandler = (e) => {
        e.preventDefault()
        const newTodos = [...todos,task]
        setTodos(newTodos)
        console.log(task)
        setTask("")
    }
    // for deleting the to do
    const deleteHandler = (indexValue) =>{
      const newTodos = todos.filter((todo,index) => index !== indexValue);
      setTodos(newTodos);
    }
    // for updating the todo
    const updateHandler = () => {
      const userInput = window.prompt("Enter your updated todo")
      if (userInput !== null) {
        console.log(userInput)
      }
    }
  return (
    <div>
      <center>
        <div className="body">
            <div className="body-2">
                <h3>To do app made by vinnu</h3>
                <form onSubmit={submitHandler}>
                    <input type="text" name="task" size={30} className="search-bar" value={task} onChange={changeHandler}/> &nbsp;
                    <input type="submit" value="add" name="Add" className="add-button"/>
                    <h4>{task}</h4>
                </form>
                <br/>
                <TodoList todolist={todos} deleteHandler={deleteHandler} updateHandler ={updateHandler}/>
            </div>
        </div>
      </center>
    </div>
  )
}

export default App