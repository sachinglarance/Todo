-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               11.1.0-MariaDB - mariadb.org binary distribution
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Dumping data for table school_management.score_details: ~10 rows (approximately)
DELETE FROM `score_details`;
INSERT INTO `score_details` (`score_id`, `score`, `student_id`, `sub_id`) VALUES
	(1, 80, 1, 1),
	(2, 87, 1, 2),
	(3, 79, 1, 3),
	(4, 88, 1, 4),
	(5, 99, 1, 5),
	(6, 70, 2, 1),
	(8, 87, 2, 2),
	(9, 79, 2, 3),
	(10, 68, 2, 4),
	(11, 88, 2, 5);

-- Dumping data for table school_management.staff_details: ~5 rows (approximately)
DELETE FROM `staff_details`;
INSERT INTO `staff_details` (`staff_id`, `staff_name`) VALUES
	(1, 'arunkumar'),
	(2, 'babu'),
	(3, 'bala'),
	(4, 'lee'),
	(5, 'dhivya');

-- Dumping data for table school_management.student_details: ~5 rows (approximately)
DELETE FROM `student_details`;
INSERT INTO `student_details` (`student_id`, `student_name`) VALUES
	(1, 'sachin'),
	(2, 'saran'),
	(3, 'naveen'),
	(4, 'athiyaman'),
	(5, 'vinoth');

-- Dumping data for table school_management.subject_details: ~5 rows (approximately)
DELETE FROM `subject_details`;
INSERT INTO `subject_details` (`sub_id`, `sub_name`, `staff_id`) VALUES
	(1, 'oc', 1),
	(2, 'ic', 2),
	(3, 'ame', 3),
	(4, 'erts', 4),
	(5, 'adhoc', 5);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
