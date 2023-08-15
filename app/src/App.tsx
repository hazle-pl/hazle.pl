import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Footer } from './components/footer';
import {navigation} from './routes.js';
import {routes} from './routes.js';
import Login from './components/login';
import './Sass/main.scss';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => localStorage.getItem('isLoggedIn') === 'true' 
  );

  const handleLogin = (username: string, password: string) => {
    if (username === 'admin' && password === 'admin') {
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true'); // Save the login status in localStorage
    }
  };

  return (
    <BrowserRouter>
      {window.location.href.includes('preprod') && !isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Navigation pages={navigation} />
          <Switch>
            {routes.map((route) => (
              <Route exact path={route.link} key={route.label} component={route.component} />
            ))}
          </Switch>
          <Footer />
        </>
      )}
    </BrowserRouter>
  );
};

export default App;