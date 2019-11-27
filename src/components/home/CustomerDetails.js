import React, { Component } from 'react'
import axios from 'axios'

export class CustomerDetails extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    //Function which is called when the component loads for the first time
    componentDidMount(){
        this.getCustomerDetails(this.props.val)
    }

    //Function which is called whenver the component is updated
    componentDidUpdate(prevProps){
        //get Customer Details only if props has changed
        if(this.props.val !== prevProps.val){
            this.getCustomerDetails(this.props.val)
        }
    }

    //Function to Load the customerdetails data from json.
    getCustomerDetails(id){
        axios.get('assets/samplejson/customer' + id + '.json').then(response => {
            this.setState({customerDetails: response})
        })
    }


    render() {
        if(!this.state.customerDetails)
            return(<p>Loading data</p>)
        return (
            <div className="customerdetails">
            <div className="panel panel-info">
                <div className="panel-heading">
                    <h3 className="panel-title text-center">{this.state.customerDetails.data.name}</h3>
                </div>
                <div className="panel-body text-center">
                    <p>Name: {this.state.customerDetails.data.name}</p>
                    <p>Email: {this.state.customerDetails.data.email}</p>
                    <p>Phone: {this.state.customerDetails.data.phone}</p>
                    <p>City: {this.state.customerDetails.data.city}</p>
                    <p>State: {this.state.customerDetails.data.state}</p>
                    <p>Country: {this.state.customerDetails.data.country}</p>
                    <p>Orgnization: {this.state.customerDetails.data.organization}</p>
                    <p>Job Profile: {this.state.customerDetails.data.jobProfile}</p>
                    <p>Additional Info: {this.state.customerDetails.data.additionalInfo}</p>
                </div>
                </div>
            </div>
        )
    }
}

export default CustomerDetails
