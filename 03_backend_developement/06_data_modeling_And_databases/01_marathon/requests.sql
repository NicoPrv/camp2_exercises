CREATE TABLE marathonians_data (
  id int not null PRIMARY KEY,
  race_name text,
  race_starting_date date,
  runner_name varchar,
  runner_bib int,
  runner_position int,
  runner_racing_time time
);


INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (2,'Marathon de Rome','2018-04-22','José',3564,127,'10:59:50');

INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (2,'Marathon de Tourcoing','2018-08-29','Alex',3594,127,'10:59:50');

INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (4,'New York City Marathon - Women','2017-03-12','Marie',390,320,'03:58:40');

INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (6,'New York City Marathon - Men','2017-03-12','Greg',10,500,'04:06:40');

INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (7,'Marathon de Pékin','2018-10-10','Jia',387,50,'03:16:40');


INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (8,'Marathon de Moscou','2018-05-10','Koen Naert',5,10,'02:29:40');

INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (9,'Marathon de Moscou','2018-05-10','Rémi',42,9,'02:26:59');

INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (10,'Marathon de Moscou','2018-05-10','Damien',101,8,'02:14:40');

INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (11,'Marathon de Moscou','2018-05-10','Christophe',90,6,'02:13:10');

INSERT INTO marathonians_data (id,race_name,race_starting_date,runner_name,runner_bib,runner_position,runner_racing_time)
VALUES (12,'Marathon de Lille','2018-06-20','Elise',30,10,'02:28:50');


SELECT * FROM marathonians_data WHERE race_name='New York City Marathon - Men';

SELECT * FROM marathonians_data ORDER BY runner_racing_time ASC LIMIT 3;

SELECT * FROM marathonians_data WHERE runner_racing_time < '02:30:00' AND runner_bib > 100 ;

SELECT * FROM marathonians_data WHERE (runner_racing_time < '02:15:00' AND runner_bib > 100) OR (runner_racing_time < '02:30:00' AND runner_bib < 100) ORDER BY runner_bib ASC;

SELECT * FROM marathonians_data WHERE (runner_racing_time < '02:15:00' AND runner_bib > 100) OR (runner_racing_time < '02:30:00' AND runner_bib < 100) ORDER BY runner_racing_time DESC;

SELECT runner_bib, runner_name, runner_position
FROM marathonians_data
WHERE race_name = 'Marathon de Moscou' AND race_starting_date = '2018-05-10' AND runner_racing_time < (SELECT runner_racing_time FROM marathonians_data WHERE runner_name = 'Koen Naert' AND race_name = 'Marathon de Moscou' AND race_starting_date='2018-05-10') ORDER BY runner_racing_time ASC;


select * from marathonians_data where runner_racing_time < '09:50:59';
