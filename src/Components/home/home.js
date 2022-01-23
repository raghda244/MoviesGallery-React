import React, { useEffect, useState } from 'react';
import { Button, Container, Form, FormControl, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import getMovies from '../../store/actions/moviesAction';
import Movies from '../movies/movies';

import axiosInstance from './../axiosConfig/axiosConfig';

const Home=()=>{
    const api_key="d8a34db4b32a7396e071d7498e0b678d";
    // const favourites = useSelector((state) => state.favourites);

    // const [movies,setMovies]=useState([]);
    var [counter,setCounter]=useState(1);
    var [searchText,setSearchText]=useState({});


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

    //search movies
    // useEffect(()=>{
    //     axiosInstance.get(`/search/movie?api_key=${api_key}&query=${searchText}`)
    //     .then((res) => {
    //         setMovies(res.data.results);
    //     })
    //     .catch((err) => console.log(err));
    // },[searchText]);

    // get all movies with pagination
    // useEffect(()=>{
    //     axiosInstance.get(`/movie/popular?api_key=${api_key}&page=${counter}`)
    //     .then((res) => {
    //         setMovies(res.data.results);
    //         if(counter<2)
    //         {
    //             document.getElementById("prev-btn").disabled=true;
    //         }
    //     }) 
    //     .catch((err) => console.log(err));
    // },[counter]);

    useEffect(()=>{
        dispatch(getMovies(counter));
        if(counter<2)
        {
            document.getElementById("prev-btn").disabled=true;
        }
    },[counter])
    return(
        <Container className='my-3'>
            <Row>
            <Form className="d-flex">
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                    onChange={(e)=>{changeHandler(e)}}
                />
                <Button variant="outline-success">Search</Button>
            </Form>
            </Row>
            <h1 className='text-center'>Movies</h1>
            <Row>
            {
                movies.map((movie) => {
                    // var status=false;
                    // if(favourites.includes(movie))
                    // {
                    //     status=true;
                    // }
                    return (
                        <Movies key={movie.id} movieObj={movie} page={true}></Movies>
                    )
                })
            }
            </Row>
            <Button id="prev-btn" onClick={(e)=>{PrevBtnHandle(e)}}>Prev</Button>
            <Button id="next-btn" onClick={(e)=>{NextBtnHandle(e)}}>Next</Button>
        </Container>
    )
}

export default Home