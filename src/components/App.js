import React from 'react';
import "../styles/App.css";
import Row from './Row';
import {requests} from "../configs/requests";
import Banner from "./Banner";
import Nav from './Nav';

export default function App() {
  return (
    <div className="app">
      {/* navbar  */}
        <Nav />
      {/* banner  */}
        <Banner />
        <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
        <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
        <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
        <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentary Movies" fetchUrl={requests.fetchDocumentariesMovies} />
    </div>
  )
}
   