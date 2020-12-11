import React, { useState } from 'react'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';



const NoteKeep = (props) =>{
    const[expand,setExpand]=useState(false)
    const[note,setNote]=useState({
        title:'',
        content:''
    })

    const inputEvent = (event) =>{
        const{name,value}=event.target
        setNote((preValue)=>{
        return{
            ...preValue,
            [name] : value,
        }
        })
        console.log(note)
    }

    const AddEvent = () =>{
         props.passNote(note)
         setNote(({
            title:'',
            content:''
        }))
    }
    const expandIt = () =>{
        setExpand(true)
    }
    const backToNormal = () =>{
        setExpand(false)
    }
return <>
<div className='main_note' onDoubleClick={backToNormal}>
    <form>
        {expand?
        <input type='text' name='title' value={note.title} onChange={inputEvent} placeholder='Title' autoComplete='off' />
        :null }
        <textarea rows=''  onClick={expandIt} name='content' column='' value={note.content} onChange={inputEvent} placeholder='write a Note ...'>
        </textarea>
        {expand?
        <Button onClick={AddEvent}>
               <AddIcon className='plus_sign'/>
        </Button>
        :null }
    </form>
</div>
</>
}

export default NoteKeep;