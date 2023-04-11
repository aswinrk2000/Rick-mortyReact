import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import '../../App.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
            <div className="container">
                <Link to="/" className="fs-3 Segoe-UI navbar-brand">
                    Rick & Morty <span className="text-danger">Guide</span>
                </Link>
                <button
                 className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                        <style jsx>
                            {`
                            button[aria-expanded="false"] > .close {
                                display:none;
                            
                            }
                            button[aria-expanded="false"] > .open {
                                display:none;
                            }
                            `}
                        </style>

<i class="fa-solid fa-bars open text-dark"></i>
<i class="fa-sharp fa-solid fa-x close text-dark"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <NavLink activeClassName="active" to="/" className="nav-link active" aria-current="page" >Characters</NavLink>
                        <NavLink to="/episodes" className="nav-link" >Episodes</NavLink>
                        <NavLink to="/location" className="nav-link" >Location</NavLink>

                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar