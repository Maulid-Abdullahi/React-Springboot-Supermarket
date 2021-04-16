import React, {Component} from 'react';
import {Navbar, Col, Container} from "react-bootstrap";

class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
          <Navbar fixed={"bottom"} bg={"dark"} variant={"dark"}>
              <Container>
              <Col lg={12} className={"text-center text-muted"} >
                  <div>{fullYear}-{fullYear+1}, All rights reserved by Maulid-Abdullahi</div>
              </Col>
              </Container>

          </Navbar>
        );
    }
}

export default Footer;