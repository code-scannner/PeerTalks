create database PeerTalks;

use PeerTalks;

desc Users;

create table users(
    username varchar(20) primary key,
    password varchar(20),
    fname varchar(20),
    lname varchar(20),
    bio varchar(255),
    gender enum('Male','Female', 'Other'),
    pic varchar(255),
    lastLogin date,
    regDate date
);

select * from users;

insert into users
values(
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
primary key (username,contactname)
);
