import React from 'react'
import Loading from './Loading'
function Movie(props) {
  return (
        <>
    {
    props.isLoading ? <Loading/>:(
    <div className="Listmovie">
    {props.movie.map(el=>
    <div className="movielst">
    <h3>{el.name}</h3>
    <img src={el.src} alt="img"></img>
    <h3>{el.year}</h3>
    </div>

        )}
    </div>
            )
            
        }
    </>
    );
 }
 export default Movie;