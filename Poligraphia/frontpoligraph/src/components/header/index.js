import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/main">
                    <a><img src="/logo192.png" alt="" width="50" height="50"
                        className="d-inline-block align-top App-logo"/> </a></Link>
                <button className="navbar-toggler" type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"
                                to="/main">Головна</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"
                                to="/neworder">Замовити</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"
                                to="/orders">Список замовлень</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page"
                                to="/contacts">Контакти</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
export default Header