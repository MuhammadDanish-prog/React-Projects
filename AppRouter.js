import React from "react";
import Home from './PROJECTS/Components/Home'
import About from './PROJECTS/Components/About'
import Contact from './PROJECTS/Components/Contact'
import Search from './PROJECTS/Components/Search'







import {BrowserRouter as Route,Switch} from "react-router-dom";







const AppRouter = () =>{
       return(
           <>
           <Router>
            <Switch>
                  <Route exact path="/" component={Home}></Route>
                  <Route exact path="/about" component={About}></Route>
                  <Route exact path="/contact" component={Contact}></Route>
                  <Route exact path="/search" component={Search}></Route>


            </Switch>
            </Router>
            </>
       );
}

export default AppRouter