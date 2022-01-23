import { useEffect, useState } from "react";
import { Card, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from './../axiosConfig/axiosConfig';

const MovieDetails=()=>{
    const params = useParams();
    const api_key="d8a34db4b32a7396e071d7498e0b678d";

    const [movie, setMovie] = useState({});
    useEffect(() => {
        axiosInstance
        .get(`/movie/${params.id}?api_key=${api_key}`)
        .then((res) => setMovie(res.data))
        .catch((err) => console.log(err));
    }, []);


    return (
        <Row className="col-5 mx-auto my-5">
        <Card className="mx-auto p-0">
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        <Card.Body>
            <Card.Title><h1>{movie.original_title}</h1></Card.Title>
            <Card.Text>{movie.overview}</Card.Text>
            <Card.Text>
            {movie.release_date}
            </Card.Text>
            <Card.Text>{movie.vote_average}<i className="bi bi-star-fill" style={{color:"yellow"}}></i></Card.Text>
        </Card.Body>
        </Card>
        </Row>

    );
}
export default MovieDetails