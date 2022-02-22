import { Badge, Container, Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux";
import { Link } from "react-router-dom"
// import { languageContext } from "../../context/languageContext";
import imagePath from '../../assets/webLogo.png'

const NavBar = () => {
    const favCount = useSelector((state) => state.fav.favourites.length);
    
    // const {lang,setLang} = useContext(languageContext)
    // const toggleLanguage=()=>{
    //     setLang(lang==="EN"?"AR":"EN");
    // };
    return (
        <>
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand ><img src={imagePath} alt="moviegallery" width='50%'/></Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Link className="nav-link" to="/">Movies</Link>
                    <Link className="nav-link" to="/favourites">Favourites<Badge pill bg="warning">{favCount}</Badge></Link>
                    </Nav>
                    <Nav
                        className="ms-5 my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    <Link className="nav-link" to="/signup">Login</Link>
                    <Link className="nav-link" to="/signup">Register</Link>
                    </Nav>
                    {/* <div><Badge onClick={()=>{toggleLanguage()}} bg="secondary" style={{cursor:"pointer"}}>{lang}</Badge></div> */}
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}
export default NavBar