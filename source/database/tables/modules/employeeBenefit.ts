const query = `create table if not exists employee_benefit ( 
    id serial primary key not null,
    gsis_number text,
    pag_ibig_id_number text,
    philhealth_number text,
    sss_number text,
    tin_number text,
    agency_employee_number text
);`;

export default query;
