const query = `create table if not exists department (
    id serial primary key not null,
    name varchar(250) not null,
    description text not null,
    created_at         timestamp default now(),
    is_deleted         boolean   default false,
    deleted_at         timestamp
    );`;

export default query;
