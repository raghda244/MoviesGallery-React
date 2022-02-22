import { useEffect, useState } from "react"
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AddFavourite , RemoveFavourite } from "../../store/actions/FavouriteAction";

const Movies=(props)=>{
    const favourites = useSelector((state) => state.fav.favourites);
    const movie=props.movieObj;
    var [iconName,setIconName]=useState(favourites.includes(movie)?"bi bi-star-fill ":"bi bi-star ");
    var [iconColor,setIconColor]=useState("yellow");

    const dispatch = useDispatch();
    const toggleIcon = () => {
        if(favourites.includes(movie))
        {
            dispatch(RemoveFavourite(movie));
            setIconName("bi bi-star");
        }
        else
        {
            dispatch(AddFavourite(movie));
            setIconName("bi bi-star-fill");
        }
    };
    useEffect(()=>{
        if(props.page===false)
        {
            setIconName("bi bi-trash-fill");
            setIconColor("red");
        }
    },[props.page])
    
    return(
        <>
        <Card className="col-3 p-0 g-5" style={{backgroundColor:'#212529',color:'white'}}>
        <Link to={`/movie-details/${movie.id}`}>
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} />
        </Link>
        <Card.ImgOverlay  style={{height:"fit-content"}}>     
        <div
        onClick={() => {
            toggleIcon();
          }}
        >
        <i className={iconName}  style={{color:iconColor,fontSize:"2rem",cursor:"pointer"}}></i>
        </div> 
        </Card.ImgOverlay>
        <Card.Body style={{textAlign:'center'}}>
            <Card.Title><strong>{movie.original_title}</strong></Card.Title>
        </Card.Body>
        <Card.Footer style={{textAlign:'center'}}>
            {movie.release_date}
        </Card.Footer>
        </Card>
        </>
    )
}
export default Movies