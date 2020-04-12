import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import ExcercicesList from './components/ExcercicesList';
import EditExcercise from './components/EditExcercise';
import CreateExcercise from './components/CreateExcercise';
import CreateUser from './components/CreateUser';

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/" exact component={ExcercicesList} />
        <Route path="/edit/:id" component={EditExcercise} />
        <Route path="/create" component={CreateExcercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>

  );
}

export default App;
