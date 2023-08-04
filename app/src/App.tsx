import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from './pages/home';
import { Second } from './pages/second';
import './Sass/main.scss';
import { Container } from 'react-bootstrap';
import { Navigation } from './components/navigation';

const pages = [
  { label: 'Home', link: '', visible: true, component: Home, icon: 'dashboard' },
  { label: 'Second', link: '#work', visible: true, component: Second, icon: 'list' },
]


export const App: React.FC = () => {
  
  return (
    <>
    <Navigation pages={pages}/>
    <BrowserRouter>
          <Switch>
            {pages.map((page) => (
              <Route exact path={page.link} key={page.label}>
                {React.createElement(page.component)}
              </Route>
            ))}
          </Switch>
    </BrowserRouter>
    </>
  );
}

export default App;
