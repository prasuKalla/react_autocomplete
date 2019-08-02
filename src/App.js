import React from 'react';
import {HomeComponent} from './components/home';
import {AboutComponent} from './components/about';
import {UsersComponent} from './components/users';
import {SearchBarComponent} from './components/searchbar';
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class App extends React.Component{

 render(){
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
            <li>
              <Link to="/searchbar/">Search users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={HomeComponent} />
        <Route path="/about/" component={AboutComponent} />
        <Route path="/users/" component={UsersComponent} />
        <Route path="/searchbar/" component={SearchBarComponent} />

      </div>
    </Router>
  );
 }
}


export default App;
