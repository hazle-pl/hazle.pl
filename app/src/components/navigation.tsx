import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';

interface NavigationProps {
  pages: {
    label: string;
    link: string;
    visible: boolean;
    component: React.FC<{}>;
    icon: string;
  }[];
}

export const Navigation: React.FC<NavigationProps> = ({ pages }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHeaderFixed, setIsHeaderFixed] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0); // New state variable to track previous scroll position
  const location = useLocation();

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsHeaderFixed(scrollY > 0);

      // Check if scrolling down or up
      if (scrollY > prevScrollY && scrollY > 200) {
        document.querySelector('header')?.classList.add('hidden');
      } else {
        document.querySelector('header')?.classList.remove('hidden');
      }

      // Update the previous scroll position
      setPrevScrollY(scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollY]);

  return (
    <header className={isHeaderFixed ? 'fixed' : ''}>
      <div className="header-wrapper">
        <div className="header-content">
          <div className="logo"><a href="/"><img src="/img/hazle-white-logo.svg"/></a></div>
          <a className={`burger ${isActive ? 'active' : ''}`} onClick={handleClick}>
            <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
              <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
            </svg>
          </a>
        </div>
        <nav className={` ${isActive ? 'active' : ''}`}>
          {pages.map((page) => (
            <a
              key={page.link}
              href={page.link}
              className={page.link === location.pathname ? 'active' : ''}
              onClick={handleClick}
            >
              {page.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};
