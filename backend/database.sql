CREATE DATABASE bugtracker;

-- columns: id, description, assigned_by, assigned_to, type, priority, status, project

CREATE TABLE ticket(
    ticket_id SERIAL PRIMARY KEY,
    project int,
    description VARCHAR(255),
    assigned_by int,
    assigned_to int,
    type ,
    priority ,
    status ,
    FOREIGN KEY assigned_to REFERENCES user(user_id),
    FOREIGN KEY assigned_by REFERENCES user(user_id),
    FOREIGN KEY project REFERENCES project(project_id),
);

CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(40),
);

CREATE TABLE project(
    project_id SERIAL PRIMARY KEY
)

-- columns: id, name
-- CREATE TABLE project(
--     project_id SERIAL PRIMARY KEY,
-- );

-- -- columns: id, name, project
-- CREATE TABLE user(
--     user_id SERIAL PRIMARY KEY,
-- );