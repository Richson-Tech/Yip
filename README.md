there are two folders in this project:
1. The frontend Folder (which containts the client logic side)
2. The Backend Folder (which contains the server logic side)


To the frontend part, enter into the `frontend` folder
1. run `npm install` to install dependencies
2. run `npm start` to start the project

To run the server, we need to follow these steps:

1. Run a mysql instance locally via a docker container or the mysql cli tool
2. Connect to the instance and create the database `yip`
3. Enter in the `backend` folder and install dependencies via `npm install` command
5. Create the customer table and the delivery_queue table by using the queries in the `migrate.sql` file
6. Run the `npm run seed` command to seed to data into the database
