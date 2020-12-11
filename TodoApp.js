import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';
import TodoDel from '../TodoDel';

const TodoApp = () => {
    const [item, setItem] = useState('Buy An APPLE')
    const [insert, setInsert] = useState([])

    const itemList = (event) => {
        setItem(event.target.value)
    }
    const AddItem = () => {

        setInsert((prevItem) => {
            return [...prevItem, item]
        })
        setInsert('')
    }
    return (
        <div className='main-div'>
            <div className='center-div'>
                <br />
                <h1>ToDo List </h1>
                <br />
                <input type='text' placeholder='Add Your Item' onChange={itemList} />
                <Tooltip title="Add">
                    <Button className='myBtn' onClick={AddItem} > <AddIcon />
                    </Button>
                </Tooltip>
                <ol>
    {insert.map((value) => {
        return( <li>{value}</li>);
   
     
    })}
                </ol>

            </div>
        </div>
    );
}

export default TodoApp;