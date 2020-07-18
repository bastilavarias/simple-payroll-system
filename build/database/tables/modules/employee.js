"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = `create table if not exists employee ( 
    id serial primary key not null,
    custom_id varchar(15) not null,
    department_id integer not null,
    designation_id integer not null,
    employee_profile_id integer not null,
    employee_benefit_id integer not null,
    foreign key (department_id) references department (id),
    foreign key (designation_id) references designation (id),
    foreign key (employee_profile_id) references employee_profile (id),
    foreign key (employee_benefit_id) references employee_benefit (id),
    created_at         timestamp default now(),
    is_deleted         boolean   default false,
    deleted_at         timestamp
    );`;
exports.default = query;
//# sourceMappingURL=employee.js.map