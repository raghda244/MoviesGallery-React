import logo from './logo.svg';
import './App.css';
import NavBar from './Components/navbar/navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Components/home/home';
import MovieDetails from './Components/movies/movieDetails';
import FormObject from './Components/form/form';
import Favourites from './Components/favourite/favourite';
import { languageContext, LanguageProvider } from './context/languageContext';
import { useContext, useState } from 'react';
function App() {

  const [lang,setLang] = useState("EN");

  return (
    <>
      <Router>
        <LanguageProvider value={{lang,setLang}}>
          <div dir={lang=="EN"?"ltr":"rtl"}>
          <NavBar />
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/movie-details/:id" exact component={MovieDetails} />
            <Route path="/signup" exact component={FormObject} />
            <Route path="/favourites" exact component={Favourites} />
          </Switch>
          </div>
        </LanguageProvider>
      </Router>
    </>
  );
}

export default App;
