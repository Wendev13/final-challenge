import React from 'react';
import './App.css';
import { Switch, Route, Link, Component } from 'react-router-dom'
import Home from './components/Home'
import Temperature from './components/Temperature'
import CustomizeImage from './components/CustomizeImage'
import Celebrities from './components/Celebrities'
import SearchBar from './components/SearchBar'


function App() {
  return (
    <div className="App">
      <nav>
        <div className="search-bar-container">
        <SearchBar />
        </div>
        <div className="nab-bar-links">
        <Link to="/">Home</Link>
        <Link to="/temperature">Temperature</Link>
        <Link to="/customize-image">Customize Image</Link>
        <Link to="/celebrities">Celebrities</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/temperature" exact component={Temperature} />
        <Route path="/customize-image" exact component={CustomizeImage} />
        <Route path="/celebrities" exact component={Celebrities} />
        <Route render={() => <h1>404</h1>} />
      </Switch>
    </div>
  );
}

export default App;
