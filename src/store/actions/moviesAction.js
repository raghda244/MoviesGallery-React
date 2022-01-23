import axiosInstance from "../../Components/axiosConfig/axiosConfig";

export default function getMovies(counter){

    const api_key="d8a34db4b32a7396e071d7498e0b678d";
    return (dispatch)=>{
        axiosInstance
        .get(`/movie/popular?api_key=${api_key}&page=${counter}`)
        .then((res)=>dispatch({type:"SET_MOVIES",payload:res.data.results})) 
        .catch((err) => console.log(err));
    }
}