import React from 'react'

function Navigation() {
    return (
        <div>
            <nav className="navbar  navbar-expand-lg navbar-dark shadow-5-strong">
  <div className="container-fluid">
    <a className="navbar-brand " href="landing">Todo</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
       
        <li className="nav-item">
          <a className="nav-link" href="register">Register</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="login">Login</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="about">About</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
        </div>
    )
};

export default Navigation
