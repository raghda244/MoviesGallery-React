import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Movies from "../movies/movies";

const Favourites = () => {
    var favourites = useSelector((state) => state.fav.favourites);
    return (
        <Container>
            {favourites.length !== 0 && (
                <Row>
                    <h1 className='text-center text-white'>Favourite Movies</h1>
                    {
                        favourites.map((movie) => {
                            return (
                                <Movies key={movie.id} movieObj={movie} page={false}></Movies>
                            )
                        })
                    }
                </Row>
            )
            }
            {favourites.length === 0 && (
                <h1 className="text-center my-5 text-white">You haven't added any movies to your favourites</h1>
            )

            }
        </Container>
    )
}
export default Favourites