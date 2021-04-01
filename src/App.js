import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { checkIfUser } from "./services/authService";

//Components
import Recipes from './components/Recipes/Recipes';
import Footer from './components/footer/Footer';
import Error from "./components/Error";
import MainMenu from "./components/menu/MainMenu";
import Auth from "./components/Auth/Auth";


const App = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    setUser(checkIfUser())
  }, []);


  return (
    <div className="app">

      <Switch>
        <Route path="/auth">
          <MainMenu 
          user = {user}
          setUser= {setUser}
          />
          <Auth
            setUser={setUser}
          />
        </Route>

        <Route path="/">
          <Recipes 
          user = {user}
          setUser= {setUser}
          />
        </Route>

        <Route render={() => <Error />} />
      </Switch>

      <Footer />
    </div>
  )
}

export default App;
