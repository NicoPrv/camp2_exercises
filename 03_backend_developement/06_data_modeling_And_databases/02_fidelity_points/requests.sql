CREATE TABLE purchases (
    id uuid NOT NULL PRIMARY KEY,
    client_name text,
    euros_spent int,
    fidelity_points_earned int,
    purchase_date timestamptz,
    number_of_items int
);


DROP TABLE purchases ;


SELECT * FROM purchases ORDER BY purchase_date ASC LIMIT 3 ;
SELECT * FROM purchases WHERE purchase_date > (CURRENT_TIMESTAMP - INTERVAL '2 months') AND number_of_items = 0;
