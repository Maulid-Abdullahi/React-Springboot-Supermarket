import './App.css';
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Container, Row,Col} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";
import Register from "./components/Register";
import Login from "./components/Login";


function App() {
    const MarginTop ={
        marginTop:"20px"
    }
  return (

    <Router>
        <NavigationBar/>
        <Container>
            <Row>
                <Col ls={12} style={MarginTop} >
                    <Switch>
                        <Route path={"/"} exact component={Welcome} />
                        <Route path={"/add"} exact component={AddItem} />
                        <Route path={"/edit/:id"} exact component={AddItem} />
                        <Route path={"/list"} exact component={ItemList} />
                        <Route path={"/register"} exact component={Register} />
                        <Route path={"/login"} exact component={Login} />

                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
