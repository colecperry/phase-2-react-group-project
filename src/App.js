import React, { useState, useEffect } from "react";
// import logo from './logo.svg';
import { Route, Switch } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Playlists from "./components/Playlists";
import ArtistAlbumSearch from "./components/ArtistAlbumSearch";

const CLIENT_ID = "1ff422b13da04c47b1d3639000b11abb";
const CLIENT_SECRET = "403561469b9c409faa37c5f49d39c46e";

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [albums, setAlbums] = useState([]);

// Fetch Access Token and set to state
  useEffect(() => {
      let authParameters = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/x-www-form-urlencoded'
          },
          body: "grant_type=client_credentials&client_id=" + CLIENT_ID + "&client_secret=" + CLIENT_SECRET
      }
      fetch('https://accounts.spotify.com/api/token', authParameters)
      .then(resp => resp.json())
      .then(data => setAccessToken(data.access_token))
    }, [])

    // Search


  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home accessToken={accessToken}/>
        </Route>
        <Route path="/playlists">
          <Playlists />
        </Route>
        <Route path="/artist-album-search">
          <ArtistAlbumSearch setSearchInput={setSearchInput} searchInput={searchInput} accessToken={accessToken} albums={albums} setAlbums={setAlbums} />
        </Route>
      </Switch>

    </div>
  );
}

export default App;
