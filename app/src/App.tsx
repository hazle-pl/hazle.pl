import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Home } from './pages/home';
import { Second } from './pages/second';
import Login from './components/login';
import './Sass/main.scss';

const pages = [
  { label: 'Home', link: '/', visible: true, component: Home, icon: '' },
  { label: 'Work', link: '/second', visible: true, component: Second, icon: '' },
  { label: 'Contact Us', link: '/contact-us', visible: true, component: Second, icon: '' },
];

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
          <Navigation pages={pages} />
          <Switch>
            {pages.map((page) => (
              <Route exact path={page.link} key={page.label} component={page.component} />
            ))}
          </Switch>
        </>
      )}
    </BrowserRouter>
  );
};

export default App;