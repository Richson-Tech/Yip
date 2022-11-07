import React, { useState, useEffect } from 'react'
import moment from 'moment'
import axios from 'axios';
import './Customers.css';

const SERVER_URL = 'http://localhost:5000'

const Logistics = () => {

  const [customers, setCustomers] = useState([]);
  const [selectedCustomerId, setCustomerId] = useState(null)
  const [selectedDateSlot, setDateSlot] = useState(null)

  useEffect(() => {
    const fetchAllCustomers = async () => {
      try {
        const res = await axios.get(`${SERVER_URL}/list-customers`);
        setCustomers(res.data);
      } catch (err) {
        console.log(err)
      }
    }
    fetchAllCustomers();
  }, []);

  const generateSlots = () => {
    const slots = ['slot 1', 'slot 2', 'slot 3', 'slot 4']
    const days = [1, 2, 3, 4, 5, 6, 7]
    const allSlots = []

    const now = new Date()

    for (const day of days) {
      for (const slot of slots) {
        const date = moment(now).add(day, 'day').format("YYYY-MM-DD")
        const slotEntry = `${date} - ${slot}`
        allSlots.push(slotEntry)
      }
    }
    return allSlots;
  }

  const dateSlots = generateSlots()

  const handleSubmit = async (e) => {
    try {
      const body = {
        customerId: selectedCustomerId,
        dateSlot: selectedDateSlot
      }
      const res = await axios.post(`${SERVER_URL}/add-to-queue`, body)
      alert('Delivery has been added to queue')
    } catch (error) {
      console.log(error);
    }

  }


  return (
    <div className="container">
      <h1 className='logistics'>Customers Queue</h1>

      <div className="card">
        <div className="card-header">Delivery Queue</div>
        <div className="card-body">
          <div className='select1'>
            <div className="mb-3">
              <select name="country" id="country" className="form-control" onChange={e => setCustomerId(Number(e.target.value))} >
                {customers.map((customer) => (

                  <option key={customer.id} value={customer.id}>{customer.name}</option>

                ))}
              </select>
            </div>
          </div>

          <div className='select1'>
            <div className="mb-3">
              <select name="state" id="state" className="form-control-second" onChange={e => setDateSlot(e.target.value)} >
                {dateSlots.map((slot, index) => (

                  <option key={index} value={slot}>{slot}</option>

                ))}
              </select>
            </div>
          </div>
        </div>
        <div>
          <button className='button' onClick={handleSubmit}>Submit</button>
        </div>
      </div>
    </div>
  );
}

export default Logistics;