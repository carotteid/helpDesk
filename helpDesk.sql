-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema helpdesk
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema helpdesk
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `helpdesk` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `helpdesk` ;

-- -----------------------------------------------------
-- Table `helpdesk`.`companies`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `helpdesk`.`companies` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `address` VARCHAR(255) NULL DEFAULT NULL,
  `postalCode` VARCHAR(255) NULL DEFAULT NULL,
  `city` VARCHAR(255) NULL DEFAULT NULL,
  `state` VARCHAR(255) NULL DEFAULT NULL,
  `country` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `web` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`departments`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `helpdesk`.`departments` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `priority` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `helpdesk`.`users` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `lastName` VARCHAR(255) NULL DEFAULT NULL,
  `email` VARCHAR(255) NULL DEFAULT NULL,
  `phone` VARCHAR(255) NULL DEFAULT NULL,
  `userName` VARCHAR(255) NULL DEFAULT NULL,
  `password` VARCHAR(255) NULL DEFAULT NULL,
  `admin` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `CompanyID` INT(11) NULL DEFAULT NULL,
  `DepartmentID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `CompanyID` (`CompanyID` ASC) VISIBLE,
  INDEX `DepartmentID` (`DepartmentID` ASC) VISIBLE,
  CONSTRAINT `users_ibfk_1`
    FOREIGN KEY (`CompanyID`)
    REFERENCES `helpdesk`.`companies` (`ID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `users_ibfk_2`
    FOREIGN KEY (`DepartmentID`)
    REFERENCES `helpdesk`.`departments` (`ID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`advice`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `helpdesk`.`advice` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `userTo` INT(11) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `UserID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `UserID` (`UserID` ASC) VISIBLE,
  CONSTRAINT `advice_ibfk_1`
    FOREIGN KEY (`UserID`)
    REFERENCES `helpdesk`.`users` (`ID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`categories`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `helpdesk`.`categories` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`ID`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`tickets`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `helpdesk`.`tickets` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(255) NULL DEFAULT NULL,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `status` INT(11) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `CategoryID` INT(11) NULL DEFAULT NULL,
  `DepartmentID` INT(11) NULL DEFAULT NULL,
  `UserID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `CategoryID` (`CategoryID` ASC) VISIBLE,
  INDEX `DepartmentID` (`DepartmentID` ASC) VISIBLE,
  INDEX `UserID` (`UserID` ASC) VISIBLE,
  CONSTRAINT `tickets_ibfk_1`
    FOREIGN KEY (`CategoryID`)
    REFERENCES `helpdesk`.`categories` (`ID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `tickets_ibfk_2`
    FOREIGN KEY (`DepartmentID`)
    REFERENCES `helpdesk`.`departments` (`ID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE,
  CONSTRAINT `tickets_ibfk_3`
    FOREIGN KEY (`UserID`)
    REFERENCES `helpdesk`.`users` (`ID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `helpdesk`.`monitors`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `helpdesk`.`monitors` (
  `ID` INT(11) NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(255) NULL DEFAULT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  `TicketID` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`),
  INDEX `TicketID` (`TicketID` ASC) VISIBLE,
  CONSTRAINT `monitors_ibfk_1`
    FOREIGN KEY (`TicketID`)
    REFERENCES `helpdesk`.`tickets` (`ID`)
    ON DELETE SET NULL
    ON UPDATE CASCADE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
