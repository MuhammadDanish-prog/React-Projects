import { Title } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'



const Hooks = () =>{
    const[num,setNum]=useState(0)
    useEffect(()=>{
        document.title=`I am ${num} times Cliked`
        // alert('HELLO GUYS')
    })
     return(
     <button onClick={()=>{setNum(num+1)}}>Clicked ME {num}</button>
     );            
}

export default Hooks