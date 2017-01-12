import React from 'react';

const MovieDetail = function(props){
  return (
    <div className='movie-detail'>
    <h3>{props.title}</h3>
    <a href={props.link}><img src={props.image}/></a>
    <p>{props.summary}</p>
    </div>
    );
};

export default MovieDetail;