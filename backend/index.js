const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors');
const dotenv = require ('dotenv');

const app = express();
dotenv.config();

const main = async (app) => {
    // TODO: put this in env
    const connection = await mysql.createConnection({
        host: process.env.MYSQL_HOST,
        user: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.DB_NAME,

    });

    app.use(express.json());
    app.use(cors());

    // return a list of the customers
    app.get('/customers', async (req, res) => {

        try {
            const q = 'SELECT * FROM yip.Customers';
            const [rows, fields] = await connection.query(q);
            return res.send(rows);
        } catch (error) {
            res.status(500).send(error)

        }

    });

    // saves a record to the delivery queue.
    app.post('/queue', async (req, res) => {
        try {

            const { id, customerId, dateSlot } = req.body;
            await connection.query('insert into Delivery_Queue(customerId, dateSlot) values (? , ?)', [customerId, dateSlot])
            return res.send('OK');
        } catch (error) {
            res.status(500).send(error)

        }
    })

    const PORT = 8800;

    app.listen(PORT, () => {
        console.log(`Server is running on ${PORT}`);
    });
}


main(app).catch(console.error);