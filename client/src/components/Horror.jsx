import React from 'react';
import MoviesList from './MoviesList.jsx';
import MoviesContainer from '../containers/MoviesContainer.jsx';

class Horror extends React.Component{
  render(){
    return(
      <div>
        <MoviesContainer code='4431'/>,
      </div>
    )
  }
}

export default Horror;