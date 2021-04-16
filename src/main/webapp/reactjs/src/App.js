import './App.css';
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import {Container, Row,Col} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import ItemList from "./components/ItemList";


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
                        <Route path={"/list"} exact component={ItemList} />
                    </Switch>
                </Col>
            </Row>
        </Container>
        <Footer/>
    </Router>
  );
}

export default App;
