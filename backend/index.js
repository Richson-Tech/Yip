const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();





mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.DB_NAME,

}).then((connection) => {

    const app = express();

    app.use(express.json());
    app.use(cors());

    // list of the customers
    app.get('/list-customers', async (req, res) => {

        try {
            const listCustomersQuery = 'SELECT * FROM yip.Customers';
            const result = await connection.query(listCustomersQuery);
            return res.send(result[0]);
        } catch (error) {
            res.status(500).send(error)

        }

    });

    // saves a record to the delivery queue.
    app.post('/add-to-queue', async (req, res) => {
        try {

            const { customerId, dateSlot } = req.body;
            await connection.query('insert into Delivery_Queue(customerId, dateSlot) values (? , ?)', [customerId, dateSlot])
            return res.send('OK');
        } catch (error) {
            res.status(500).send(error)

        }
    })

    const PORT = 5000;

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });


}).catch((error) => {
    console.log('An error occured', error)
});



