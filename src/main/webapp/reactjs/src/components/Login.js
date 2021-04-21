import React, {Component} from 'react';
import {Row, Col, Form, Card, InputGroup, FormControl,Button} from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignInAlt,faEnvelope,faLock,faUndo} from '@fortawesome/free-solid-svg-icons';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
    }

    initialState = {
        email:'',
        password:'',
    }
    render() {
        const {email, password} = this.state;
        return (
            <Row className={"justify-content-md-center"}>
                <Col xs={5}>
                    <Card className={"border border-dark text-white "}>
                        <Card.Header>
                           <FontAwesomeIcon icon={faSignInAlt}/> Login
                        </Card.Header>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faEnvelope}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete={"off"} type={"text"} name={"email"} value={email}
                                        className={"bg-dark text-white"} placeholder={"Enter Email Address"}/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                            <Form.Row>
                                <Form.Group>
                                    <InputGroup>
                                        <InputGroup.Prepend>
                                            <InputGroup.Text><FontAwesomeIcon icon={faLock}/></InputGroup.Text>
                                        </InputGroup.Prepend>
                                        <FormControl required autoComplete={"off"} type={"text"} name={"password"} value={password}
                                                     className={"bg-dark text-white"} placeholder={"Enter Password"}/>
                                    </InputGroup>
                                </Form.Group>
                            </Form.Row>
                        </Card.Body>
                        <Card.Footer style={{"text-align":"right"}}>
                            <Button size={"sm"} type={"button"} variant={"success"}>
                                <FontAwesomeIcon icon={faSignInAlt} />Login
                            </Button>
                            <Button size={"sm"} type={"button"} variant={"success"}>
                                <FontAwesomeIcon icon={faUndo} />Register
                            </Button>
                        </Card.Footer>
                    </Card>


                </Col>

            </Row>

        );
    }
}

export default Login;