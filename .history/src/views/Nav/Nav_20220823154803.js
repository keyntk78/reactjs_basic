import React from "react";
import './nav.scss';
import {Link, NavLink} from "react-router-dom";

class Nav extends React.Component{
    render(){
        return(
            <div className="topnav">
                <a className="active" href="/">Home</a>
                <a href="/todo">Todos</a>
                <a href="/about">About</a>
            </div>
        )
    }
}

export default Nav