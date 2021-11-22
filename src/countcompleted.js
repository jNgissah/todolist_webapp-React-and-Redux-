import React from 'react'
import { useSelector } from 'react-redux';


const Todolist = () => {

    const todos = useSelector((state) => state.todos)
    const total = todos.filter(bug=>bug.complete===true).length
    return (

        <div>
            <h2>
                Total items completed: {total}
            </h2>
        </div>


    )
}

export default Todolist