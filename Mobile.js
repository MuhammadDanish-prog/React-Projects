import React from 'react';
import Images from './Images'

const Mobile = (props) =>{
    return(
        <div className="card" style={{
            width: '18rem',
            border:'2px solid grey',
            
            }}>
            <div className="card-body">
              <Images imgsrc={props.imgsrc}/>
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.detail}</p>
              <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    );
}

export default Mobile;