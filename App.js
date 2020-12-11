import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Cards from './cards';
import Datas from './Datas';



// const App = () =>{

//   let Time=new Date().toLocaleTimeString();
//   const [cuTime,getTIme]=useState(Time)
//   const Foo=()=>{
//     Time=new Date().toLocaleTimeString();
//     getTIme(Time);
//   }
//   setInterval(Foo,1000)
//   return(
//     <div className = 'app'>
//       <h1>{cuTime}</h1>
//       {/* <button onClick={Foo}>GET TIME</button> */}

// </div>
// );
// }

// const App = () =>{
//   const [name,setName] = useState()
//   const [fullName,setFullName] = useState()


//   const eventHandler =(event) =>{
//   console.log(event.target.value)
//   setName(event.target.value)
//   }
//   const onSubmit = () =>{
//     setFullName(name)
    
//   }
//   return(
//     <>
//     <div>
//   <h1>HELLO {fullName}</h1>
//       <input placeholder="Enter Your Text" type='text' onChange={eventHandler}/>
//       <button onClick={onSubmit}>Click Me👍</button>
//     </div>
//     </>
//   );
// }


// 

const App = () =>{
  const [name,setName] = useState({
    fName:'',
    lName:'',
    email:'',
    phone:''
  })

  const eventHandler =(event) =>{
  console.log(event.target.value)
  console.log(event.target.name)

const{name,value}=event.target;


  setName((preValue)=>{
    return{
      ...preValue,
        [name] : value,
      
    }
    // if(name === 'fName'){
    //   return{
    //     fName:value,
    //     lName:preValue.lName,
    //     email:preValue.email,
    //     phone:preValue.phone
    //   }
    // }else if(name === 'lName'){
    //   return{
    //     fName:preValue.fName,
    //     lName:value,
    //     email:preValue.email,
    //     phone:preValue.phone
    //   }
    // }
    // else if(name === 'email'){
    //   return{
    //     fName:preValue.fName,
    //     lName:preValue.lName,
    //     email:value,
    //     phone:preValue.phone
    //   }
    // }
    // else if(name === 'phone'){
    //   return{
    //     fName:preValue.fName,
    //     lName:preValue.lName,
    //     email:preValue.email,
    //     phone:value
    //   }
    // }
  })
  }
 
  const onSubmit = (event) =>{
    event.preventDefault();
    alert("your form has been submit")
    
  }
  return(
    <>
    <div>
    <form onSubmit={onSubmit} style={{
      backgroundColor:'purple',
      height:'300px',
      width:'60%',
      alignItems:'center',
      textAlign:'center'
    }}>
  <h1>HELLO {name.fName} {name.lName} </h1>
  <p>{name.email}</p>
  <p>{name.phone}</p>


      <input name='fName' value={name.fName} placeholder="Enter Your First Name" type='text' onChange={eventHandler}/><br/>
      <input name='lName' value={name.lName} placeholder="Enter Your Last Name" type='password' onChange={eventHandler}/><br/>
      <input name='email' value={name.email} placeholder="Enter Your Last Name" type='email' onChange={eventHandler}/><br/>
      <input name='phone' value={name.phone} placeholder="Enter Your Last Name" type='text' onChange={eventHandler}/><br/>



      <button type="submit">Click Me👍</button>
      </form>
    </div>
    </>
  );
}

export default App;