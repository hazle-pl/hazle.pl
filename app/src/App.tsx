import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/navigation';
import { Home } from './pages/home';
import { Second } from './pages/second';
import './Sass/main.scss';

const pages = [
  { label: 'Home', link: '/', visible: true, component: Home, icon: 'ss' },
  { label: 'Work', link: '/second', visible: true, component: Second, icon: 'ss' },
];

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navigation pages={pages} />
      <Switch>
        {pages.map((page) => (
          <Route exact path={page.link} key={page.label} component={page.component} />
        ))}
      </Switch>
    </BrowserRouter>
  );
};

export default App;
