import React from 'react'

const TodoList = ({todolist,deleteHandler,updateHandler}) => {
    return (
        <div>
            {todolist.map((todo,index) =>
            <div key={index}>
                <h5>{todo} &nbsp; <button onClick={() => deleteHandler(index)}>Delete</button> &nbsp; <button onClick={() => updateHandler()}>Update</button></h5>
            </div>)}
        </div>
    )
}

export default TodoList