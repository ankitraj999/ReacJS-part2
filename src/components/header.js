
import React from 'react'

import { Link } from 'react-router-dom';

export const Header = () => {

    return (

        <nav className="navbar navbar-expand-lg navbar-light bg-dark">

            <div className="container-fluid">
                <div className="navbar-header">
                    <Link className="navbar-brand" to="/">Brand</Link>
                </div>
                <div>

                    <ul className="nav navbar-nav">
                        <li className="active"><Link to="/">Home
                            <span className="sr-only"> </span>
                        </Link></li>
                        <li><Link to="/home">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/forms">Forms</Link></li>
                        <li><Link to="/formdemo">Form Demo</Link></li>
                        <li><Link to="/refdemo">Reference Demo</Link></li>
                        <li><Link to="/addInlist">Add In List</Link></li>
                        <li><Link to="/lifecycle">LifeCycle</Link></li>
                       

                    </ul>

                   

                </div>

            </div>

        </nav>

    );

}


export default Header;