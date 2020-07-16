const query = `create table if not exists payroll (
    id serial primary key not null,
    employee_id integer not null,
    account_id integer not null,
    start_period_date date not null,
    end_period_date date not null,
    basic_salary numeric not null,
    other_pay numeric not null,
    sss_loan_deduction numeric not null,
    pag_ibig_loan_deduction numeric not null,
    other_loan_deduction numeric not null,
    absent_deduction numeric not null,
    sss_deduction numeric not null,
    pag_ibig_deduction numeric not null,
    philhealth_deduction numeric not null,
    tax_deduction numeric not null,
    basic_salary_without_absent numeric not null,
    total_salary numeric not null,
    total_deduction numeric not null,
    net_pay numeric not null,
    foreign key (employee_id) references employee (id),
    created_at         timestamp default now(),
    is_deleted         boolean   default false,
    deleted_at         timestamp
    );`;

export default query;
