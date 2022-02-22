CREATE DATABASE bugTracker;

-- columns: id, description, assigned_by, assigned_to, type, priority, status, project

CREATE TABLE ticket(
    ticket_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);

-- columns: id, name
CREATE TABLE project(
    project_id SERIAL PRIMARY KEY,
);

-- columns: id, name, project
CREATE TABLE user(
    user_id SERIAL PRIMARY KEY,
);