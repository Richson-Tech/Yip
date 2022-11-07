const mysql = require('mysql2/promise');
const dotenv = require('dotenv');

dotenv.config();

const customers = [
    {
        name: 'Select Customers',
        pickupLocation: 'Ikeja',
        dropOffLocation: 'Lekki'
    },
    {
        name: 'Elon',
        pickupLocation: 'California',
        dropOffLocation: 'Texas'
    },
    {
        name: 'Mariam',
        pickupLocation: 'Ikorodu',
        dropOffLocation: 'Badagry'
    },
    {
        name: 'Yinka',
        pickupLocation: 'Agege',
        dropOffLocation: 'Ikorodu'
    },
    {
        name: 'Azeez',
        pickupLocation: 'Badagry',
        dropOffLocation: 'Epe'
    },
    {
        name: 'Rihana',
        pickupLocation: 'Alabama',
        dropOffLocation: 'New York'
    },
    {
        name: 'Hapiness',
        pickupLocation: 'Victoria Island',
        dropOffLocation: 'Lekki'
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

    for (let i = 0; i < customers.length; i++) {
        const customer = customers[i]

        const { name, pickupLocation, dropOffLocation } = customer

        const query = 'insert into Customers(name, pickupLocation, dropOffLocation) values (? , ?, ?)'
        await connection.query(query, [name, pickupLocation, dropOffLocation])

    }


    await connection.end();

}

seed().then(() => console.log('done')).catch(console.error)