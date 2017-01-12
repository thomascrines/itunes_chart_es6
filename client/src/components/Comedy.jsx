import React from 'react';
import MoviesList from './MoviesList.jsx';
import MoviesContainer from '../containers/MoviesContainer.jsx';

class Comedy extends React.Component{
  render(){
    return(
      <div>
        <MoviesContainer code='4408'/>,
      </div>
    )
  }
}

export default Comedy;