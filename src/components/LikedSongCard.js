import { Card, Button } from "react-bootstrap";

const LikedSongCard = ({ song, handleRemoveLike }) => {

    return (
        <Card>
            <Card.Body>
            <Card.Img src={song.image} />
                <Card.Title>{song.song_name}</Card.Title>
                <Card.Text>{song.artists}</Card.Text>
            </Card.Body>
            <Button onClick={() => handleRemoveLike(song)}>Remove From Likes</Button>
            <video controls name="media">
                <source src={song.preview_url} alt="no preview available" type="audio/mp3" />
            </video>
        </Card>
        )
}

export default LikedSongCard;