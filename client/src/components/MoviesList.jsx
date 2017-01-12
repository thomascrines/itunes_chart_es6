import React from 'react';
import MovieDetail from './MovieDetail.jsx';

class MoviesList extends React.Component {
  constructor(props) {
    super(props)
    this.state={selectedIndex: undefined}
    }

  render(){
    const movies = this.props.movies.map(function(movie, index){
      return (
        <MovieDetail key={index} title={movie["im:name"]["label"]} summary={movie['summary']['label']} image={movie['im:image'][2]['label']} link={movie['link'][0]['attributes']['href']}/>
      );
    });

    return (
      <div className="movies" >
        {movies}
      </div>
      );
  }

};

export default MoviesList;