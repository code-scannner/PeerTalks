create database PeerTalks;

use PeerTalks;

desc Users;

create table users(
    username varchar(20) primary key,
    password varchar(20),
    fname varchar(20),
    lname varchar(20),
    bio varchar(255),
    gender enum('Male', 'Female', 'Other'),
    pic varchar(255),
    lastLogin date,
    regDate date
);

select
    *
from
    users;

insert into
    users
values
(
        "utkarshtri",
        "root",
        "Utkarsh",
        "Trivedi",
        "I am a good web designer",
        "Male",
        "https://cdn.pixabay.com/photo/2018/09/12/12/14/man-3672010__340.jpg",
        NULL,
        curdate()
    );

create table contact(
    username varchar(20),
    contactname varchar(20),
    last_con date,
    primary key (username, contactname)
);

insert into
    contact
values
("username", "password", curdate());

create table message(
chat_id varchar(20),
sender varchar(20),
content varchar(255),
time timestamp,
seen boolean
);

alter table contact
drop column last_con;

alter table contact
add column chat_id bigint;

create table chats(
chat_id bigint primary key,
create_time datetime
);

alter table contact
add foreign key(chat_id) references chats(chat_id) on delete cascade;

alter table message
add foreign key(chat_id) references chats(chat_id) on delete cascade;

alter table message
add foreign key(sender) references users(username) on delete cascade;

alter table contact
add foreign key(username) references users(username) on delete cascade;

alter table contact
add foreign key(contactname) references users(username) on delete cascade;

create table notifications(
    username varchar(20),
    message varchar(255),
    time timestamp,
    foreign key(username) references users(username)
);
