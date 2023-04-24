drop schema if exists phonebook;
create schema phonebook;

use phonebook;

drop table if exists contacts;

create table contacts (

    id bigint not null auto_increment,
    name varchar(255) not null,
    email varchar(255) not null,
    phone varchar(255) not null,
    address varchar(255) not null,
    
    primary key (id)

)

