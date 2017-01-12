import React from 'react';
import Horror from './Horror.jsx';
import Bollywood from './Bollywood.jsx';
import Comedy from './Comedy.jsx';
import {Link} from 'react-router';

class Main extends React.Component{

  render() {
    return (
      <div>
        <h4>iTunes Movie Charts</h4>
        <ul>
          <li><Link to='/bollywood'>Bollywood</Link></li>
          <li><Link to='/comedy'>Comedy</Link></li>
          <li><Link to='/horror'>Horror</Link></li>
        </ul>
        {this.props.children}
      </div>
      )
  }
}

export default Main;