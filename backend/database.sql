CREATE DATABASE bugtracker;

-- columns: id, description, assigned_by, assigned_to, type, priority, status, project
--ticket(one), project(many)
-- user(many), project(many)
-- user(many), ticket(one)
-- ticket(one), type(many)
-- ticket(one), priority(many)
-- ticket(one), status(many)

CREATE TABLE ticket(
    ticket_id SERIAL PRIMARY KEY,
    name VARCHAR(20),
    description VARCHAR(255),
    created timestamp NOT NULL,
    project int,
    assigned_by int,
    assigned_to int,
    type int,
    priority int,
    status int,
    FOREIGN KEY project REFERENCES project(project_id),
    FOREIGN KEY assigned_to REFERENCES user(user_id), 
    FOREIGN KEY assigned_by REFERENCES user(user_id),
    FOREIGN KEY type REFERENCES type(type_id),
    FOREIGN KEY priority REFERENCES priority(priority_id),
    FOREIGN KEY status REFERENCES status(status_id),
);

CREATE TABLE project(
    project_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
);

CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
    role int,
    FOREIGN KEY role REFERENCES role(role_id),
);

CREATE TABLE users_projects(
    user_id int NOT NULL,
    project_id int NOT NULL,
    PRIMARY KEY (user_id, project_id),
    FOREIGN KEY user_id REFERENCES user(user_id), 
    FOREIGN KEY project REFERENCES project(project_id),
);

CREATE TABLE role(
    role_id SERIAL PRIMARY KEY,
    name VARCHAR(10)
)

CREATE TABLE priority(
    priority_id SERIAL PRIMARY KEY,
    name VARCHAR(10),
);

CREATE TABLE type(
    type_id SERIAL PRIMARY KEY,
    name VARCHAR(30),
);

CREATE TABLE status(
    status_id SERIAL PRIMARY KEY,
    name VARCHAR(15),
);