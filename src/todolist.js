import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Grid from '@material-ui/core/Grid';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {completeList, deleteList } from './redux/todoSlice';


const Todolist = () => {


    const [expanded, setExpanded] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    const todos = useSelector((state) => state.todos)

    const dispatch = useDispatch()

    const completelist = (id) => {
        dispatch(completeList({
            id: id,
            
        }))
    }
    const deletelist_ = (id) => {

        dispatch(deleteList({
            id:id,
            
        }))

       
    }

    return (
        
        <div>
             
            {todos.map((list, index) => (



                 <Accordion expanded={expanded === 'panel'+index } key={index} onChange={handleChange('panel'+index)}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            {list.title}
                        </Typography>
                        <Typography sx={{ color: 'text.secondary' }}>{ list.complete?"Completed":"Uncompleted"}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                           {list.details}
                        </Typography>
                        <br/>
                        {list.complete ? <Button variant="contained" disabled >Completed</Button> : <Button variant="contained" onClick={()=>completelist(list.id)} >Complete</Button>}
                        <Button variant="warning" style={{ marginLeft: 4 }} onClick={()=>deletelist_(list.id) color="error"}>Delete</Button>
                    </AccordionDetails>
                </Accordion>






            ))}
           



        </div>


        )
}

export default Todolist