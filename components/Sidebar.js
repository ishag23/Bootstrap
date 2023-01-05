import React, { useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';



const Sidebar = () => {
  const [show, setShow] = useState(false);

  return (
    <main className={show ? 'space-toggle' : null}>
      <header className={`header ${show ? 'space-toggle' : null}`}>
        <div className='header-toggle' onClick={() => setShow(!show)}>
          <i className={`fas fa-bars ${show ? 'fa-solid fa-xmark' : null}`}></i>
        </div>
      </header>

      <aside className={`sidebar ${show ? 'show' : null}`}>
        <nav className='nav'>
          <div>
            <Link to='/' className='nav-logo'>
              <i className={`fas fa-home-alt nav-logo-icon`}></i>
              <span className='nav-logo-name'>Display</span>
            </Link>

            <div className='nav-list'>
              <Link to='/dashboard' className='nav-link active'>
                <i className='fas fa-tachometer-alt nav-link-icon'></i>
                <span className='nav-link-name'>Dashboard</span>
              </Link>
              <Link to='/' className='nav-link'>
                <i className='fas fa-hotel nav-link-icon'></i>
                <span className='nav-link-name'>Home</span>
              </Link>
              <Link to='/contact' className='nav-link'>
                <i className='fas fa-image nav-link-icon'></i>
                <span className='nav-link-name'>Contact</span>
              </Link>
            
            </div>
          </div>

          <Link to='/login' className='nav-link'>
            <i className='fas fa-sign-out nav-link-icon'></i>
            <span className='nav-link-name'>Logout</span>
          </Link>
        </nav>
      </aside>

    </main>
  );
};

export default Sidebar;