import React from 'react';
import Add from './Add';
import {Sub,Mul,Div} from './Add';


function App(){
    return(
        <div>
    <h1>The Add is {Add(12,10)}</h1>
    <h1>The Add is {Sub(12,10)}</h1>
    <h1>The Add is {Mul(12,10)}</h1>
    <h1>The Add is {Div(12,10)}</h1>
    </div>
    );
}

export default App;