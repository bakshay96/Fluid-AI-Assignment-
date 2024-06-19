import React from 'react'

import useFetch from './useFetch';
import { NavLink } from 'react-router-dom';

export const Modal = ({id}) => {

    // const { id } = useParams();
	console.log(id);

	const { isLoading, movie, isError } = useFetch(`&i=${id}`);
	const countryName = movie?movie.Country.substring(0, 15):null;
	if (isLoading) {
		return (
			<section className="movie-section ">
				<div className="loading">Loading....</div>;
			</section>
		);
	}

	return (
		<div className="modal">

		<section className="modal-movie-section">
			<div className="modal-movie-card">
				<figure>
					<img src={movie.Poster} alt="" />
				</figure>
				<div className="modal-card-content">
					<div className="flex title">
						<p className="title">{movie.Title}</p>
					</div>

					<div className="cardText-flex card-text flex released">
						<label htmlFor="">Released</label>
						<p className="card-text">{movie.Released}</p>
					</div>

					<div className="cardText-flex card-text flex">
						<label htmlFor="genre">Genre</label>
						<p className="card-text">{movie.Genre}</p>
					</div>

					<div className="cardText-flex card-text flex rating">
						<label htmlFor="rating">Rating</label>
						<p className="card-text">{movie.imdbRating} / 10</p>
					</div>

					<div className="cardText-flex card-text flex country">
						<label htmlFor="country">Country</label>
						<p className="card-text">{movie.Country.length>15?countryName:movie.Country}</p>
					</div>

					{/* <NavLink to="/" className="back-btn">
						Go Back
					</NavLink> */}
				</div>
			</div>
		</section>
		</div>
	);
}
