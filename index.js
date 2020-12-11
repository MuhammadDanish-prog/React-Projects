import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
// import AppRouter from './Router';
import './PROJECTS/keep.css';
import './index.css'
import Counter from './Counter'
import TodoApp from './PROJECTS/TodoApp';
import Keep from './PROJECTS/Keep'
import Hooks from './PROJECTS/Hooks'
import Pikaju from './PROJECTS/Pikaju';
import {BrowserRouter} from "react-router-dom";
import AppRouter from './AppRouter';
import Home from './PROJECTS/Components/Home'


ReactDOM.render(
  <BrowserRouter>
      <AppRouter/>
</BrowserRouter>
 ,
  document.getElementById('root')
);
 
   
 

