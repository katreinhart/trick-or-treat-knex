DROP DATABASE IF EXISTS trick_or_treat_dev;
CREATE DATABASE trick_or_treat_dev;

\c trick_or_treat_dev

CREATE TABLE houses (
  id serial PRIMARY KEY,
  address text NOT NULL,
  last_name varchar NOT NULL
);

CREATE TABLE candies (
  id serial PRIMARY KEY,
  name varchar NOT NULL,
  size varchar NOT NULL DEFAULT 'small',
  house_id integer REFERENCES houses (id)
);

INSERT INTO houses (address, last_name) VALUES
  ('123 Main Street', 'Becker'),
  ('456 Broadway Avenue', 'Stevenson'),
  ('789 Poplar Road', 'Hernandez');

INSERT INTO candies (name, size, house_id) VALUES
  ('Peanut Butter Cups', 'medium', 1),
  ('Peanut Butter Cups', 'small', 2),
  ('Skittles', 'large', 1),
  ('Starbursts', 'medium', 3);
