import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Clients.css';
// import { Container } from "react-bootstrap";



const Customer = () => {

    const [customers, setCustomers] = useState([]);

    useEffect(() => {
        const fetchAllCustomers = async () => {
            try{
                const res = await axios.get('http://localhost:8800/customers');
                console.log(res)
                setCustomers(res.data);
            }catch(err){
                console.log(err)
            }
        }
        fetchAllCustomers();
    }, []);

    return (
            <React.Fragment>
                <div className='customer'>
                    <table className='table'>
                        <caption>Customer Delivery Details</caption>
                            <thead className='table_head'>
                                <tr className='table_header'>
                                    <th>ID</th>
                                    <th>Name</th>
                                    <th>The Pick Up Location</th>
                                    <th>The Drop Off Location</th>
                                </tr>
                            </thead>
                            <tbody className='table_body'>
                                {customers.map((customer) => (
                                    <tr  key={customer.id} className='table_details'>
                                        <td>{customer.id}</td>
                                        <td>{customer.name}</td>
                                        <td>{customer.pickupLocation}</td>
                                        <td>{customer.dropOffLocation}</td>
                                    </tr>
                                ))}           
                            </tbody>
                    </table>
                </div>
            </React.Fragment>
    );
}

export default Customer;