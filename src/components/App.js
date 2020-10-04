import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import '../styles/App.css';
import Login from './Login';
import ProjectDetails from './ProjectDetails';
import Projects from './Projects';

function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <div className="container">
        <Route exact={true} path="/" component={Login}></Route>
          <Route exact={true} path="/projects" component={Projects}></Route>
          <Route path="/browse/:projectKey" component={ProjectDetails}></Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
