import React, {Component} from 'react';
import {Card, Form, Button,Col} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlusSquare, faSave,faUndo,faList,faEdit} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Success from"./Success";

export default class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = this.initialState;
        this.state.show = false;
        this.onChange = this.onChange.bind(this);
        this.submitItems = this.submitItems.bind(this);
    }
    initialState = {
        id:'',
        group:'',
        productName:'',
        price:'',
        expiry:'',
        imageUrl:'',
        producer:'',
    }

    componentDidMount() {
        const storeId = +this.props.match.params.id;
        if(storeId){
            this.findItemById(storeId);
        }
    }
    findItemById = (storeId) =>{
        axios.get("http://localhost:8080/rest/store/"+storeId)
            .then(response =>{
                if(response.data != null){
                    this.setState({
                        id:response.data.id,
                        group:response.data.group,
                        productName:response.data.productName,
                        price:response.data.price,
                        expiry:response.data.expiry,
                        imageUrl:response.data.imageUrl,
                        producer:response.data.producer
                    })
                }

            }).catch((error)=>{
            console.log("Error -",error)
        })

    }

    submitItems = (e) =>{
        e.preventDefault();
        const store = {
            group: this.state.group,
            productName: this.state.productName,
            price: this.state.price,
            expiry: this.state.expiry,
            imageUrl: this.state.imageUrl,
            producer: this.state.producer,
        }

        axios.post("http://localhost:8080/rest/store", store)
            .then(response =>{
                if(response.data != null){
                    this.setState({show:true,"method":"post"});
                    setTimeout(()=>
                        this.setState({show:false}),3000);
                }else {
                    this.setState({show:false});
                }
            });
        this.setState(this.initialState);
    }
    updateItem = (event) => {
        event.preventDefault();
        const store = {
            id:this.state.id,
            group: this.state.group,
            productName: this.state.productName,
            price: this.state.price,
            expiry: this.state.expiry,
            imageUrl: this.state.imageUrl,
            producer: this.state.producer,
        }

        axios.put("http://localhost:8080/rest/store",store)
            .then(response =>{
                if(response.data != null){
                    this.setState({show:true, "method":"put"});
                    setTimeout(()=>
                        this.setState({show:false}),3000);
                    setTimeout(()=>
                        this.setState(this.itemList()),3000);
                }else {
                    this.setState({show:false});
                }
            });
        this.setState(this.initialState);

    }


    resetForm = ()=>{
        this.setState(()=> this.initialState)

    }
    onChange = (eve)=>{
        this.setState({
            [eve.target.name]:eve.target.value
        })}

    itemList = ()=>{
        return this.props.history.push("/list");
    }
    render() {
        const {group,productName,price,expiry,imageUrl,producer} = this.state;
        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <Success show={this.state.show} message = {this.state.method === "put" ? "Data Updated Successfully" :"Data saved successfully."} type = {"success"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header><FontAwesomeIcon icon={this.state.id ? faEdit : faPlusSquare} />{this.state.id ? "Update Item" : "Add Item"}</Card.Header>
                    <Form onReset={this.resetForm} onSubmit={this.state.id ? this.updateItem : this.submitItems} id={"ItemFormId"}>
                        <Card.Body>
                            <Form.Row>
                                <Form.Group as={Col} controlId={"formGridGroup"}>
                                    <Form.Label>Group</Form.Label>
                                    <Form.Control required type="text"
                                                  autoComplete="off"
                                                  name={"group"}
                                                  value={group}
                                                  onChange={this.onChange}
                                                  placeholder="Enter Item group"
                                                  className={"bg-dark text-white"} />
                                </Form.Group>
                                <Form.Group as={Col}  controlId={"formGridProductName"}>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control required type="text" name={"productName"}
                                                  autoComplete="off"
                                                  value={productName}
                                                  onChange={this.onChange}
                                                  placeholder="Enter Item Name"
                                                  className={"bg-dark text-white"} />
                                </Form.Group>

                            </Form.Row>
                            <Form.Row>
                                <Form.Group as={Col} controlId={"formGridPrice"}>
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control required type="number" name={"price"}
                                                  autoComplete="off"
                                                  value={price}
                                                  onChange={this.onChange}
                                                  placeholder="Enter Item price"
                                                  className={"bg-dark text-white"} />
                                </Form.Group>
                                <Form.Group as={Col} controlId={"formGridExpiry"}>
                                    <Form.Label>Expiry</Form.Label>
                                    <Form.Control required type="text" name={"expiry"}
                                                  autoComplete="off"
                                                  value={expiry}
                                                  onChange={this.onChange}
                                                  placeholder="Enter Expiry Date"
                                                  className={"bg-dark text-white"} />
                                </Form.Group>
                            </Form.Row>

                            <Form.Row>
                                <Form.Group as={Col} controlId={"formGridImageUrl"}>
                                    <Form.Label>Photo</Form.Label>
                                    <Form.Control required type="Url" name={"imageUrl"}
                                                  autoComplete="off"
                                                  value={imageUrl}
                                                  onChange={this.onChange}
                                                  placeholder="Enter photo"
                                                  className={"bg-dark text-white"} />
                                </Form.Group>
                                <Form.Group as={Col} controlId={"formGridProducer"}>
                                    <Form.Label>Producer</Form.Label>
                                    <Form.Control required type="text"  name={"producer"}
                                                  autoComplete="off"
                                                  value={producer}
                                                  onChange={this.onChange}
                                                  placeholder="Enter producer"
                                                  className={"bg-dark text-white"} />
                                </Form.Group>
                            </Form.Row>

                        </Card.Body>
                        <Card.Footer style ={{textAlign:"right"}}>
                            <Button size={"sm"} variant="success" type="submit">
                                <FontAwesomeIcon icon={faSave} />{this.state.id ? "Update" : "Save"}</Button>{' '}
                            <Button size={"sm"} variant="info" type="reset">
                                <FontAwesomeIcon icon={faUndo} /> Reset
                            </Button>{' '}
                            <Button size={"sm"} variant="info" type="button" onClick={this.itemList.bind()}>
                                <FontAwesomeIcon icon={faList} /> Item List
                            </Button>
                        </Card.Footer>
                    </Form>
                </Card>
            </div>



        );
    }
}
