import React, { useState } from 'react'
import Headerkeep from './Headerkeep';
import FooterKeep from './FooterKeep';
import NoteKeep from './NoteKeep'
import RecordKeep from './RecordKeep';



const Keep = () =>{
    const[addItem,setAddItem] = useState([])
    const AddNote = (note) =>{
        // alert("HELLO WORLD")
        setAddItem((preValue)=>{
            return [...preValue,note]
        })
        console.log(note)
    }

    const onDelete = (id) =>{
        setAddItem((olddata)=>
            olddata.filter((currenData,index)=>{
              return index !==id;
            })
        )
    }
return <>
<Headerkeep />
<NoteKeep passNote={AddNote}/>

{addItem.map((val,index)=>{
    return <RecordKeep 
    key={index}
    id={index}
    title={val.title}
    content={val.content}
    deleteItem={onDelete}
    />
})}
<FooterKeep />
</>
}

export default Keep;