const query = `
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (1, 'ACCOUNT-00001', 5, 1, 1, 1);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (2, 'ACCOUNT-00002', 1, 4, 2, 2);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (3, 'ACCOUNT-00003', 3, 4, 3, 3);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (4, 'ACCOUNT-00004', 4, 2, 4, 4);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (5, 'ACCOUNT-00005', 4, 3, 5, 5);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (6, 'ACCOUNT-00006', 4, 3, 6, 6);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (7, 'ACCOUNT-00007', 1, 3, 7, 7);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (8, 'ACCOUNT-00008', 1, 2, 8, 8);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (9, 'ACCOUNT-00009', 3, 4, 9, 9);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (10, 'ACCOUNT-00010', 4, 2, 10, 10);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (11, 'ACCOUNT-00011', 5, 5, 11, 11);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (12, 'ACCOUNT-00012', 4, 2, 12, 12);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (13, 'ACCOUNT-00013', 1, 1, 13, 13);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (14, 'ACCOUNT-00014', 2, 5, 14, 14);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (15, 'ACCOUNT-00015', 4, 3, 15, 15);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (16, 'ACCOUNT-00016', 5, 4, 16, 16);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (17, 'ACCOUNT-00017', 1, 2, 17, 17);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (18, 'ACCOUNT-00018', 4, 2, 18, 18);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (19, 'ACCOUNT-00019', 5, 2, 19, 19);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (20, 'ACCOUNT-00020', 5, 5, 20, 20);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (21, 'ACCOUNT-00021', 1, 4, 21, 21);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (22, 'ACCOUNT-00022', 3, 2, 22, 22);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (23, 'ACCOUNT-00023', 2, 4, 23, 23);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (24, 'ACCOUNT-00024', 3, 5, 24, 24);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (25, 'ACCOUNT-00025', 5, 4, 25, 25);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (26, 'ACCOUNT-00026', 2, 2, 26, 26);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (27, 'ACCOUNT-00027', 1, 4, 27, 27);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (28, 'ACCOUNT-00028', 1, 4, 28, 28);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (29, 'ACCOUNT-00029', 1, 2, 29, 29);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (30, 'ACCOUNT-00030', 2, 4, 30, 30);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (31, 'ACCOUNT-00031', 3, 4, 31, 31);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (32, 'ACCOUNT-00032', 2, 5, 32, 32);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (33, 'ACCOUNT-00033', 4, 2, 33, 33);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (34, 'ACCOUNT-00034', 3, 4, 34, 34);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (35, 'ACCOUNT-00035', 5, 4, 35, 35);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (36, 'ACCOUNT-00036', 4, 5, 36, 36);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (37, 'ACCOUNT-00037', 5, 4, 37, 37);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (38, 'ACCOUNT-00038', 1, 1, 38, 38);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (39, 'ACCOUNT-00039', 5, 2, 39, 39);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (40, 'ACCOUNT-00040', 4, 1, 40, 40);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (41, 'ACCOUNT-00041', 4, 1, 41, 41);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (42, 'ACCOUNT-00042', 1, 4, 42, 42);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (43, 'ACCOUNT-00043', 3, 3, 43, 43);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (44, 'ACCOUNT-00044', 4, 1, 44, 44);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (45, 'ACCOUNT-00045', 1, 2, 45, 45);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (46, 'ACCOUNT-00046', 5, 1, 46, 46);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (47, 'ACCOUNT-00047', 3, 2, 47, 47);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (48, 'ACCOUNT-00048', 2, 2, 48, 48);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (49, 'ACCOUNT-00049', 2, 3, 49, 49);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (50, 'ACCOUNT-00050', 2, 3, 50, 50);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (51, 'ACCOUNT-00051', 1, 1, 51, 51);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (52, 'ACCOUNT-00052', 3, 5, 52, 52);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (53, 'ACCOUNT-00053', 1, 5, 53, 53);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (54, 'ACCOUNT-00054', 4, 1, 54, 54);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (55, 'ACCOUNT-00055', 2, 2, 55, 55);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (56, 'ACCOUNT-00056', 1, 1, 56, 56);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (57, 'ACCOUNT-00057', 1, 3, 57, 57);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (58, 'ACCOUNT-00058', 5, 5, 58, 58);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (59, 'ACCOUNT-00059', 5, 2, 59, 59);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (60, 'ACCOUNT-00060', 3, 3, 60, 60);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (61, 'ACCOUNT-00061', 2, 1, 61, 61);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (62, 'ACCOUNT-00062', 1, 3, 62, 62);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (63, 'ACCOUNT-00063', 5, 4, 63, 63);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (64, 'ACCOUNT-00064', 1, 5, 64, 64);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (65, 'ACCOUNT-00065', 4, 5, 65, 65);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (66, 'ACCOUNT-00066', 3, 5, 66, 66);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (67, 'ACCOUNT-00067', 5, 3, 67, 67);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (68, 'ACCOUNT-00068', 1, 5, 68, 68);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (69, 'ACCOUNT-00069', 2, 3, 69, 69);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (70, 'ACCOUNT-00070', 2, 2, 70, 70);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (71, 'ACCOUNT-00071', 5, 4, 71, 71);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (72, 'ACCOUNT-00072', 1, 4, 72, 72);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (73, 'ACCOUNT-00073', 5, 5, 73, 73);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (74, 'ACCOUNT-00074', 5, 4, 74, 74);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (75, 'ACCOUNT-00075', 2, 1, 75, 75);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (76, 'ACCOUNT-00076', 3, 3, 76, 76);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (77, 'ACCOUNT-00077', 1, 2, 77, 77);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (78, 'ACCOUNT-00078', 4, 3, 78, 78);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (79, 'ACCOUNT-00079', 5, 2, 79, 79);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (80, 'ACCOUNT-00080', 5, 4, 80, 80);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (81, 'ACCOUNT-00081', 4, 1, 81, 81);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (82, 'ACCOUNT-00082', 5, 3, 82, 82);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (83, 'ACCOUNT-00083', 5, 5, 83, 83);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (84, 'ACCOUNT-00084', 4, 5, 84, 84);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (85, 'ACCOUNT-00085', 5, 1, 85, 85);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (86, 'ACCOUNT-00086', 1, 2, 86, 86);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (87, 'ACCOUNT-00087', 2, 4, 87, 87);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (88, 'ACCOUNT-00088', 5, 4, 88, 88);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (89, 'ACCOUNT-00089', 1, 5, 89, 89);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (90, 'ACCOUNT-00090', 5, 4, 90, 90);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (91, 'ACCOUNT-00091', 5, 3, 91, 91);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (92, 'ACCOUNT-00092', 4, 1, 92, 92);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (93, 'ACCOUNT-00093', 3, 1, 93, 93);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (94, 'ACCOUNT-00094', 3, 5, 94, 94);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (95, 'ACCOUNT-00095', 5, 4, 95, 95);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (96, 'ACCOUNT-00096', 3, 3, 96, 96);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (97, 'ACCOUNT-00097', 3, 3, 97, 97);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (98, 'ACCOUNT-00098', 1, 4, 98, 98);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (99, 'ACCOUNT-00099', 4, 1, 99, 99);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (100, 'ACCOUNT-00100', 5, 4, 100, 100);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (101, 'ACCOUNT-00101', 3, 2, 101, 101);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (102, 'ACCOUNT-00102', 5, 4, 102, 102);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (103, 'ACCOUNT-00103', 3, 4, 103, 103);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (104, 'ACCOUNT-00104', 2, 4, 104, 104);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (105, 'ACCOUNT-00105', 3, 5, 105, 105);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (106, 'ACCOUNT-00106', 1, 3, 106, 106);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (107, 'ACCOUNT-00107', 5, 5, 107, 107);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (108, 'ACCOUNT-00108', 2, 4, 108, 108);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (109, 'ACCOUNT-00109', 5, 5, 109, 109);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (110, 'ACCOUNT-00110', 2, 1, 110, 110);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (111, 'ACCOUNT-00111', 5, 5, 111, 111);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (112, 'ACCOUNT-00112', 3, 3, 112, 112);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (113, 'ACCOUNT-00113', 1, 1, 113, 113);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (114, 'ACCOUNT-00114', 5, 2, 114, 114);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (115, 'ACCOUNT-00115', 5, 4, 115, 115);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (116, 'ACCOUNT-00116', 4, 5, 116, 116);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (117, 'ACCOUNT-00117', 1, 5, 117, 117);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (118, 'ACCOUNT-00118', 3, 3, 118, 118);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (119, 'ACCOUNT-00119', 4, 4, 119, 119);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (120, 'ACCOUNT-00120', 2, 1, 120, 120);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (121, 'ACCOUNT-00121', 3, 1, 121, 121);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (122, 'ACCOUNT-00122', 3, 4, 122, 122);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (123, 'ACCOUNT-00123', 5, 3, 123, 123);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (124, 'ACCOUNT-00124', 1, 2, 124, 124);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (125, 'ACCOUNT-00125', 5, 5, 125, 125);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (126, 'ACCOUNT-00126', 4, 2, 126, 126);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (127, 'ACCOUNT-00127', 3, 5, 127, 127);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (128, 'ACCOUNT-00128', 5, 4, 128, 128);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (129, 'ACCOUNT-00129', 5, 4, 129, 129);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (130, 'ACCOUNT-00130', 1, 5, 130, 130);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (131, 'ACCOUNT-00131', 4, 1, 131, 131);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (132, 'ACCOUNT-00132', 4, 1, 132, 132);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (133, 'ACCOUNT-00133', 5, 5, 133, 133);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (134, 'ACCOUNT-00134', 4, 3, 134, 134);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (135, 'ACCOUNT-00135', 5, 1, 135, 135);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (136, 'ACCOUNT-00136', 4, 1, 136, 136);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (137, 'ACCOUNT-00137', 4, 1, 137, 137);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (138, 'ACCOUNT-00138', 4, 3, 138, 138);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (139, 'ACCOUNT-00139', 1, 3, 139, 139);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (140, 'ACCOUNT-00140', 5, 2, 140, 140);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (141, 'ACCOUNT-00141', 1, 1, 141, 141);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (142, 'ACCOUNT-00142', 2, 2, 142, 142);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (143, 'ACCOUNT-00143', 4, 5, 143, 143);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (144, 'ACCOUNT-00144', 5, 5, 144, 144);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (145, 'ACCOUNT-00145', 1, 1, 145, 145);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (146, 'ACCOUNT-00146', 2, 4, 146, 146);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (147, 'ACCOUNT-00147', 4, 5, 147, 147);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (148, 'ACCOUNT-00148', 4, 3, 148, 148);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (149, 'ACCOUNT-00149', 1, 4, 149, 149);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (150, 'ACCOUNT-00150', 3, 5, 150, 150);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (151, 'ACCOUNT-00151', 4, 3, 151, 151);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (152, 'ACCOUNT-00152', 4, 5, 152, 152);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (153, 'ACCOUNT-00153', 3, 3, 153, 153);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (154, 'ACCOUNT-00154', 2, 1, 154, 154);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (155, 'ACCOUNT-00155', 3, 1, 155, 155);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (156, 'ACCOUNT-00156', 1, 1, 156, 156);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (157, 'ACCOUNT-00157', 2, 5, 157, 157);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (158, 'ACCOUNT-00158', 3, 1, 158, 158);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (159, 'ACCOUNT-00159', 5, 3, 159, 159);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (160, 'ACCOUNT-00160', 3, 2, 160, 160);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (161, 'ACCOUNT-00161', 2, 1, 161, 161);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (162, 'ACCOUNT-00162', 5, 4, 162, 162);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (163, 'ACCOUNT-00163', 4, 3, 163, 163);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (164, 'ACCOUNT-00164', 3, 2, 164, 164);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (165, 'ACCOUNT-00165', 1, 5, 165, 165);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (166, 'ACCOUNT-00166', 2, 3, 166, 166);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (167, 'ACCOUNT-00167', 3, 3, 167, 167);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (168, 'ACCOUNT-00168', 5, 1, 168, 168);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (169, 'ACCOUNT-00169', 3, 5, 169, 169);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (170, 'ACCOUNT-00170', 2, 1, 170, 170);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (171, 'ACCOUNT-00171', 5, 2, 171, 171);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (172, 'ACCOUNT-00172', 2, 5, 172, 172);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (173, 'ACCOUNT-00173', 5, 2, 173, 173);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (174, 'ACCOUNT-00174', 1, 3, 174, 174);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (175, 'ACCOUNT-00175', 1, 4, 175, 175);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (176, 'ACCOUNT-00176', 3, 2, 176, 176);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (177, 'ACCOUNT-00177', 1, 4, 177, 177);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (178, 'ACCOUNT-00178', 3, 2, 178, 178);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (179, 'ACCOUNT-00179', 2, 5, 179, 179);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (180, 'ACCOUNT-00180', 2, 4, 180, 180);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (181, 'ACCOUNT-00181', 2, 4, 181, 181);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (182, 'ACCOUNT-00182', 3, 2, 182, 182);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (183, 'ACCOUNT-00183', 1, 5, 183, 183);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (184, 'ACCOUNT-00184', 2, 4, 184, 184);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (185, 'ACCOUNT-00185', 2, 3, 185, 185);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (186, 'ACCOUNT-00186', 4, 4, 186, 186);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (187, 'ACCOUNT-00187', 1, 3, 187, 187);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (188, 'ACCOUNT-00188', 1, 1, 188, 188);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (189, 'ACCOUNT-00189', 1, 2, 189, 189);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (190, 'ACCOUNT-00190', 4, 4, 190, 190);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (191, 'ACCOUNT-00191', 2, 5, 191, 191);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (192, 'ACCOUNT-00192', 2, 2, 192, 192);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (193, 'ACCOUNT-00193', 5, 3, 193, 193);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (194, 'ACCOUNT-00194', 2, 5, 194, 194);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (195, 'ACCOUNT-00195', 1, 4, 195, 195);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (196, 'ACCOUNT-00196', 2, 1, 196, 196);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (197, 'ACCOUNT-00197', 4, 5, 197, 197);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (198, 'ACCOUNT-00198', 2, 3, 198, 198);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (199, 'ACCOUNT-00199', 3, 5, 199, 199);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (200, 'ACCOUNT-00200', 4, 1, 200, 200);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (201, 'ACCOUNT-00201', 4, 4, 201, 201);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (202, 'ACCOUNT-00202', 3, 1, 202, 202);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (203, 'ACCOUNT-00203', 5, 4, 203, 203);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (204, 'ACCOUNT-00204', 4, 2, 204, 204);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (205, 'ACCOUNT-00205', 5, 1, 205, 205);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (206, 'ACCOUNT-00206', 5, 1, 206, 206);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (207, 'ACCOUNT-00207', 4, 4, 207, 207);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (208, 'ACCOUNT-00208', 5, 3, 208, 208);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (209, 'ACCOUNT-00209', 5, 3, 209, 209);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (210, 'ACCOUNT-00210', 5, 5, 210, 210);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (211, 'ACCOUNT-00211', 3, 5, 211, 211);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (212, 'ACCOUNT-00212', 2, 1, 212, 212);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (213, 'ACCOUNT-00213', 5, 2, 213, 213);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (214, 'ACCOUNT-00214', 3, 2, 214, 214);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (215, 'ACCOUNT-00215', 5, 2, 215, 215);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (216, 'ACCOUNT-00216', 2, 4, 216, 216);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (217, 'ACCOUNT-00217', 4, 5, 217, 217);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (218, 'ACCOUNT-00218', 2, 3, 218, 218);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (219, 'ACCOUNT-00219', 4, 4, 219, 219);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (220, 'ACCOUNT-00220', 3, 5, 220, 220);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (221, 'ACCOUNT-00221', 3, 2, 221, 221);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (222, 'ACCOUNT-00222', 2, 1, 222, 222);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (223, 'ACCOUNT-00223', 3, 2, 223, 223);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (224, 'ACCOUNT-00224', 5, 4, 224, 224);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (225, 'ACCOUNT-00225', 5, 1, 225, 225);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (226, 'ACCOUNT-00226', 3, 3, 226, 226);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (227, 'ACCOUNT-00227', 1, 2, 227, 227);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (228, 'ACCOUNT-00228', 3, 4, 228, 228);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (229, 'ACCOUNT-00229', 2, 5, 229, 229);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (230, 'ACCOUNT-00230', 2, 4, 230, 230);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (231, 'ACCOUNT-00231', 4, 1, 231, 231);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (232, 'ACCOUNT-00232', 5, 4, 232, 232);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (233, 'ACCOUNT-00233', 4, 2, 233, 233);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (234, 'ACCOUNT-00234', 4, 5, 234, 234);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (235, 'ACCOUNT-00235', 1, 3, 235, 235);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (236, 'ACCOUNT-00236', 3, 3, 236, 236);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (237, 'ACCOUNT-00237', 2, 2, 237, 237);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (238, 'ACCOUNT-00238', 3, 5, 238, 238);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (239, 'ACCOUNT-00239', 1, 4, 239, 239);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (240, 'ACCOUNT-00240', 4, 4, 240, 240);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (241, 'ACCOUNT-00241', 4, 3, 241, 241);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (242, 'ACCOUNT-00242', 5, 2, 242, 242);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (243, 'ACCOUNT-00243', 1, 2, 243, 243);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (244, 'ACCOUNT-00244', 2, 2, 244, 244);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (245, 'ACCOUNT-00245', 3, 5, 245, 245);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (246, 'ACCOUNT-00246', 2, 1, 246, 246);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (247, 'ACCOUNT-00247', 5, 5, 247, 247);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (248, 'ACCOUNT-00248', 2, 5, 248, 248);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (249, 'ACCOUNT-00249', 5, 4, 249, 249);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (250, 'ACCOUNT-00250', 1, 3, 250, 250);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (251, 'ACCOUNT-00251', 4, 4, 251, 251);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (252, 'ACCOUNT-00252', 2, 4, 252, 252);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (253, 'ACCOUNT-00253', 4, 3, 253, 253);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (254, 'ACCOUNT-00254', 3, 5, 254, 254);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (255, 'ACCOUNT-00255', 5, 5, 255, 255);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (256, 'ACCOUNT-00256', 5, 3, 256, 256);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (257, 'ACCOUNT-00257', 5, 1, 257, 257);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (258, 'ACCOUNT-00258', 2, 1, 258, 258);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (259, 'ACCOUNT-00259', 5, 1, 259, 259);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (260, 'ACCOUNT-00260', 1, 1, 260, 260);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (261, 'ACCOUNT-00261', 3, 2, 261, 261);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (262, 'ACCOUNT-00262', 2, 3, 262, 262);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (263, 'ACCOUNT-00263', 4, 2, 263, 263);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (264, 'ACCOUNT-00264', 3, 1, 264, 264);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (265, 'ACCOUNT-00265', 4, 5, 265, 265);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (266, 'ACCOUNT-00266', 3, 2, 266, 266);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (267, 'ACCOUNT-00267', 2, 2, 267, 267);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (268, 'ACCOUNT-00268', 5, 2, 268, 268);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (269, 'ACCOUNT-00269', 1, 5, 269, 269);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (270, 'ACCOUNT-00270', 5, 1, 270, 270);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (271, 'ACCOUNT-00271', 2, 1, 271, 271);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (272, 'ACCOUNT-00272', 1, 3, 272, 272);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (273, 'ACCOUNT-00273', 3, 5, 273, 273);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (274, 'ACCOUNT-00274', 4, 4, 274, 274);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (275, 'ACCOUNT-00275', 1, 5, 275, 275);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (276, 'ACCOUNT-00276', 1, 5, 276, 276);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (277, 'ACCOUNT-00277', 2, 4, 277, 277);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (278, 'ACCOUNT-00278', 3, 5, 278, 278);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (279, 'ACCOUNT-00279', 2, 5, 279, 279);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (280, 'ACCOUNT-00280', 2, 2, 280, 280);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (281, 'ACCOUNT-00281', 1, 2, 281, 281);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (282, 'ACCOUNT-00282', 1, 4, 282, 282);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (283, 'ACCOUNT-00283', 5, 1, 283, 283);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (284, 'ACCOUNT-00284', 5, 2, 284, 284);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (285, 'ACCOUNT-00285', 1, 3, 285, 285);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (286, 'ACCOUNT-00286', 2, 1, 286, 286);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (287, 'ACCOUNT-00287', 4, 1, 287, 287);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (288, 'ACCOUNT-00288', 3, 5, 288, 288);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (289, 'ACCOUNT-00289', 5, 3, 289, 289);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (290, 'ACCOUNT-00290', 3, 2, 290, 290);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (291, 'ACCOUNT-00291', 5, 5, 291, 291);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (292, 'ACCOUNT-00292', 4, 1, 292, 292);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (293, 'ACCOUNT-00293', 4, 2, 293, 293);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (294, 'ACCOUNT-00294', 3, 3, 294, 294);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (295, 'ACCOUNT-00295', 4, 2, 295, 295);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (296, 'ACCOUNT-00296', 4, 1, 296, 296);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (297, 'ACCOUNT-00297', 5, 5, 297, 297);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (298, 'ACCOUNT-00298', 3, 2, 298, 298);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (299, 'ACCOUNT-00299', 1, 1, 299, 299);
    insert into employee (id, custom_id, department_id, designation_id, employee_profile_id, employee_benefit_id)
    values (300, 'ACCOUNT-00300', 4, 5, 300, 300);`;

export default query;
