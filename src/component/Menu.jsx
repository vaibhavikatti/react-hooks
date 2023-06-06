import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu(props){
    return(
        <nav className="navbar navbar-expand-md navbar-dark bg-success">
            <div className="container">
                <NavLink to={`/`} className={"navbar-brand"}>React hooks</NavLink>
                <button className="navbar-toggler" data-bs-toggle="collpase" data-bs-target="#menu">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id='menu'>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink to={"/ex1"} className="nav-link">Ex-1</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/ex2"} className="nav-link">Ex-2</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/ex3"} className="nav-link">Ex-3</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to={"/ex4"} className="nav-link">Ex-4</NavLink>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}



export default Menu