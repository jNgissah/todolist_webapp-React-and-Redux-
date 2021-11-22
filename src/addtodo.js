import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

import { useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

const Todolist = () => {
    const [value, setValue]=React.useState("")
    const [value_, setValue_] = React.useState("")

    const dispatch = useDispatch()

    const submit = (event) => {
       
        dispatch(addTodo({
             title:value,
             details:value_,
        }))
    }

    return (

        <div
            component="form"
            
            spacing={2}
            noValidate
            autoComplete="off"
            style={{ justifyContent: 'center', textAlign:"center" }}
        >
            <form 
>
                <TextField
                    id="outlined-textarea"
                    label="Title"
                    placeholder="Enter Title"
                    multiline
                   
                    onChange={(event) => setValue(event.target.value)}
                />

                <br/>
                <br/>
                <TextField
                    id="outlined-multiline-static"
                    label="Details"
                    multiline
                    rows={4}
                    placeholder="Enter Details"
                    onChange={(event) => setValue_(event.target.value)}
                />
               
            </form>
            <br/>
            <Button variant="contained" onClick={() => submit()}>Submit</Button>
            <br/>
            <br/>
            <br/>

        
        </div>


    )
}

export default Todolist