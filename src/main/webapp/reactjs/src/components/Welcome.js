import React, {Component} from 'react';
import { Jumbotron,Col,Row} from "react-bootstrap";
import { Link } from 'react-router-dom';


const taskCardGray = {
    background: "#F3F3F3 0% 0% no-repeat padding-box",
    borderRadius: "5px",
    opacity: "1",
    padding: "30px",
    margin: "2%",
    height: "280px",
    width: "300px",

     "&:hover": {
        background: "#3598DC",
},
    "&:h5,p,h6":{
        color: "white",
         }

}
const taskCardWhite = {
    background: "#FFFFFF 0% 0% no-repeat padding-box",
    borderRadius: "5px",
}



class Welcome extends Component {
    render() {
        return (
            <Jumbotron style={{backgroundColor:"#FFFFFF", color:"#000000"}}>

                <h1>Welcome to Naivas Portal</h1>
                <p>
                    <h3 style={{fontFamily:"sans-serif", fontSize:"600", fontWeight:"bold", color:"green"}}>Naivas, We care four you.</h3>.
                </p>

                <Row gutter={16}>
                    <Col span={12}>
                        <Link
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to="/add"
                        >
                            <div style={taskCardGray}>
                                <img
                                    className = "taskcard-image"
                                    src="logos/SVG miliki supplier/Device onboarding.svg"
                                    alt="certification-logo"
                                />
                                <h5>Daily Transactions Reports</h5>
                                <p>Select a manufacturer, Device type and other details to complete onboard a device...</p>

                                <h6>Transactions</h6>
                            </div>
                        </Link>
                    </Col>
                    <Col span={12}>
                        <Link
                            style={{ textDecoration: 'none', color: 'inherit' }}
                            to="/add"
                        >
                            <div style={taskCardWhite}>
                                <img
                                    className = "taskcard-image"
                                    src="logos/SVG miliki supplier/Device onboarding.svg"
                                    alt="certification-logo"
                                />
                                <h5>Daily Transactions Reports</h5>
                                <p>Select a manufacturer, Device type and other details to complete onboard a device...</p>

                                <h6>Transactions</h6>
                            </div>
                        </Link>
                    </Col>
                </Row>
           </Jumbotron>


        );
    }
}

export default Welcome;