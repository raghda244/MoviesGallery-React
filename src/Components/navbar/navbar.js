import { useContext, useState } from "react"
import { Badge, Button, Container, Form, FormControl, Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
import { languageContext } from "../../context/languageContext";

const NavBar = () => {
    const favCount = useSelector((state) => state.fav.favourites.length);
    
    const {lang,setLang} = useContext(languageContext)
    const toggleLanguage=()=>{
        setLang(lang=="EN"?"AR":"EN");
    };
    return (
        <>
        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Link className="nav-link" to="/">Movies</Link>
                    <Link className="nav-link" to="/favourites">Favourites<Badge bg="secondary">{favCount}</Badge></Link>
                    </Nav>
                    <Nav
                        className="ms-5 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Link className="nav-link" to="/signup">Login</Link>
                    <Link className="nav-link" to="/signup">Register</Link>
                    </Nav>
                    <div><Badge onClick={()=>{toggleLanguage()}} bg="secondary" style={{cursor:"pointer"}}>{lang}</Badge></div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}
export default NavBar