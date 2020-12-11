import React from 'react';


function Add(a,b){
    return(
        a+b
    );
}
function Sub(a,b){
    return(
        a-b
    );
}
function Mul(a,b){
    return(
        a*b
    );
}
function Div(a,b){
    return(
        a/b
    );
}

export default Add;
export{Sub,Mul,Div}