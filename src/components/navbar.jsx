import React from 'react';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    return (
        <>
            <div className="container-fluid p-0">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
                    <div className="container-fluid">
                        <NavLink exact to="/" className="navbar-brand">Navbar</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav ">
                                <NavLink className="nav-link " activeClassName="text-danger" exact to="/">Home</NavLink>
                                <NavLink className="nav-link" activeClassName="text-danger" exact to="/about">About</NavLink>
                                <NavLink className="nav-link" activeClassName="text-danger" exact to="/contant">Contant</NavLink>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;
