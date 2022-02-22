import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useParams } from "react-router-dom";
import axiosInstance from './../axiosConfig/axiosConfig';

const MovieDetails = () => {
    const params = useParams();
    const api_key = "d8a34db4b32a7396e071d7498e0b678d";

    const [movie, setMovie] = useState({});
    useEffect(() => {
        axiosInstance
            .get(`/movie/${params.id}?api_key=${api_key}`)
            .then((res) => setMovie(res.data))
            .catch((err) => console.log(err));
    }, [params.id]);


    return (
        <div className="d-flex flex-row my-5 mx-auto col-10 details-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} className="col-4" alt={movie.original_title} />
            <Card style={{ backgroundColor: '#212529', color: 'white', textAlign: 'center', opacity: 0.8, padding: '10%'}}>
                <Card.Title><h1>{movie.original_title}</h1></Card.Title>
                <Card.Text>{movie.overview}</Card.Text>
                <Card.Text>
                    {movie.release_date}
                </Card.Text>
                <Card.Text>{movie.vote_average}<i className="bi bi-star-fill" style={{ color: "yellow" }}></i></Card.Text>
            </Card>
        </div>
    );
}
export default MovieDetails