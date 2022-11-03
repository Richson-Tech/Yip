const mysql = require('mysql2/promise');
const dotenv = require ('dotenv');

dotenv.config();

const customers = [
    {
        name: 'Musa',
        pickupLocation: 'Agege',
        dropOffLocation: 'Oshodi'
    },
    {
        name: 'John',
        pickupLocation: 'Ikeja',
        dropOffLocation: 'Lekki'
    },
    {
        name: 'Victoria',
        pickupLocation: 'VI',
        dropOffLocation: 'Ikeja'
    },
    {
        name: 'Lexy',
        pickupLocation: 'Lekki',
        dropOffLocation: 'Egbeda'
    },
    {
        name: 'Francis',
        pickupLocation: 'Egbeda',
        dropOffLocation: 'Oshodi'
    },
    {
        name: 'Chidi',
        pickupLocation: 'Egbeda',
        dropOffLocation: 'Berger'
    },
    {
        name: 'Mary',
        pickupLocation: 'Agege',
        dropOffLocation: 'Ikeja'
    }
]

const seed = async () => {

    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.DB_NAME,

    });

    const deleteDeliveryQuery = `delete from Delivery_Queue`;
    const deleteCustomersQuery = `delete from Customers`;
    await connection.query(deleteDeliveryQuery);
    await connection.query(deleteCustomersQuery);


    for (const customer of customers) {
        const { name, pickupLocation, dropOffLocation } = customer

        const query = 'insert into Customers(name, pickupLocation, dropOffLocation) values (? , ?, ?)'
        await connection.query(query, [name, pickupLocation, dropOffLocation])

    }

    await connection.end();

}

seed().then(() => console.log('done')).catch(console.error)