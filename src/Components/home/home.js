import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {getMovies , searchMovie} from '../../store/actions/moviesAction';
import Movies from '../movies/movies';

import axiosInstance from './../axiosConfig/axiosConfig';

const Home=()=>{
    const api_key="d8a34db4b32a7396e071d7498e0b678d";
    // const favourites = useSelector((state) => state.favourites);

    // const [movies,setMovies]=useState([]);
    var [counter,setCounter]=useState(1);
    var [searchText,setSearchText]=useState("");


    const dispatch = useDispatch();
    const movies = useSelector((state) => state.movies);

    const changeHandler=(e)=>{
        setSearchText(e.target.value);
    }
    const PrevBtnHandle=(e)=>{
        e.target.disabled=false;
        document.getElementById("next-btn").disabled=false;
        setCounter(--counter);
        console.log(counter);
    }
    const NextBtnHandle=(e)=>{
        e.target.disabled=false;
        document.getElementById("prev-btn").disabled=false;
        setCounter(++counter);
        console.log(counter);    
    }
    useEffect(()=>{
        if(searchText==="")
        {
            dispatch(getMovies(counter));
            if(counter<2)
            {
                document.getElementById("prev-btn").disabled=true;
            }
        }
        else{
            dispatch(searchMovie(searchText))
        }
    },[counter,searchText])
    
    return(
        <Container className='my-3'>
            <Row style={{justifyContent:'center'}}>
            <Form className="d-flex col-5">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>{changeHandler(e)}}
                />
            </Form>
            </Row>
            <Row>
            {
                movies.map((movie) => {
                    return (
                        <Movies key={movie.id} movieObj={movie} page={true}></Movies>
                    )
                })
            }
            </Row>
            <div style={{marginTop:20,display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
            <Button style={{backgroundColor:'#212529',borderColor:'white'}} id="prev-btn" onClick={(e)=>{PrevBtnHandle(e)}}>Prev</Button>
            <Button style={{backgroundColor:'#212529' ,borderColor:'white'}} id="next-btn" onClick={(e)=>{NextBtnHandle(e)}}>Next</Button>
            </div>
        </Container>
    )
}

export default Home