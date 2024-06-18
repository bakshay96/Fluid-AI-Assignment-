import { NavLink, useParams } from "react-router-dom";
import useFetch from "../components/useFetch";

const SingleMovie = () => {
	const { id } = useParams();
	console.log(id);

	const { isLoading, movie, isError } = useFetch(`&i=${id}`);

	if (isLoading) {
		return (
			<section className="movie-section ">
				<div className="loading">Loading....</div>;
			</section>
		);
	}

	return (
		<section className="movie-section">
			<div className="movie-card">
				<figure>
					<img src={movie.Poster} alt="" />
				</figure>
				<div className="card-content">
					<p className="title">{movie.Title}</p>
					<p className=""></p>

					<div className="cardText-flex card-text">
						<label htmlFor="">Released : </label>
						<p className="card-text">{movie.Released}</p>
					</div>

					<div className="cardText-flex card-text">
						<label htmlFor="genre">Genre : </label>
						<p className="card-text">{movie.Genre}</p>
					</div>

					<div className="cardText-flex card-text">
						<label htmlFor="rating">Rating : </label>
						<p className="card-text">{movie.imdbRating} / 10</p>
					</div>
					<div className="cardText-flex card-text">
						<label htmlFor="country">Country : </label>
						<p className="card-text">{movie.Country}</p>
					</div>
					<NavLink to="/" className="back-btn">
						Go Back
					</NavLink>
				</div>
			</div>
		</section>
	);
};

export default SingleMovie;
