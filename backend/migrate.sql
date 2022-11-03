


-- create the customer table
create table Customers(
    id int auto_increment not null primary key,
    name varchar(255) not null,
    pickupLocation varchar(255) not null,
    dropOffLocation varchar(255) not null
)

-- create the delivery queue table
create table Delivery_Queue(
 id int auto_increment not null primary key,
 customerId int not null,
 dateSlot varchar(255) not null, 
 CONSTRAINT FK_Delivery_Queue_Customer FOREIGN KEY (customerId) REFERENCES Customers(id)
);

