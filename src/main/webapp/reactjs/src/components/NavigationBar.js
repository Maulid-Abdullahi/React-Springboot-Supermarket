import React from "react";
import {Navbar, Nav} from "react-bootstrap";
import NavLink, {Link} from "react-router-dom";
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
                    <Link to={"login"} className={"nav-link"}>Login</Link>
                    <Link to={"register"} className={"nav-link"}>Register</Link>

                </Nav>
            </Navbar>
        );
    }
}
export default NavigationBar;