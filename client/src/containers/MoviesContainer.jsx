import React from 'react';
import MoviesList from '../components/MoviesList.jsx';
import MovieDetail from '../components/MovieDetail.jsx';

class MoviesContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state={movies: [], title: null, code: undefined}
    }

  componentDidMount() {
    const url = `https://itunes.apple.com/es/rss/topmovies/limit=10/genre=${this.state.code}/json`
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.onload = () => {
          const data = JSON.parse(request.responseText)['feed']['entry'];
          var title = JSON.parse(request.responseText)['feed']['title']['label'];
          this.setState({movies: data, title: title});
        };
    request.send();
  }

  render() {
    return (
      <div className = 'container'>
      <h2>{this.state.title}</h2>
      <MoviesList movies={this.state.movies}/>
      </div>
      );
  }
};


export default MoviesContainer;