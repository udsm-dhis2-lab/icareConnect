select distinct 'TEST'                                        as 'DAY',
                COALESCE(a.col1, 0)                                        AS 'DAY 1',
                COALESCE(a.col2, 0)                                        AS 'DAY 2',
                COALESCE(a.col3, 0)                                        AS 'DAY 3',
                COALESCE(a.col4, 0)                                        AS 'DAY 4',
                COALESCE(a.col5, 0)                                        AS 'DAY 5',
                COALESCE(a.col6, 0)                                        AS 'DAY 6',
                COALESCE(a.col7, 0)                                        AS 'DAY 7',
                COALESCE(a.col8, 0)                                        AS 'DAY 8',
                COALESCE(a.col9, 0)                                        AS 'DAY 9',
                COALESCE(a.col10, 0)                                        AS 'DAY 10',
                COALESCE(a.col11, 0)                                        AS 'DAY 11',
                COALESCE(a.col12, 0)                                        AS 'DAY 12',
                COALESCE(a.col13, 0)                                        AS 'DAY 13',
                COALESCE(a.col14, 0)                                        AS 'DAY 14',
                COALESCE(a.col15, 0)                                        AS 'DAY 15',
                COALESCE(a.col16, 0)                                        AS 'DAY 16',
                COALESCE(a.col17, 0)                                        AS 'DAY 17',
                COALESCE(a.col18, 0)                                        AS 'DAY 18',
                COALESCE(a.col19, 0)                                        AS 'DAY 19',
                COALESCE(a.col20, 0)                                        AS 'DAY 20',
                COALESCE(a.col21, 0)                                        AS 'DAY 21',
                COALESCE(a.col22, 0)                                        AS 'DAY 22',
                COALESCE(a.col23, 0)                                        AS 'DAY 23',
                COALESCE(a.col24, 0)                                        AS 'DAY 24',
                COALESCE(a.col25, 0)                                        AS 'DAY 25',
                COALESCE(a.col26, 0)                                        AS 'DAY 26',
                COALESCE(a.col27, 0)                                        AS 'DAY 27',
                COALESCE(a.col28, 0)                                        AS 'DAY 28',
                COALESCE(a.col29, 0)                                        AS 'DAY 29',
                COALESCE(a.col30, 0)                                        AS 'DAY 30',
                COALESCE(a.col31, 0)                                        AS 'DAY 31'

from (select  	SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 1, 1, 0)) AS col1,
				SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 2, 1, 0)) AS col2,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 3, 1, 0)) AS col3,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 4, 1, 0)) AS col4,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 5, 1, 0)) AS col5,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 6, 1, 0)) AS col6,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 7, 1, 0)) AS col7,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 8, 1, 0)) AS col8,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 9, 1, 0)) AS col9,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 10, 1, 0)) AS col10,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 11, 1, 0)) AS col11,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 12, 1, 0)) AS col12,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 13, 1, 0)) AS col13,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 14, 1, 0)) AS col14,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 15, 1, 0)) AS col15,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 16, 1, 0)) AS col16,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 17, 1, 0)) AS col17,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 18, 1, 0)) AS col18,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 19, 1, 0)) AS col19,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 20, 1, 0)) AS col20,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 21, 1, 0)) AS col21,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 22, 1, 0)) AS col22,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 23, 1, 0)) AS col23,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 24, 1, 0)) AS col24,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 25, 1, 0)) AS col25,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 26, 1, 0)) AS col26,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 27, 1, 0)) AS col27,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 28, 1, 0)) AS col28,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 29, 1, 0)) AS col29,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 30, 1, 0)) AS col30,
                SUM(IF(DAY(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT')) = 31, 1, 0)) AS col31


      from visit v
        INNER JOIN person p ON p.person_id=v.patient_id
        INNER JOIN encounter test_order_encounter ON test_order_encounter.visit_id=v.visit_id
        INNER JOIN orders test_order_order ON test_order_order.encounter_id=test_order_encounter.encounter_id
        INNER JOIN concept test_order_concept ON test_order_concept.concept_id=test_order_order.concept_id AND (test_order_concept.concept_id=(select concept_id from concept where uuid =:uuid))
        INNER JOIN lb_sample_order so ON so.order_id = test_order_order.order_id
        INNER JOIN lb_sample sp ON sp.sample_id = so.sample_id AND sp.sample_id NOT IN(SELECT sps.sample_id FROM lb_sample_status sps WHERE sps.category = 'HAS_RESULTS')
        WHERE CAST(CONVERT_TZ(v.date_started,'Etc/GMT+3','GMT') AS DATE) BETWEEN :startDate and :endDate
     ) as a
