import { Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import Movies from "../movies/movies";

const Favourites =()=>{
    var favourites = useSelector((state) => state.fav.favourites);
    return(
        <Container>
        <h1 className='text-center'>Favourite Movies</h1>
        <Row>
            {
                favourites.map((movie) => {
                    // var status=false;
                    // if(favourites.includes(movie))
                    // {
                    //     status=true;
                    // }
                    return (
                        <Movies key={movie.id} movieObj={movie} page={false}></Movies>
                    )
                })
            }
        </Row>
        </Container>
    )
}
export default Favourites