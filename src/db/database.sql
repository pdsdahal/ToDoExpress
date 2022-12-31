CREATE TABLE `canteen`.`roles` (
  `role_id` INT NOT NULL AUTO_INCREMENT,
  `role_name` VARCHAR(255) NULL,
  PRIMARY KEY (`role_id`));



CREATE TABLE `canteen`.`user` (
  `user_id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `role_id` int NOT NULL,
  `last_updated_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `enrollment_dt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`user_id`)); 