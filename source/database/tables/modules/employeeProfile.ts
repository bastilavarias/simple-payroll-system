const query = `create table if not exists employee_profile ( 
    id serial primary key not null,
    first_name varchar(250) not null,
    middle_name varchar(250) not null,
    last_name varchar(250) not null,
    extension_name varchar(50) not null,
    birth_date date not null,
    birth_place varchar(150) not null,
    sex varchar(10) not null,   
    citizenship varchar(75) not null,
    civil_status varchar(15) not null,
    address text,
    contact_number text,
    height varchar(15),
    weight varchar(15),
    blood_type varchar(5),
    created_at         timestamp default now(),
    is_deleted         boolean   default false,
    deleted_at         timestamp
    );`;

export default query;
