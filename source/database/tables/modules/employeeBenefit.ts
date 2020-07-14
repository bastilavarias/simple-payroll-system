const query = `create table if not exists employee_benefit ( 
    id serial primary key not null,
    gsis_number text,
    pag_ibig_id_number text,
    philhealth_number text,
    sss_number text,
    tin_number text,
    agency_employee_number text,
    created_at         timestamp default now(),
    is_deleted         boolean   default false,
    deleted_at         timestamp
    );`;

export default query;
