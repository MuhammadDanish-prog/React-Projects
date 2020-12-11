import React, {useState} from 'react'
import TodoDel from './TodoDel';


const TodoApp = () =>{
    const [inputList,setInput] = useState('')
    // const [updInput,setUpdInput] = useState('')

    const [Items,setItems] = useState([])

    const eventItem = (event) =>{
    setInput(event.target.value)
    }

    const listOfItem = () =>{
        setItems((prevItem)=>{
            return [...prevItem,inputList];
        })
     setInput('')
    }
    const delItem = (id) =>{
        console.log("DELETE")

        setItems((prevItem)=>{
            return prevItem.filter((arrEle,index)=>{
             return index !== id
            })
        })
    }
    
    // const updItem =(event)=>{
    //     setUpdInput(event.target.value)
    // }
    // const upDate =()=>{
    //     console.log("UPDATE")
    //     let updInput=<input  type='text' placeholder='Add Your Item' value={updInput} onChange={updItem}/>
    //     setItems((prevItem)=>{
    //         return [...prevItem,updItem];    
            
    //     })
    // }
   
    return(
        <>
        <div className ='main-div'>
            <div className='center-div'>
                <br/>
                <h1>ToDo List </h1>
                <br/>
                <input type='text' placeholder='Add Your Item' value={inputList} onChange={eventItem} />
                <button onClick={listOfItem}> + </button>
                <ol>
    {/* <li>{inputList}</li> */}
    {Items.map((itemval,index)=>{
        return (
            <TodoDel
            key={index}
            id={index}
            text={itemval}
            onselect={delItem}
            // onupdate={upDate}
            />
        )
    })}
                </ol>
            </div>
        </div>
        </>
    );

}

export default TodoApp;