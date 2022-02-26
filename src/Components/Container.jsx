import React from "react";
import Logo from '../Images/logo.png';
import './Container.css'
import { Link } from 'react-router-dom'

const Container = ({ children, }) => {
    return (
        <div>
            <header>
                <div className="lf-side">
                    <img className="nav-logo" src={Logo} alt="Logo"/>
                    <nav>
                        <ul className="nav-links">
                            <li><a href="#">All Events</a></li>
                            <li><a href="#">My Events</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="rf-side">
                    <Link to={'/Login'} className="cta"><button>Login / Register</button></Link>
                    <a className="logout-btn" href="#">Logout</a>
                </div>
            </header>
            <div>
                {children}
            </div>
        </div>
    );
}


export default Container