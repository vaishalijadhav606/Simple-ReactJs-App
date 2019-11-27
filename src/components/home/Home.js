import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { Button, Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import './Home.scss';
import axios from 'axios';
import CustomerDetails from './CustomerDetails'

export class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            selectedCustomer : 1
        }
    }

     //function which is called the first time the component loads
    componentDidMount() {
        this.getCustomerData();
    }

    //Function to get the Customer Data from json
    getCustomerData(){
        axios.get('assets/samplejson/customerlist.json').then(response => {
            this.setState({customerList : response})
        })
    }

    render() {
        if(!this.state.customerList)
            return (<p>Loading data</p>)
        return (
            <div className="addmargin">
                <Container>
                    <div>
                        <Row>
                            <Col sm={3}>{
                            this.state.customerList.data.map(customer => 
                                <div key={customer.id} className="panel panel-info">
                                    <div className="panel-heading">
                                        <h3 className="panel-title text-center">{customer.name}</h3>
                                    </div>
                                    <div className="panel-body text-center">
                                        <p>{customer.email}</p>
                                        <p>{customer.phone}</p>
                                        <Button className="btn btn-info" onClick={() => this.setState({selectedCustomer: customer.id})}>
                                            Click to view Details
                                        </Button>
                                    </div>
                                    </div>
                                )
                            }
                            </Col>
                            <Col sm={9}>
                                    <CustomerDetails val={this.state.selectedCustomer} />
                            </Col>
                        </Row>
                    </div>
                </Container>
            </div>
        )
    }
}

export default Home
