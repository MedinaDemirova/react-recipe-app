import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import { checkIfUser } from "./services/authService";
import UserContext from "./components/contexts/UserContext";

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
    <UserContext.Provider value = {[user,setUser]}>
      <div className="app">

        <Switch>
          <Route path="/auth">
            <MainMenu/>
            <Auth />
          </Route>

          <Route path="/">
            <Recipes/>
          </Route>

          <Route render={() => <Error />} />
        </Switch>

        <Footer />
      </div>
    </UserContext.Provider >
  )
}

export default App;
