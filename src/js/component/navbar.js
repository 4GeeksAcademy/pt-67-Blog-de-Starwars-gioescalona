import { useContext } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
    const { store, actions } = useContext(Context);

    const handleLogout = () => {
        actions.logoutUser(); //autenticacion y logout del proyecto de Sistema de Autenticación con Python, Flask y React
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-black opacity-75 rounded-5 rounded-top border border-light-subtle p-3">
            <div className="container-fluid">

                <Link className="navbar-brand d-flex align-items-center" to="/">
                    <img className="logo me-2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTX6MK34zw_YfhT1F26_4dFyF5Rc8v8_ZexPg&s" alt="Star Wars Logo" />
                    
                </Link>

                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav ms-auto d-flex align-items-center">

                        {/* Character Favorites */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle btn btn-black fw-bold me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Characters Favorites ({store.charactersfavorist.length})
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end bg-light">
                                {store.charactersfavorist.map((item, index) => (
                                    <li className="d-flex justify-content-between align-items-center px-2" key={index}>
                                        <Link to={`/charactersInfo/${item.id}`} className="dropdown-item bg-light fw-bold">{item.name}</Link>
                                        <button className="btn btn-sm btn-danger ms-2" onClick={() => actions.deleteCharacters(item)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Vehicle Favorites */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle btn btn-black fw-bold me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Vehicles Favorites ({store.vehiclesfavorist.length})
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end bg-light">
                                {store.vehiclesfavorist.map((item, index) => (
                                    <li className="d-flex justify-content-between align-items-center px-2" key={index}>
                                        <Link to={`/vehiclesInfo/${item.id}`} className="dropdown-item bg-light fw-bold">{item.name}</Link>
                                        <button className="btn btn-sm btn-danger ms-2" onClick={() => actions.deleteVehicles(item)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Planet Favorites */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle btn btn-black fw-bold" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Planets Favorites ({store.planetsfavorist.length})
                            </a>
                            <ul className="dropdown-menu dropdown-menu-end bg-light">
                                {store.planetsfavorist.map((item, index) => (
                                    <li className="d-flex justify-content-between align-items-center px-2" key={index}>
                                        <Link to={`/planetsInfo/${item.id}`} className="dropdown-item bg-light fw-bold">{item.name}</Link>
                                        <button className="btn btn-sm btn-danger ms-2" onClick={() => actions.deletePlanets(item)}>
                                            <i className="fa-solid fa-trash-can"></i>
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* User Authentication */}
                        <li className="nav-item dropdown">
                            {store.isAuthenticated ? (
                                <>
                                    <a className="nav-link dropdown-toggle btn btn-light fw-bold me-3" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {store.user?.username || 'User'}
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-end bg-light">
                                        <li className="d-flex justify-content-between align-items-center px-2">
                                            <Link to="/profile" className="dropdown-item bg-light fw-bold">Profile</Link>
                                        </li>
                                        <li className="d-flex justify-content-between align-items-center px-2">
                                            <button className="btn btn-sm btn-danger ms-2" onClick={handleLogout}>
                                                Logout
                                            </button>
                                        </li>
                                    </ul>
                                </>
                            ) : (
                                <>
                                    <Link className="btn btn-outline-light fw-bold me-2" to="/login">
                                        Login
                                    </Link>
                                   
                                </>
                            )}
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    );
};
