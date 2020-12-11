import React from 'react'



const TodoDel = (props) =>{

    return(
        <div className='todo_style'>
            
            <li className='fa fa-times'  area-hidden='true' onClick={()=>{
             props.onselect(props.id);
            }}/> 
               
            <li style={{
             marginRight:'10px'

            }}>{props.text}</li>
            {/* <li className='fa fa-pencil'  area-hidden='true' onClick={()=>{
             props.onupdate(props.id);
            }}/>    */}
            </div>
    );
}

export default TodoDel