SELECT name, address, city, state, zip, ammount, order_date
FROM customers
INNER JOIN orders ON customer.id = orders.customer_id
WHERE customer_id = 2;

SELECT name SUM(amount) as order_total
FROM customers
INNER JOIN orders ON customer.id = orders.customer_id
WHERE customer_id = 2;

-- ADVANCED / JOIN QUERIES
-- For all of these queries, you SHOULD NOT use an id # in a WHERE clause

-- Find all fields (book and author related) for all books written by George R.R. Martin.
SELECT * 
FROM authors
INNER JOIN books ON authors.id = books.author_id
WHERE author_id = 8;

-- Find all fields (book and author related) for all books written by Milan Kundera.
SELECT * 
FROM authors
INNER JOIN books ON authors.id = books.author_id
WHERE author_id = 6;

-- Find all books written by an author from China or the UK.
SELECT * 
FROM authors
INNER JOIN books ON authors.id = books.author_id
WHERE nationality = 'China';

-- Find out how many books Albert Camus wrote.
SELECT * 
FROM authors
INNER JOIN books ON authors.id = books.author_id
WHERE name = 'Albert Camus';

-- Find out how many books were written by US authors.
SELECT COUNT(*)
FROM authors
INNER JOIN books ON authors.id = books.author_id
WHERE nationality = 'United States of America';

-- Find all books written after 1930 by authors from Argentina.
SELECT *
FROM authors
INNER JOIN books ON authors.id = books.author_id
WHERE publication_date > 1930 AND nationality = 'Argentina';

-- Find all books written before 1980 by authors not from the US.
SELECT *
FROM authors
INNER JOIN books ON authors.id = books.author_id
WHERE publication_date < 1980 AND nationality != 'United States of America';

-- Find all authors whose names start with 'J'.
SELECT *
FROM authors
WHERE name ILIKE 'j%';

-- Find all books whose titles contain 'the'.
SELECT *
FROM books
WHERE title ILIKE 'the %' OR title ILIKE '% the %';

-- Find all authors who have written books with that start with the letter 'N'.
SELECT *
FROM authors
INNER JOIN books ON authors.id = books.author_id
WHERE title ILIKE 'n%';