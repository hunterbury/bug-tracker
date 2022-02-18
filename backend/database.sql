CREATE DATABASE bugTracker;

-- columns: id, description, assigned_by, assigned_to, type, priority, status

CREATE TABLE ticket(
    ticket_id SERIAL PRIMARY KEY,
    description VARCHAR(255)
);