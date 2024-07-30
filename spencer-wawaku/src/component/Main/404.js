import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './MainSass/index_main.css';

const NotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 10000); // Redirects after 10 seconds

    return () => clearTimeout(timer); // Cleanup the timer
  }, [navigate]);

  return (
    <div className="not-found">
      <div className="not-found__content">
        <h1 className="not-found__title">404</h1>
        <p className="not-found__message">Oops! The page you are looking for does not exist.</p>
        <p className="not-found__redirect">Redirecting to the homepage...</p>
      </div>
    </div>
  );
};

export default NotFound;
