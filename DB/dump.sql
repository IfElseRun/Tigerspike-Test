/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;


-- Dumping database structure for tigerspike_test
DROP DATABASE IF EXISTS `tigerspike_test`;
CREATE DATABASE IF NOT EXISTS `tigerspike_test` /*!40100 DEFAULT CHARACTER SET utf8mb4 */;
USE `tigerspike_test`;

-- Dumping structure for table tigerspike_test.notes
DROP TABLE IF EXISTS `notes`;
CREATE TABLE IF NOT EXISTS `notes` (
  `username` varchar(50) NOT NULL,
  `text` varchar(5000) NOT NULL,
  `lat` varchar(50) NOT NULL,
  `lon` varchar(50) NOT NULL,
  PRIMARY KEY (`username`,`lon`,`lat`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Dumping data for table tigerspike_test.notes: ~1 rows (approximately)
DELETE FROM `notes`;
/*!40000 ALTER TABLE `notes` DISABLE KEYS */;
INSERT INTO `notes` (`username`, `text`, `lat`, `lon`) VALUES
	('zlatko', 'Testing the notes from Kernersville', '36.0761962', '-80.07302059999999');
/*!40000 ALTER TABLE `notes` ENABLE KEYS */;

-- Dumping structure for procedure tigerspike_test.Notes_GetAll
DROP PROCEDURE IF EXISTS `Notes_GetAll`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `Notes_GetAll`()
BEGIN
	SELECT * FROM notes;
END//
DELIMITER ;

-- Dumping structure for procedure tigerspike_test.Notes_GetByUsername
DROP PROCEDURE IF EXISTS `Notes_GetByUsername`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `Notes_GetByUsername`(_username varchar(50))
BEGIN
	SELECT * FROM notes
    WHERE username = _username;
END//
DELIMITER ;

-- Dumping structure for procedure tigerspike_test.Notes_Insert
DROP PROCEDURE IF EXISTS `Notes_Insert`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `Notes_Insert`(
	_username varchar(50),
    _text varchar(5000),
    _lat varchar(50),
    _lon varchar(50)
)
BEGIN
	INSERT INTO notes
    (username, `text`, lat, lon) VALUES (_username, _text, _lat, _lon);
END//
DELIMITER ;

-- Dumping structure for procedure tigerspike_test.Notes_Search
DROP PROCEDURE IF EXISTS `Notes_Search`;
DELIMITER //
CREATE DEFINER=`root`@`%` PROCEDURE `Notes_Search`(_searchText varchar(250))
BEGIN
	SELECT DISTINCT * FROM notes
    WHERE `text` like concat('%', _searchText, '%') OR username like concat('%', _searchText, '%');
END//
DELIMITER ;

/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IF(@OLD_FOREIGN_KEY_CHECKS IS NULL, 1, @OLD_FOREIGN_KEY_CHECKS) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
