import React, { useEffect, useState } from "react";
import { Row, Container } from 'react-bootstrap';
import { VscArrowCircleRight } from "react-icons/vsc";
import SongCard from "./SongCard";

function NewSongs({ allNewSongs, setAllNewSongs, accessToken, handleLikedSong }) {
    
    const eachTrack = () => {
        const onlyFiveNewSongs = allNewSongs.slice(0, 5);
        return onlyFiveNewSongs.map((song) => {
            return <SongCard song={song} handleLikedSong={handleLikedSong} key={song.track.id} />
        })
    }

    return (
        <Container className="homePageDiv">
            <h2 className="homeDivTitle" style={{position:"relative", display:"flex", alignItems:"center", justifyContent:"space-between", fontFamily: "Arial Rounded MT Bold"}}><span style={{margin:"auto"}}>{accessToken === "" ? "Loading " : null}New Songs</span><span style={{position:"absolute", right:"15px"}}><VscArrowCircleRight style={{scale:"1.5"}} /></span></h2>
            <Row className="mx-2 row row-cols-5">
                {allNewSongs !== "" ? eachTrack() : null}
            </Row>
        </Container>
    )
}

export default NewSongs;