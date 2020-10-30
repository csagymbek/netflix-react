import React, { useState, useEffect } from "react";
import { instance } from "../configs/axios";
import "../styles/Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";

export default function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  // make a request to the server TMDB
  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      {/* title  */}
      <h2>{title}</h2>
      {/* posters container  */}
      <div className="row__posters">
        {/* individual poster  */}
        {movies.map((movie) => (
          <img
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
            key={movie.id}
          />
        ))}
      </div>
    </div>
  );
}
