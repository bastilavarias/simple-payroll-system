const query = `
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (1, 'Kendell', 'Thain', 'Meriton', 'Sr', '1978-04-15', 'Makati', 'Male', 'Filipino', 'Married',
            '489 Montana Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (2, 'Garey', 'Bythway', 'Ivshin', 'Sr', '1992-04-16', 'Manila', 'Male', 'Filipino', 'Single',
            '50033 Paget Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (3, 'Christye', 'Murtell', 'Singleton', 'III', '1994-05-17', 'Manila', 'Female', 'Filipino', 'Married',
            '32 Dahle Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (4, 'Laina', 'Hartup', 'Skiplorne', 'III', '1988-12-22', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '58 Utah Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (5, 'Glen', 'Hewell', 'Ianne', 'III', '1998-12-22', 'Manila', 'Female', 'Filipino', 'Single',
            '7560 Superior Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (6, 'Dani', 'Prendergrass', 'Joburn', 'Jr', '1984-01-24', 'Makati', 'Female', 'Filipino', 'Single',
            '786 Fuller Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (7, 'Tiffy', 'Brandham', 'Kits', 'Sr', '1996-05-13', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '79 Waywood Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (8, 'Adelina', 'Polycote', 'Braunfeld', 'Sr', '1997-09-26', 'Caloocan', 'Female', 'Filipino', 'Married',
            '958 Laurel Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (9, 'Mariquilla', 'McNeilley', 'Pirkis', 'Jr', '1984-12-13', 'Caloocan', 'Female', 'Filipino', 'Single',
            '75 Macpherson Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (10, 'Analise', 'Mompesson', 'Clacson', 'III', '1990-04-28', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '061 Macpherson Avenue');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (11, 'Candida', 'Arrighini', 'Zannolli', 'Jr', '1992-05-04', 'Makati', 'Female', 'Filipino', 'Single',
            '7 Oxford Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (12, 'Paulie', 'Chmiel', 'Christofol', 'II', '1979-09-16', 'Makati', 'Male', 'Filipino', 'Married',
            '04786 Blackbird Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (13, 'Mildrid', 'Kamall', 'Carpenter', 'Jr', '1998-05-25', 'Malabon', 'Female', 'Filipino', 'Married',
            '4579 Fallview Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (14, 'Lenore', 'Lambole', 'Seeks', 'Sr', '1978-01-31', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '5427 Pankratz Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (15, 'Zsazsa', 'Brayne', 'Longwood', 'II', '1991-05-27', 'Malabon', 'Female', 'Filipino', 'Married',
            '32 Service Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (16, 'Shirl', 'Tuckley', 'Bigland', 'Sr', '1976-09-19', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '7971 Brickson Park Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (17, 'Gothart', 'Schieferstein', 'Riedel', 'IV', '1989-08-30', 'Makati', 'Male', 'Filipino', 'Single',
            '432 1st Park');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (18, 'Claudina', 'Fossett', 'McKea', 'Sr', '1980-05-23', 'Caloocan', 'Female', 'Filipino', 'Single',
            '15833 Corry Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (19, 'Doroteya', 'Licciardiello', 'Clemanceau', 'II', '1999-09-07', 'Caloocan', 'Female', 'Filipino',
            'Married', '9430 Sycamore Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (20, 'Kimberley', 'MacHarg', 'Manach', 'IV', '1990-06-30', 'Makati', 'Female', 'Filipino', 'Single',
            '0029 Union Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (21, 'Cletus', 'Manshaw', 'Schuler', 'Jr', '1996-01-25', 'Makati', 'Male', 'Filipino', 'Single',
            '4474 Commercial Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (22, 'Nobe', 'Snipe', 'Fairall', 'IV', '1992-05-18', 'Malabon', 'Male', 'Filipino', 'Married',
            '54698 Carioca Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (23, 'Nathalia', 'Avramow', 'O''Cosgra', 'Sr', '1991-06-12', 'Malabon', 'Female', 'Filipino', 'Single',
            '1905 Lindbergh Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (24, 'Olvan', 'Bordes', 'Hutcheon', 'Sr', '1985-10-13', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '91 Eagan Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (25, 'Northrop', 'Henner', 'Chander', 'IV', '1993-06-26', 'Manila', 'Male', 'Filipino', 'Single',
            '65047 Green Ridge Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (26, 'Wynnie', 'Ensley', 'Baldetti', 'IV', '1994-02-23', 'Manila', 'Female', 'Filipino', 'Married',
            '33 Miller Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (27, 'Barri', 'Meehan', 'Girardeau', 'IV', '1989-06-26', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '0 5th Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (28, 'Merry', 'Duffrie', 'Heatherington', 'IV', '1989-02-21', 'Malabon', 'Female', 'Filipino', 'Married',
            '79 Monterey Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (29, 'Clari', 'Bretherton', 'Tulley', 'IV', '1987-06-06', 'Caloocan', 'Female', 'Filipino', 'Married',
            '31 Donald Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (30, 'Kellen', 'Kitcher', 'Turvey', 'II', '1997-06-03', 'Manila', 'Female', 'Filipino', 'Single',
            '08 Schurz Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (31, 'Joellyn', 'Vercruysse', 'Cheeld', 'IV', '1984-05-12', 'Manila', 'Female', 'Filipino', 'Married',
            '552 Crowley Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (32, 'Jillana', 'M''Barron', 'Levermore', 'III', '1998-08-29', 'Manila', 'Female', 'Filipino', 'Married',
            '74 Caliangt Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (33, 'Jillie', 'Bartolini', 'Gallimore', 'Jr', '1976-02-02', 'Makati', 'Female', 'Filipino', 'Single',
            '80017 Thierer Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (34, 'Lambert', 'Pescod', 'MacBrearty', 'IV', '1980-02-28', 'Malabon', 'Male', 'Filipino', 'Married',
            '3630 Parkside Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (35, 'Debra', 'Blenkinship', 'Murrock', 'II', '1977-12-27', 'Malabon', 'Female', 'Filipino', 'Single',
            '18385 Little Fleur Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (36, 'Wallache', 'Rollo', 'Baraja', 'III', '1994-01-12', 'Manila', 'Male', 'Filipino', 'Single',
            '694 Surrey Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (37, 'Rip', 'Gaukroger', 'Ferras', 'IV', '1996-03-27', 'Manila', 'Male', 'Filipino', 'Married',
            '34 Bartelt Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (38, 'Ernst', 'Glowach', 'Rraundl', 'Sr', '1986-01-11', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '19 Lyons Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (39, 'Trula', 'Tewkesbury.', 'Gower', 'III', '1990-08-25', 'Malabon', 'Female', 'Filipino', 'Married',
            '46627 Hovde Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (40, 'Karly', 'Cordero', 'Lepere', 'IV', '1994-08-16', 'Makati', 'Female', 'Filipino', 'Married',
            '800 New Castle Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (41, 'Brietta', 'Lafranconi', 'Castagnasso', 'III', '1992-04-19', 'Makati', 'Female', 'Filipino', 'Married',
            '346 Loftsgordon Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (42, 'Patty', 'Gerwood', 'Peat', 'II', '1979-08-07', 'Caloocan', 'Female', 'Filipino', 'Single',
            '778 Anthes Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (43, 'Demetris', 'Hobgen', 'McLewd', 'II', '1990-07-06', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '28033 Mesta Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (44, 'Sapphira', 'De Laci', 'Sillick', 'III', '1977-04-20', 'Manila', 'Female', 'Filipino', 'Married',
            '64797 Morningstar Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (45, 'Trstram', 'Purkis', 'Trayhorn', 'IV', '1982-12-30', 'Caloocan', 'Male', 'Filipino', 'Single',
            '47 Cherokee Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (46, 'Valentin', 'O''Neal', 'Kynnd', 'IV', '1999-07-09', 'Malabon', 'Male', 'Filipino', 'Married',
            '3 Mandrake Park');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (47, 'Leeann', 'Maultby', 'Goodnow', 'II', '1988-09-13', 'Caloocan', 'Female', 'Filipino', 'Single',
            '64263 Ridge Oak Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (48, 'Martie', 'Liddicoat', 'Garmey', 'II', '1984-10-14', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '5901 Upham Avenue');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (49, 'Rollo', 'Giorgioni', 'Raynham', 'Sr', '1980-05-15', 'Malabon', 'Male', 'Filipino', 'Single',
            '674 Beilfuss Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (50, 'Dale', 'Raffon', 'Grimbaldeston', 'II', '1992-06-02', 'Malabon', 'Female', 'Filipino', 'Single',
            '01204 Maywood Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (51, 'Wakefield', 'Reddan', 'Kinvan', 'Jr', '1976-03-10', 'Caloocan', 'Male', 'Filipino', 'Married',
            '8744 Atwood Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (52, 'Jermayne', 'Levett', 'Bowskill', 'IV', '1989-08-03', 'Makati', 'Male', 'Filipino', 'Single',
            '17887 Graedel Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (53, 'Alvie', 'Freen', 'Stabbins', 'II', '1994-07-26', 'Manila', 'Male', 'Filipino', 'Single',
            '8327 Kings Avenue');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (54, 'Rosalinde', 'Goodhall', 'Danaher', 'II', '1999-11-09', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '481 Schurz Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (55, 'Ariana', 'Allenson', 'Dannell', 'Jr', '1995-05-28', 'Malabon', 'Female', 'Filipino', 'Married',
            '11 Mosinee Park');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (56, 'Darb', 'Tremellan', 'Skullet', 'III', '1978-12-13', 'Caloocan', 'Male', 'Filipino', 'Married',
            '797 Manley Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (57, 'Giulio', 'Muckeen', 'Gianinotti', 'IV', '1995-12-16', 'Makati', 'Male', 'Filipino', 'Married',
            '14522 Mosinee Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (58, 'Di', 'Glazier', 'Lawlan', 'Jr', '1979-12-06', 'Caloocan', 'Female', 'Filipino', 'Married',
            '3 Heffernan Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (59, 'Ernestus', 'Kinnard', 'Artinstall', 'III', '1984-05-28', 'Makati', 'Male', 'Filipino', 'Married',
            '06560 Fremont Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (60, 'Jandy', 'Bradder', 'Losel', 'III', '1996-04-04', 'Caloocan', 'Female', 'Filipino', 'Married',
            '5 Spaight Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (61, 'Haley', 'Shay', 'Vanes', 'II', '1995-06-16', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '27 Waxwing Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (62, 'Ardeen', 'Zelley', 'Brewett', 'Sr', '1993-12-31', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '97124 Rowland Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (63, 'Adria', 'Yurivtsev', 'Mulmuray', 'III', '1980-02-15', 'Malabon', 'Female', 'Filipino', 'Single',
            '489 Meadow Ridge Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (64, 'Carlin', 'Pimer', 'Scardifield', 'III', '1994-03-31', 'Makati', 'Female', 'Filipino', 'Married',
            '48447 2nd Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (65, 'Rhea', 'Dandison', 'Alexsandrev', 'Sr', '1991-12-13', 'Malabon', 'Female', 'Filipino', 'Single',
            '17 Hansons Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (66, 'Stacie', 'Mower', 'Alan', 'IV', '1988-06-21', 'Manila', 'Female', 'Filipino', 'Married',
            '6070 Crest Line Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (67, 'Hinda', 'Watterson', 'Joska', 'Sr', '1987-02-09', 'Caloocan', 'Female', 'Filipino', 'Single',
            '3 Valley Edge Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (68, 'Pamela', 'McGreary', 'Rattenberie', 'III', '2000-05-16', 'Caloocan', 'Female', 'Filipino', 'Single',
            '24 Loeprich Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (69, 'Paulita', 'Capner', 'Castelluzzi', 'Jr', '1980-02-29', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '33232 Vermont Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (70, 'Allissa', 'Henrion', 'Idale', 'Jr', '1999-04-03', 'Caloocan', 'Female', 'Filipino', 'Single',
            '572 Manufacturers Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (71, 'Clare', 'Bahlmann', 'Jonke', 'Sr', '1975-02-12', 'Makati', 'Male', 'Filipino', 'Married',
            '894 Melrose Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (72, 'Ad', 'Rodwell', 'MacCaig', 'II', '1993-02-26', 'Caloocan', 'Male', 'Filipino', 'Married',
            '39 Mosinee Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (73, 'Bette-ann', 'Jarrel', 'Renfrew', 'IV', '1975-12-28', 'Malabon', 'Female', 'Filipino', 'Married',
            '67142 Vermont Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (74, 'Huntlee', 'Bogie', 'Arni', 'III', '1984-10-04', 'Makati', 'Male', 'Filipino', 'Married',
            '1839 Gateway Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (75, 'Aurel', 'Merill', 'Kettel', 'II', '1986-11-22', 'Makati', 'Female', 'Filipino', 'Single',
            '2 Claremont Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (76, 'Maura', 'Standeven', 'Walesa', 'Jr', '1989-04-06', 'Caloocan', 'Female', 'Filipino', 'Married',
            '3375 Ludington Park');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (77, 'Kinny', 'Wimpress', 'Adshead', 'Jr', '2000-04-10', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '6 Utah Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (78, 'Gabriello', 'Desantis', 'Luard', 'II', '1990-04-26', 'Makati', 'Male', 'Filipino', 'Single',
            '74 Eagan Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (79, 'Evered', 'Parmiter', 'Flatte', 'IV', '1976-02-06', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '16322 Texas Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (80, 'Hermia', 'Blodget', 'Long', 'IV', '1999-02-04', 'Caloocan', 'Female', 'Filipino', 'Single',
            '0568 Tennyson Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (81, 'Hamish', 'Iles', 'Reinisch', 'Sr', '1990-05-04', 'Caloocan', 'Male', 'Filipino', 'Single',
            '5 Granby Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (82, 'Cassandry', 'Baraja', 'Maudsley', 'Jr', '1980-09-01', 'Malabon', 'Female', 'Filipino', 'Single',
            '8540 Eliot Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (83, 'Adolpho', 'Ollie', 'O''Keaveny', 'Jr', '1999-11-02', 'Malabon', 'Male', 'Filipino', 'Married',
            '9137 6th Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (84, 'Verla', 'Vouls', 'Corrie', 'II', '1998-06-02', 'Manila', 'Female', 'Filipino', 'Married',
            '09 1st Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (85, 'Kippy', 'Dayley', 'Treby', 'Jr', '1981-11-20', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '5 Green Ridge Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (86, 'Jordan', 'La Rosa', 'Caush', 'II', '1980-11-21', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '19 Old Gate Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (87, 'Abbie', 'Maty', 'Loukes', 'IV', '1978-12-26', 'Manila', 'Female', 'Filipino', 'Single',
            '13376 Superior Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (88, 'Nicholas', 'Castillo', 'Ayshford', 'Jr', '1983-01-23', 'Manila', 'Male', 'Filipino', 'Single',
            '4547 Claremont Park');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (89, 'Hube', 'Matteau', 'Hamments', 'III', '1988-04-22', 'Caloocan', 'Male', 'Filipino', 'Single',
            '737 Mayer Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (90, 'Adham', 'Bresson', 'Rowlinson', 'II', '1993-08-16', 'Manila', 'Male', 'Filipino', 'Single',
            '7042 Johnson Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (91, 'Gannie', 'Leupoldt', 'Daniel', 'III', '1990-08-23', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '96 Waxwing Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (92, 'Rowen', 'Flindall', 'Plank', 'IV', '1980-12-21', 'Malabon', 'Male', 'Filipino', 'Single',
            '4005 Sycamore Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (93, 'Terrance', 'Brahan', 'Foggarty', 'Jr', '1985-07-27', 'Makati', 'Male', 'Filipino', 'Single',
            '1279 Clarendon Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (94, 'Conroy', 'Vasenkov', 'Heineking', 'II', '1977-08-02', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '3148 Miller Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (95, 'Francene', 'Fleischer', 'Scurry', 'II', '1987-07-22', 'Makati', 'Female', 'Filipino', 'Married',
            '1 Mockingbird Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (96, 'Sonja', 'Charman', 'Diggar', 'III', '1979-11-16', 'Malabon', 'Female', 'Filipino', 'Single',
            '078 Merrick Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (97, 'Raoul', 'Deaville', 'O''Halligan', 'II', '1991-01-11', 'Caloocan', 'Male', 'Filipino', 'Married',
            '0 Coleman Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (98, 'Merline', 'Delahunt', 'Feild', 'IV', '1976-01-04', 'Malabon', 'Female', 'Filipino', 'Married',
            '6 Bonner Terrace');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (99, 'Kalindi', 'Seres', 'Camble', 'II', '2001-03-23', 'Makati', 'Female', 'Filipino', 'Married',
            '343 Thackeray Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (100, 'Christyna', 'Symers', 'Zecchii', 'IV', '1975-07-22', 'Makati', 'Female', 'Filipino', 'Single',
            '3109 Grayhawk Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (101, 'Barn', 'Goldine', 'MacDirmid', 'II', '1998-07-30', 'Malabon', 'Male', 'Filipino', 'Single',
            '2 Vernon Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (102, 'Noach', 'Ahrend', 'Thirst', 'Sr', '1983-09-20', 'Malabon', 'Male', 'Filipino', 'Married',
            '576 Bay Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (103, 'Franz', 'Readwing', 'Guilloud', 'IV', '1995-12-24', 'Caloocan', 'Male', 'Filipino', 'Married',
            '1037 Basil Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (104, 'Jordon', 'Embra', 'Barczewski', 'Jr', '1991-12-09', 'Manila', 'Male', 'Filipino', 'Single',
            '96634 Holy Cross Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (105, 'Garwin', 'Lesser', 'Hutcheson', 'Jr', '1987-09-15', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '05 Hovde Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (106, 'Maggie', 'Bambury', 'Mimmack', 'Jr', '1985-04-10', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '162 Buena Vista Terrace');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (107, 'Vivyan', 'Iffland', 'Guare', 'Jr', '2000-11-26', 'Manila', 'Female', 'Filipino', 'Married',
            '9 Cordelia Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (108, 'Norene', 'Mothersole', 'Auckland', 'Sr', '1983-05-18', 'Caloocan', 'Female', 'Filipino', 'Married',
            '6447 Kensington Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (109, 'Cyrille', 'Atwill', 'Scrowby', 'Sr', '1976-06-11', 'Caloocan', 'Male', 'Filipino', 'Married',
            '2631 Hazelcrest Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (110, 'Shurlock', 'Rounsefull', 'Wilkowski', 'Jr', '1989-07-10', 'Malabon', 'Male', 'Filipino', 'Single',
            '3 Caliangt Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (111, 'Garald', 'Fallen', 'Jacobsson', 'IV', '1990-03-06', 'Caloocan', 'Male', 'Filipino', 'Married',
            '060 Weeping Birch Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (112, 'Olin', 'Tysack', 'Naerup', 'IV', '1999-03-02', 'Manila', 'Male', 'Filipino', 'Single',
            '3 Morrow Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (113, 'Sunny', 'Hinken', 'Haggard', 'IV', '1980-09-13', 'Caloocan', 'Female', 'Filipino', 'Married',
            '5 Darwin Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (114, 'Kristoffer', 'Braz', 'Pennington', 'Jr', '1979-08-14', 'Makati', 'Male', 'Filipino', 'Single',
            '54128 Melody Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (115, 'Trstram', 'Lortzing', 'Everill', 'III', '1989-09-27', 'Makati', 'Male', 'Filipino', 'Married',
            '942 Helena Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (116, 'Ferdinande', 'Hailes', 'Piburn', 'Jr', '1977-06-16', 'Malabon', 'Female', 'Filipino', 'Single',
            '1 Mallory Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (117, 'Agace', 'Duggary', 'Tixall', 'II', '1987-12-16', 'Caloocan', 'Female', 'Filipino', 'Single',
            '9 Cody Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (118, 'Sile', 'Gladdin', 'Marcu', 'Sr', '1980-11-03', 'Makati', 'Female', 'Filipino', 'Married',
            '89083 Delladonna Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (119, 'Gay', 'Dury', 'Rampley', 'II', '2000-03-23', 'Caloocan', 'Male', 'Filipino', 'Single',
            '89476 Vera Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (120, 'Blane', 'Thompson', 'Hubble', 'III', '1978-04-06', 'Malabon', 'Male', 'Filipino', 'Single',
            '1 Nevada Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (121, 'Stephenie', 'Bernon', 'Bedboro', 'Jr', '1997-05-01', 'Malabon', 'Female', 'Filipino', 'Married',
            '33666 Hermina Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (122, 'Audry', 'Chisholm', 'Albon', 'Jr', '1976-03-24', 'Makati', 'Female', 'Filipino', 'Married',
            '7768 Vera Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (123, 'Loella', 'Sweetlove', 'Readwing', 'Jr', '1979-12-22', 'Manila', 'Female', 'Filipino', 'Married',
            '7841 Canary Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (124, 'Olly', 'Lander', 'Bompas', 'II', '1994-07-11', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '3 Vera Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (125, 'Goldi', 'Philippou', 'Philpault', 'II', '1986-09-04', 'Caloocan', 'Female', 'Filipino', 'Married',
            '33711 Vahlen Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (126, 'Mayor', 'Giordano', 'Mulqueen', 'II', '1998-03-30', 'Malabon', 'Male', 'Filipino', 'Single',
            '492 Lakewood Gardens Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (127, 'Nadeen', 'Guerrazzi', 'Alger', 'IV', '1999-04-20', 'Caloocan', 'Female', 'Filipino', 'Single',
            '2 Anderson Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (128, 'Kevina', 'Reade', 'Dreelan', 'IV', '1976-03-16', 'Caloocan', 'Female', 'Filipino', 'Married',
            '659 Dunning Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (129, 'Rachael', 'Bidgood', 'Wortley', 'II', '1977-03-03', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '19810 Katie Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (130, 'Eudora', 'Lembcke', 'Dawidowitz', 'Jr', '1991-02-02', 'Makati', 'Female', 'Filipino', 'Married',
            '4387 Melby Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (131, 'Nannie', 'Peller', 'Gates', 'Jr', '1985-05-23', 'Caloocan', 'Female', 'Filipino', 'Single',
            '285 Veith Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (132, 'Rickey', 'Degoe', 'Mullord', 'Jr', '1989-08-07', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '4 New Castle Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (133, 'Koenraad', 'Sture', 'Kalb', 'Sr', '2000-06-16', 'Manila', 'Male', 'Filipino', 'Married',
            '97326 North Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (134, 'Mord', 'Cullimore', 'Cisec', 'IV', '1980-08-05', 'Malabon', 'Male', 'Filipino', 'Single',
            '4582 Gulseth Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (135, 'Sloane', 'Goggey', 'Pettican', 'IV', '1993-01-05', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '2131 Namekagon Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (136, 'Brooks', 'Valentino', 'Allcott', 'III', '1996-12-13', 'Caloocan', 'Female', 'Filipino', 'Single',
            '726 Morningstar Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (137, 'Johnny', 'Naisby', 'Alexsandrov', 'IV', '1977-01-24', 'Manila', 'Male', 'Filipino', 'Married',
            '58 Division Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (138, 'Diane', 'Crayker', 'Myrick', 'Sr', '1999-03-28', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '57659 Arrowood Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (139, 'Georgia', 'Kelso', 'Faivre', 'IV', '1986-04-04', 'Malabon', 'Female', 'Filipino', 'Single',
            '3 Fairfield Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (140, 'Cordie', 'Cosby', 'Offen', 'II', '1983-06-30', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '051 Stoughton Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (141, 'Redd', 'Dorn', 'Robroe', 'Sr', '1996-09-30', 'Caloocan', 'Male', 'Filipino', 'Single',
            '658 Charing Cross Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (142, 'Gregorius', 'MacMillan', 'Roscamp', 'Jr', '1975-08-25', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '8 Fordem Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (143, 'Kahaleel', 'Ledford', 'Jotham', 'III', '1975-04-20', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '6 Sunnyside Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (144, 'Eldridge', 'Muller', 'Fouracre', 'II', '1980-12-23', 'Caloocan', 'Male', 'Filipino', 'Single',
            '09403 Loftsgordon Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (145, 'Jim', 'Fallanche', 'Neilson', 'IV', '2000-04-24', 'Makati', 'Male', 'Filipino', 'Married',
            '7 Graceland Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (146, 'Kareem', 'Lindenfeld', 'Purry', 'II', '1976-07-23', 'Manila', 'Male', 'Filipino', 'Single',
            '6954 Everett Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (147, 'Vickie', 'Petraitis', 'Botfield', 'Sr', '1995-10-30', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '05165 Ryan Park');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (148, 'Lucien', 'Ingerson', 'Faint', 'Sr', '1989-06-21', 'Caloocan', 'Male', 'Filipino', 'Single',
            '57583 Nevada Terrace');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (149, 'Mareah', 'Bittlestone', 'Lobb', 'IV', '1977-02-05', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '906 Blackbird Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (150, 'Hughie', 'Clearie', 'McPharlain', 'II', '1987-07-14', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '4143 Tomscot Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (151, 'Mandie', 'Bartolomeu', 'Westall', 'II', '1995-11-30', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '58 Blue Bill Park Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (152, 'Mohammed', 'Hug', 'Gruby', 'Jr', '1991-06-09', 'Manila', 'Male', 'Filipino', 'Married',
            '4806 Mallory Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (153, 'Archibald', 'Faircliffe', 'Camis', 'II', '1996-04-09', 'Malabon', 'Male', 'Filipino', 'Single',
            '8 Birchwood Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (154, 'Malva', 'Balthasar', 'Byatt', 'IV', '1981-11-27', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '737 Eagle Crest Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (155, 'Ellissa', 'Diwell', 'Vigours', 'Jr', '1989-09-23', 'Manila', 'Female', 'Filipino', 'Single',
            '54 Clove Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (156, 'Darb', 'Rawlison', 'Hazeldene', 'III', '1997-03-09', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '632 Myrtle Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (157, 'Mattheus', 'Fasset', 'Anespie', 'III', '1996-06-13', 'Malabon', 'Male', 'Filipino', 'Single',
            '60574 Mockingbird Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (158, 'Guthrey', 'Skinner', 'Fleming', 'II', '1999-02-09', 'Makati', 'Male', 'Filipino', 'Married',
            '50308 Oak Valley Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (159, 'Lefty', 'Kestle', 'Wilce', 'IV', '1996-07-30', 'Malabon', 'Male', 'Filipino', 'Married',
            '5 Katie Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (160, 'Crin', 'Trueman', 'Luipold', 'III', '2000-12-24', 'Manila', 'Female', 'Filipino', 'Single',
            '08 Fair Oaks Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (161, 'Mayne', 'Elliott', 'Willson', 'Jr', '1999-03-03', 'Makati', 'Male', 'Filipino', 'Single',
            '2369 Barnett Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (162, 'Andrej', 'Cordery', 'Geke', 'II', '1988-11-08', 'Caloocan', 'Male', 'Filipino', 'Single',
            '9494 David Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (163, 'Delinda', 'Krishtopaittis', 'Pellissier', 'III', '1997-02-20', 'Malabon', 'Female', 'Filipino',
            'Married', '1 Oneill Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (164, 'Bent', 'Peagrim', 'Cluney', 'II', '1985-06-26', 'Manila', 'Male', 'Filipino', 'Married',
            '08 Lukken Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (165, 'Dud', 'Baukham', 'Lunge', 'Jr', '1987-10-05', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '5 John Wall Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (166, 'Raoul', 'Scardefield', 'Quigg', 'Jr', '1983-03-15', 'Makati', 'Male', 'Filipino', 'Single',
            '9273 Dorton Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (167, 'Poppy', 'Mosco', 'Reisin', 'Sr', '1978-10-24', 'Manila', 'Female', 'Filipino', 'Single',
            '77121 Esker Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (168, 'Davidson', 'Thumnel', 'Postles', 'IV', '1999-04-16', 'Caloocan', 'Male', 'Filipino', 'Single',
            '99160 Nobel Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (169, 'Ninette', 'Burgh', 'Creser', 'Sr', '1984-01-21', 'Caloocan', 'Female', 'Filipino', 'Single',
            '82413 Transport Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (170, 'Benedetto', 'Meffan', 'Ranyell', 'Jr', '1990-03-30', 'Caloocan', 'Male', 'Filipino', 'Single',
            '58 International Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (171, 'Esma', 'Waylen', 'Gay', 'III', '2000-03-10', 'Manila', 'Female', 'Filipino', 'Single',
            '43 Sheridan Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (172, 'Timothy', 'Strahan', 'Pavey', 'Jr', '1981-05-08', 'Malabon', 'Male', 'Filipino', 'Married',
            '1 Union Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (173, 'Yasmin', 'Ralton', 'Moffat', 'IV', '2001-07-04', 'Manila', 'Female', 'Filipino', 'Single',
            '06 Buell Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (174, 'Mira', 'Gussin', 'Trulock', 'Sr', '1976-07-25', 'Caloocan', 'Female', 'Filipino', 'Married',
            '855 Golf View Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (175, 'Artemus', 'Comelli', 'Huddle', 'III', '1985-07-26', 'Manila', 'Male', 'Filipino', 'Married',
            '8347 Glacier Hill Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (176, 'Roldan', 'Novik', 'MacKinnon', 'Sr', '1982-03-04', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '48190 New Castle Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (177, 'Arleyne', 'Delia', 'Rappoport', 'III', '1990-07-28', 'Makati', 'Female', 'Filipino', 'Married',
            '47 Ohio Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (178, 'Herrick', 'Hutchison', 'Dregan', 'III', '1994-04-16', 'Caloocan', 'Male', 'Filipino', 'Single',
            '29 Toban Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (179, 'Aloin', 'Parrot', 'Raggitt', 'Sr', '1975-03-22', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '292 Oxford Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (180, 'Rabi', 'Manson', 'Dowman', 'IV', '1991-06-17', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '8924 Mifflin Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (181, 'Padraig', 'Scimone', 'Lagde', 'Sr', '1998-12-28', 'Manila', 'Male', 'Filipino', 'Married',
            '50771 Raven Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (182, 'Colin', 'Aspel', 'Rowden', 'Sr', '1987-08-28', 'Caloocan', 'Male', 'Filipino', 'Married',
            '485 Thompson Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (183, 'Kristian', 'Necrews', 'Delue', 'Jr', '1975-11-18', 'Manila', 'Male', 'Filipino', 'Single',
            '65431 Maple Wood Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (184, 'Marney', 'Lawles', 'Frearson', 'III', '1976-07-07', 'Malabon', 'Female', 'Filipino', 'Single',
            '80481 Butterfield Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (185, 'Joella', 'McAreavey', 'Mote', 'Jr', '1995-09-14', 'Manila', 'Female', 'Filipino', 'Married',
            '232 Helena Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (186, 'Tiffi', 'Gallen', 'Iannitti', 'III', '1985-04-10', 'Makati', 'Female', 'Filipino', 'Single',
            '049 Grasskamp Terrace');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (187, 'Gaby', 'Stanlack', 'Crecy', 'Sr', '1990-11-05', 'Manila', 'Male', 'Filipino', 'Single',
            '051 Mallory Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (188, 'Willette', 'Bruni', 'Warsap', 'IV', '1999-04-26', 'Manila', 'Female', 'Filipino', 'Single',
            '647 Westport Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (189, 'Orran', 'Goodanew', 'Vasyutochkin', 'Jr', '1982-10-09', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '6 Stephen Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (190, 'Andris', 'Delve', 'McGenis', 'IV', '1975-01-07', 'Manila', 'Male', 'Filipino', 'Single',
            '258 Longview Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (191, 'Nolan', 'Wigg', 'Staton', 'II', '1986-09-09', 'Manila', 'Male', 'Filipino', 'Married',
            '9 Springview Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (192, 'Ignacius', 'Viger', 'Sitford', 'II', '1990-07-27', 'Malabon', 'Male', 'Filipino', 'Married',
            '07 Charing Cross Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (193, 'Kanya', 'Elsley', 'Feyer', 'II', '1991-10-14', 'Caloocan', 'Female', 'Filipino', 'Married',
            '8 Bluejay Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (194, 'Renato', 'Iannini', 'Duckfield', 'IV', '1976-09-18', 'Manila', 'Male', 'Filipino', 'Married',
            '1462 Brown Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (195, 'Rodolphe', 'Pirkis', 'Hache', 'Jr', '2001-05-11', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '9 Eagle Crest Terrace');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (196, 'Clemente', 'Causby', 'Caramuscia', 'III', '1985-06-16', 'Makati', 'Male', 'Filipino', 'Married',
            '5929 Division Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (197, 'Jonah', 'Mourant', 'Parkinson', 'Sr', '1987-11-17', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '3596 Chive Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (198, 'Cyrus', 'Estabrook', 'Leppingwell', 'IV', '2001-09-06', 'Makati', 'Male', 'Filipino', 'Married',
            '408 Garrison Terrace');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (199, 'Blane', 'McKernan', 'MacAleese', 'Jr', '1990-06-19', 'Manila', 'Male', 'Filipino', 'Married',
            '3162 Monument Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (200, 'Dmitri', 'Piller', 'Loggie', 'Sr', '1997-07-01', 'Manila', 'Male', 'Filipino', 'Single',
            '58 Weeping Birch Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (201, 'Kaia', 'Hanse', 'Habbon', 'Sr', '1993-09-14', 'Manila', 'Female', 'Filipino', 'Married',
            '6958 Park Meadow Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (202, 'Lin', 'MacAdam', 'Boland', 'IV', '1992-11-13', 'Malabon', 'Female', 'Filipino', 'Married',
            '78 Laurel Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (203, 'Edwina', 'Matley', 'Ayce', 'II', '1997-08-30', 'Caloocan', 'Female', 'Filipino', 'Married',
            '837 Sundown Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (204, 'Marietta', 'Roussel', 'Guage', 'IV', '1977-03-16', 'Caloocan', 'Male', 'Filipino', 'Married',
            '2817 Maple Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (205, 'Aubree', 'Crippin', 'Issitt', 'IV', '1993-07-10', 'Caloocan', 'Female', 'Filipino', 'Married',
            '571 Waubesa Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (206, 'Judd', 'Menzies', 'D''Arrigo', 'II', '1986-06-17', 'Caloocan', 'Male', 'Filipino', 'Married',
            '6852 Westport Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (207, 'Ivor', 'Winnett', 'Raittie', 'III', '1979-05-25', 'Manila', 'Male', 'Filipino', 'Single',
            '224 Nova Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (208, 'Galvan', 'Winborn', 'Balleine', 'IV', '1997-12-23', 'Caloocan', 'Male', 'Filipino', 'Married',
            '6 Hermina Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (209, 'Ray', 'Clackson', 'Crommett', 'Sr', '2000-11-15', 'Malabon', 'Male', 'Filipino', 'Single',
            '59843 Huxley Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (210, 'Killie', 'Joice', 'Landeg', 'III', '1983-09-18', 'Caloocan', 'Male', 'Filipino', 'Married',
            '24732 Vera Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (211, 'Lexie', 'Jeans', 'Willcot', 'Sr', '1996-07-14', 'Malabon', 'Female', 'Filipino', 'Single',
            '0321 Grasskamp Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (212, 'Dalston', 'Crocken', 'Wafer', 'Jr', '1979-12-20', 'Malabon', 'Male', 'Filipino', 'Married',
            '775 Hagan Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (213, 'Buddie', 'Skewes', 'Lauridsen', 'III', '1984-09-13', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '8 North Park');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (214, 'Nick', 'Gerardi', 'Garwill', 'Jr', '1991-12-03', 'Makati', 'Male', 'Filipino', 'Single',
            '879 Express Terrace');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (215, 'Kippie', 'Brendel', 'Olsson', 'III', '1992-12-26', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '2 Vidon Avenue');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (216, 'Carlyn', 'Upstone', 'Kingzett', 'III', '1983-02-24', 'Makati', 'Female', 'Filipino', 'Single',
            '50 Pleasure Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (217, 'Alyson', 'von Grollmann', 'Linford', 'III', '1975-03-24', 'Manila', 'Female', 'Filipino', 'Married',
            '18 Twin Pines Terrace');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (218, 'Alene', 'Laetham', 'Gamage', 'II', '1985-04-18', 'Caloocan', 'Female', 'Filipino', 'Single',
            '517 International Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (219, 'Ardelle', 'Beaney', 'Armiger', 'Sr', '2000-04-13', 'Malabon', 'Female', 'Filipino', 'Single',
            '234 Brown Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (220, 'Moshe', 'Rattenbury', 'Paddy', 'II', '1984-09-08', 'Manila', 'Male', 'Filipino', 'Single',
            '336 Mendota Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (221, 'Ramsay', 'Bernardoni', 'Ebbitt', 'IV', '2001-01-21', 'Makati', 'Male', 'Filipino', 'Married',
            '2 Pleasure Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (222, 'Guthrie', 'Methingam', 'Nordass', 'Sr', '1995-11-18', 'Manila', 'Male', 'Filipino', 'Married',
            '05900 Hanover Avenue');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (223, 'Dixie', 'Keaton', 'Way', 'II', '1979-12-16', 'Caloocan', 'Female', 'Filipino', 'Married',
            '92741 Veith Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (224, 'Audie', 'Kytter', 'Puzey', 'Jr', '1991-01-16', 'Manila', 'Female', 'Filipino', 'Married',
            '233 Brickson Park Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (225, 'Clywd', 'Eversfield', 'Elphee', 'Jr', '1978-12-07', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '29441 Luster Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (226, 'Jeremiah', 'Kunzler', 'Doore', 'IV', '1984-10-30', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '511 Dryden Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (227, 'Milka', 'Grandin', 'Buckwell', 'Sr', '1997-07-14', 'Caloocan', 'Female', 'Filipino', 'Married',
            '43 Roth Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (228, 'Quillan', 'Johnsson', 'D''Cruze', 'Sr', '1987-08-09', 'Makati', 'Male', 'Filipino', 'Married',
            '488 Vidon Avenue');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (229, 'Whitman', 'Batecok', 'Slatter', 'IV', '1989-11-05', 'Manila', 'Male', 'Filipino', 'Single',
            '23 Thierer Avenue');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (230, 'Lem', 'Lamberts', 'Iacavone', 'Sr', '1983-04-28', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '17 Fremont Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (231, 'Jason', 'Brownjohn', 'Conaghy', 'III', '1996-12-04', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '93 Forest Dale Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (232, 'Isobel', 'La Croce', 'Burr', 'Sr', '1986-11-25', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '0139 Schmedeman Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (233, 'Catharine', 'Doxsey', 'Surgenor', 'IV', '2001-09-30', 'Caloocan', 'Female', 'Filipino', 'Married',
            '45552 Kipling Plaza');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (234, 'Nananne', 'Thacker', 'Lethebridge', 'Jr', '1996-04-08', 'Caloocan', 'Female', 'Filipino', 'Single',
            '4 Crescent Oaks Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (235, 'Faber', 'Bielby', 'Downs', 'III', '1996-06-08', 'Malabon', 'Male', 'Filipino', 'Single',
            '93 Petterle Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (236, 'Colan', 'Huske', 'Gasson', 'Jr', '1981-04-23', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '9512 Prairie Rose Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (237, 'Gweneth', 'Maypes', 'Mathevet', 'Sr', '1984-12-25', 'Makati', 'Female', 'Filipino', 'Married',
            '47 Northwestern Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (238, 'Barbe', 'Puxley', 'Hearst', 'IV', '1983-10-12', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '41556 Harper Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (239, 'Serge', 'Norton', 'Ibbison', 'II', '1983-02-02', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '5 Farragut Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (240, 'Vic', 'Pady', 'Bedells', 'Jr', '1995-09-12', 'Manila', 'Male', 'Filipino', 'Single',
            '29 Clyde Gallagher Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (241, 'Kendra', 'Aronson', 'Stouther', 'II', '1975-06-19', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '736 Arrowood Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (242, 'Artie', 'Strong', 'Morican', 'Jr', '1979-05-23', 'Manila', 'Male', 'Filipino', 'Married',
            '90 Havey Crossing');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (243, 'Joshuah', 'Mc Carroll', 'Cudbertson', 'II', '1985-10-30', 'Manila', 'Male', 'Filipino', 'Single',
            '6671 Debs Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (244, 'Holly-anne', 'Talks', 'Foxcroft', 'IV', '1991-01-09', 'Makati', 'Female', 'Filipino', 'Single',
            '78003 Waxwing Avenue');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (245, 'Fletcher', 'Pechet', 'O'' Finan', 'II', '2001-09-04', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '32402 Moland Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (246, 'Demetra', 'McNulty', 'McGinty', 'Sr', '1996-10-31', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '6 Hudson Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (247, 'Lilllie', 'Siemantel', 'Probyn', 'III', '2000-03-01', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '0617 Doe Crossing Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (248, 'Frans', 'Burgher', 'Anderton', 'II', '1984-07-29', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '6749 Graedel Park');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (249, 'Bertha', 'Studders', 'Lorrie', 'II', '1999-07-15', 'Makati', 'Female', 'Filipino', 'Single',
            '01820 Badeau Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (250, 'Sella', 'Bone', 'Borrel', 'IV', '2000-01-04', 'Makati', 'Female', 'Filipino', 'Married',
            '382 Russell Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (251, 'Merna', 'Conford', 'Di Bartolomeo', 'Sr', '1984-02-01', 'Manila', 'Female', 'Filipino', 'Single',
            '069 Superior Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (252, 'Kathi', 'Bang', 'Vasilyevski', 'IV', '1982-02-23', 'Makati', 'Female', 'Filipino', 'Single',
            '190 Dakota Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (253, 'Chancey', 'Hrycek', 'Amsden', 'Jr', '1975-05-29', 'Caloocan', 'Male', 'Filipino', 'Single',
            '7912 Mockingbird Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (254, 'Elvyn', 'Story', 'Bedin', 'Sr', '1988-01-01', 'Makati', 'Male', 'Filipino', 'Married',
            '6 Anzinger Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (255, 'Ursuline', 'MacNeill', 'Muckart', 'III', '1980-07-24', 'Makati', 'Female', 'Filipino', 'Married',
            '44315 Pierstorff Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (256, 'Archie', 'Gallymore', 'Johnsey', 'Jr', '1987-12-11', 'Makati', 'Male', 'Filipino', 'Married',
            '1259 Ruskin Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (257, 'Bryan', 'Jaggers', 'Pendrid', 'II', '1984-06-08', 'Mandaluyong', 'Male', 'Filipino', 'Married',
            '886 Messerschmidt Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (258, 'Sharyl', 'Skillett', 'Ather', 'III', '1988-10-29', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '04333 High Crossing Pass');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (259, 'Solly', 'Florez', 'Axelby', 'Sr', '1998-02-15', 'Caloocan', 'Male', 'Filipino', 'Single',
            '56 Kinsman Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (260, 'Lura', 'Oldfield', 'Purvey', 'III', '1986-06-19', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '75419 Forest Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (261, 'Hakim', 'McCreadie', 'Tuer', 'II', '1991-04-14', 'Malabon', 'Male', 'Filipino', 'Single',
            '73868 Moulton Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (262, 'Darda', 'Brader', 'Leall', 'IV', '1981-12-17', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '56915 Vidon Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (263, 'Casandra', 'Prue', 'Denslow', 'Jr', '1983-10-04', 'Malabon', 'Female', 'Filipino', 'Single',
            '3671 Banding Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (264, 'Berke', 'Dykes', 'Fildes', 'IV', '1985-04-08', 'Malabon', 'Male', 'Filipino', 'Married',
            '9961 Eagan Road');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (265, 'Hadleigh', 'Bockler', 'Rannald', 'IV', '1980-09-14', 'Caloocan', 'Male', 'Filipino', 'Married',
            '2455 Summit Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (266, 'Dacie', 'Aldwich', 'Loweth', 'II', '1992-05-23', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '8 Hanover Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (267, 'Jesus', 'Crabbe', 'Tabbernor', 'IV', '1996-11-02', 'Manila', 'Male', 'Filipino', 'Married',
            '60571 Atwood Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (268, 'Cheryl', 'Creggan', 'Strickland', 'Sr', '2000-01-14', 'Manila', 'Female', 'Filipino', 'Single',
            '14442 Surrey Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (269, 'Aland', 'Comi', 'Kittredge', 'Sr', '1989-06-20', 'Mandaluyong', 'Male', 'Filipino', 'Single',
            '44 Lakeland Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (270, 'Lorry', 'Tourville', 'Sommerfeld', 'Sr', '1985-06-06', 'Manila', 'Male', 'Filipino', 'Married',
            '3888 Debs Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (271, 'Iseabal', 'Rotge', 'Scading', 'III', '1996-07-03', 'Mandaluyong', 'Female', 'Filipino', 'Single',
            '2859 4th Place');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (272, 'Feliza', 'Daville', 'Staite', 'Jr', '1982-06-10', 'Makati', 'Female', 'Filipino', 'Single',
            '4 Ludington Alley');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (273, 'Franklin', 'Whittam', 'Villa', 'Sr', '1989-04-18', 'Makati', 'Male', 'Filipino', 'Single',
            '77644 Washington Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (274, 'Octavia', 'Leghorn', 'Klaes', 'II', '1983-04-17', 'Manila', 'Female', 'Filipino', 'Single',
            '5 Shelley Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (275, 'Winthrop', 'Berkley', 'Maddinon', 'III', '1996-02-04', 'Makati', 'Male', 'Filipino', 'Single',
            '70777 Goodland Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (276, 'Audrye', 'Heaysman', 'Hovard', 'Jr', '1983-11-11', 'Manila', 'Female', 'Filipino', 'Single',
            '511 Spenser Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (277, 'Hyacinth', 'Thurlow', 'Fumagallo', 'Jr', '1983-12-30', 'Makati', 'Female', 'Filipino', 'Single',
            '93 Prairie Rose Trail');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (278, 'Karlyn', 'Swainston', 'Legg', 'II', '1994-09-30', 'Malabon', 'Female', 'Filipino', 'Single',
            '1 Jana Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (279, 'Orazio', 'Muselli', 'Hildrew', 'Sr', '1994-02-04', 'Caloocan', 'Male', 'Filipino', 'Single',
            '48 Vernon Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (280, 'Jesselyn', 'Mollatt', 'Tarbox', 'Sr', '1989-11-23', 'Makati', 'Female', 'Filipino', 'Single',
            '8 Bobwhite Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (281, 'Forrest', 'Greenin', 'Laux', 'III', '1999-10-30', 'Caloocan', 'Male', 'Filipino', 'Married',
            '2250 Mcbride Hill');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (282, 'Tulley', 'Bernini', 'Bunston', 'IV', '1977-03-12', 'Malabon', 'Male', 'Filipino', 'Single',
            '5955 Burning Wood Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (283, 'Sib', 'Kelledy', 'Southerill', 'Sr', '1982-01-26', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '3 John Wall Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (284, 'Rosetta', 'Behning', 'Avrahamy', 'IV', '1984-11-07', 'Manila', 'Female', 'Filipino', 'Single',
            '2 Lighthouse Bay Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (285, 'Cynthie', 'Thurlby', 'Whinney', 'Sr', '1984-02-10', 'Malabon', 'Female', 'Filipino', 'Married',
            '57102 Hansons Junction');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (286, 'Valaree', 'Bartholin', 'Isoldi', 'IV', '1998-01-05', 'Makati', 'Female', 'Filipino', 'Single',
            '085 Cody Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (287, 'Derwin', 'Lloyd', 'Swinbourne', 'IV', '1978-04-22', 'Caloocan', 'Male', 'Filipino', 'Single',
            '0420 Colorado Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (288, 'Hermine', 'Fluin', 'Bridel', 'II', '1984-11-26', 'Caloocan', 'Female', 'Filipino', 'Single',
            '3 Muir Parkway');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (289, 'Conny', 'Rimour', 'Coolbear', 'III', '2000-11-28', 'Caloocan', 'Male', 'Filipino', 'Single',
            '076 Moose Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (290, 'Ricardo', 'Leafe', 'Dolby', 'IV', '1982-05-18', 'Malabon', 'Male', 'Filipino', 'Single',
            '9 Mockingbird Court');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (291, 'Cchaddie', 'Senett', 'Ramelot', 'II', '1980-01-10', 'Caloocan', 'Male', 'Filipino', 'Married',
            '6 Arapahoe Drive');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (292, 'Parnell', 'Geikie', 'Crich', 'III', '1979-07-12', 'Manila', 'Male', 'Filipino', 'Married',
            '43 Thackeray Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (293, 'Mendel', 'Galtone', 'Queste', 'Sr', '1998-12-10', 'Caloocan', 'Male', 'Filipino', 'Single',
            '33146 Wayridge Point');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (294, 'Lyndsie', 'Brumbie', 'Vevers', 'IV', '1991-03-03', 'Malabon', 'Female', 'Filipino', 'Single',
            '6 Mayer Lane');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (295, 'Tyrone', 'Lestor', 'Smaleman', 'Sr', '1991-01-05', 'Manila', 'Male', 'Filipino', 'Married',
            '1006 Ruskin Center');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (296, 'Giacinta', 'Bonnier', 'Murdie', 'III', '1992-08-19', 'Malabon', 'Female', 'Filipino', 'Single',
            '0088 Del Sol Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (297, 'Nevil', 'Avrahamy', 'Lowbridge', 'Jr', '1979-07-08', 'Makati', 'Male', 'Filipino', 'Married',
            '20114 Little Fleur Circle');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (298, 'Rodger', 'Yakubov', 'Kingscote', 'Jr', '1987-04-23', 'Manila', 'Male', 'Filipino', 'Single',
            '6154 Memorial Street');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (299, 'Abagael', 'Beake', 'Feldstern', 'IV', '1987-05-17', 'Mandaluyong', 'Female', 'Filipino', 'Married',
            '55 Stephen Way');
    insert into employee_profile (id, first_name, middle_name, last_name, extension_name, birth_date, birth_place, sex,
                                  citizenship, civil_status, address)
    values (300, 'Emile', 'Justham', 'Cape', 'Jr', '1983-09-19', 'Caloocan', 'Male', 'Filipino', 'Single',
            '8 Mesta Parkway');
`;

export default query;
