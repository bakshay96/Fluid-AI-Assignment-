import React from "react";
import { NavLink, useNavigate} from "react-router-dom";
import { useGlobalContext } from "../context/Context";



// default url when img missing in api request
const imgUrl = "https://via.placeholder.com/300/300";

const Movie = () => {
  const { movie, isLoading } = useGlobalContext();
  const navigate=useNavigate();

  //error handling 
  if (isLoading) {
    return <div className="loading">Loading....</div>;
  }
  if(movie==null)
    {
      return<div className="loading">No result found..! , Try Again..</div>
    }

  return (
    <>
     {/* #conditional rendering */}

      <section className="movie-page">
        <div className="grid grid-4-col">
          {movie
            ? movie.map(({imdbID,Title,Poster}) => {
                // const { imdbID, Title, Poster } = MovieElement;
              
                // validate title length 
                const movieName = Title.substring(0, 15);

                return (
                  <NavLink to={`movie/${imdbID}`} key={imdbID}>
                    <div className="card">
                      <div className="card-info">
                        <h2>
                          {Title.length > 13
                            ? `${movieName}...`
                            : Title}
                        </h2>
                        <img src={Poster === "N/A" ? imgUrl : Poster} alt="#" />
                      </div>
                      <div className="know-more-btn">
                        Know More
                      </div>
                    </div>
                  </NavLink>
                );
              })
            : ""}
        </div>
      </section>
    </>
  );
};

export default Movie;