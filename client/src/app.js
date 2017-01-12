import React from 'react';
import ReactDOM from 'react-dom';
import Bollywood from './components/Bollywood.jsx';
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import Horror from './components/Horror.jsx';
import Comedy from './components/Comedy.jsx';
import {Router, Route, IndexRoute, hashHistory} from 'react-router';

window.onload = () => {
  ReactDOM.render(
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Home}/>
        <Route path='bollywood' component={Bollywood}/>
        <Route path='horror' component={Horror}/>
        <Route path='comedy' component={Comedy}/>
      </Route>
    </Router>,
    document.getElementById('app')
    )
}