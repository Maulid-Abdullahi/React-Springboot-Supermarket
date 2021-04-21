import React, {Component} from 'react';
import {Card,Table,ButtonGroup,Image,Button} from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"
import Success from "./Success";
import {Link} from "react-router-dom";




export default class ItemList extends Component {
    constructor(props) {
        super(props);
        this.state={
            store:[]
        }
    }
    componentDidMount() {
        this.getAllItems();
    }
    getAllItems(){
        axios.get("http://localhost:8080/rest/store")
            .then(response => response.data)
            .then((data) =>{
                this.setState({
                    store:data
                });
            });
    }
    deleteItem=(storeId)=>{
        axios.delete("http://localhost:8080/rest/store/"+storeId)
            .then(response => {

                if(response.data != null){
                    this.setState({show:true});
                    setTimeout(()=>
                        this.setState({show:false}),3000);
                    this.setState({
                        store:this.state.store.filter(stores => stores.id !== storeId)
                    });
                }else {
                    this.setState({show:false});
                }
            })
    }

    render() {
        return (
            <div>
                <div style={{"display":this.state.show ? "block" : "none"}}>
                    <Success show = {this.state.show} message = {"Data Deleted successfully."} type = {"danger"}/>
                </div>
                <Card className={"border border-dark bg-dark text-white"}>
                    <Card.Header ><FontAwesomeIcon icon={faList} /> Item List</Card.Header>
                    <Card.Body>
                        <Table bordered hover striped variant={"dark"}>
                            <thead>
                            <tr>
                                <th>Group</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Expiry</th>
                                <th>Producer</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.store.length === 0 ?
                                <tr align={"center"}>
                                    <td colSpan={6}>{this.state.store.length} Items Available</td>
                                </tr>:
                                this.state.store.map((store)=>(
                                    <tr key={store.id}>
                                        <td>{store.group}</td>
                                        <td><Image src={store.imageUrl} width={28} height={25}/> {store.productName}</td>
                                        <td>{store.price}</td>
                                        <td>{store.expiry}</td>
                                        <td>{store.producer}</td>
                                        <td>
                                            <ButtonGroup >
                                                <Link style={{marginRight:"1em"}} to={"edit/"+store.id} className={"btn btn-sm btn-outline-primary"}><FontAwesomeIcon icon={faEdit}/></Link>{' '}
                                                {/*<Button style={{marginRight:"1em"}}  size={"sm"} variant={"outline-primary"}><FontAwesomeIcon icon={faEdit}/></Button>*/}

                                            </ButtonGroup>
                                            <ButtonGroup>
                                                <Button onClick={this.deleteItem.bind(this,store.id)} size={"sm"} variant={"outline-danger"}><FontAwesomeIcon icon={faTrash}/></Button>
                                            </ButtonGroup>
                                        </td>

                                    </tr>
                                ))

                            }
                            </tbody>

                        </Table>
                    </Card.Body>
                </Card>
            </div>

        );
    }
}
