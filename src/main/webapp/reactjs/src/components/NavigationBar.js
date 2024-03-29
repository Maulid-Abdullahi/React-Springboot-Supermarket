import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import NavLink, {Link} from "react-router-dom";
import {faSignInAlt, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
class NavigationBar extends  React.Component{
    render() {
        return(
            <Navbar bg="dark" variant="dark">
                <Link to={""} className={"navbar-brand"}>
                    <img src="https://iconape.com/wp-content/files/tx/300843/svg/300843.svg " height={24}  alt={"brand"}/> SuperMarket

                </Link>
                <Nav className="mr-auto">
                    <Link to={"add"} className={"nav-link"}>Add Item</Link>
                    <Link to={"list"} className={"nav-link"}>List of Items</Link>
                </Nav>
                <Nav className={"navbar-right"}>
                    <Link to={"login"} className={"nav-link"}><FontAwesomeIcon icon={faUserPlus} /> Login</Link>
                    <Link to={"register"} className={"nav-link"}><FontAwesomeIcon icon={faSignInAlt} /> Register</Link>

                </Nav>
            </Navbar>
        );
    }
}
export default NavigationBar;