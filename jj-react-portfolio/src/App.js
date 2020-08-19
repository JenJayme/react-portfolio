import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import MyNavbar from './components/navbar';
import Home from './components/home'
import Bio from './components/bio';
import Portfolio from './components/portfolio';
import 'bootstrap/dist/css/bootstrap.min.css';
import Work from './components/work';
import Skills from './components/skills';


function App() {
  return (
    <Router>
    <div className="App">
      <MyNavbar />
      <header className="App-header">Header</header>
      <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/portfolio" component={Portfolio}/>
          <Route exact path="/bio" component={Bio}/>
          <Route exact path="/skills" component={Skills}/>
          <Route exact path="/work" component={Work}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
