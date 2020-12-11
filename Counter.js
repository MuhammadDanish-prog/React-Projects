import React, { useState } from 'react'
import AddIcon from '@material-ui/icons/Add';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import Button from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';

const Counter = () =>{
    const [zero,setZero] = useState(0);

    const Increase= () =>{
        return(
             setZero(zero+1)
        );
    }
    const Decreament= () =>{

        
            if(zero>0){
                return(
             setZero(zero-1)
        )
                }else{
                    setZero(0)
                    alert("Your Number Is Less Than Zero")
                }
    }
    return(
        <>
<div className ='main-div'>
            <div className='center-div'>
                <br/>
    <h1>{zero}</h1>
                <br/>
                <Tooltip title="Add">
                <Button onClick={Increase} className='btn-green'> <AddIcon /></Button>
                </Tooltip>
                <Tooltip title="Delete">
                <Button onClick={Decreament} className='btn-red'> <DeleteForeverIcon/> </Button>
                </Tooltip>
             
            </div>
        </div>
       </>
    );
}

export default Counter;