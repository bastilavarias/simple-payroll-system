"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const query = `create table if not exists account (
    id serial primary key not null,
    name varchar(250) not null,
    username varchar(250) not null,
    password varchar(250) not null,
    type varchar(15) not null,
    created_at         timestamp default now(),
    is_deleted         boolean   default false,
    deleted_at         timestamp
    );`;
exports.default = query;
//# sourceMappingURL=account.js.map