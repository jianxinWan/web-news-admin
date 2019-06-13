import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

import './App.less';

import Header from './components/Header'
import Nav from './components/Nav'

import Establish from './pages/Establish'
import Alter from './pages/Alter'
import Delete from './pages/Delete'

function App() {
  return (
    <div className="App">
      <Header />
      <Router>
        <div className="content-wrapper">
          <Nav />
          <div className="module-wrapper">
            <Route exact path="/" redirect="/establish" />
            <Redirect path="/" to={{ pathname: '/establish' }} />
            <Route exact path="/establish" component={Establish} />
            <Route exact path="/alter" component={Alter} />
            <Route exact path="/delete" component={Delete} />
          </div>
        </div>
      </Router>
      <style>
        {`
          .App{
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
          .content-wrapper{
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .module-wrapper{
            flex: 1;
          }
        `}
      </style>
    </div>
  );
}

export default App;
