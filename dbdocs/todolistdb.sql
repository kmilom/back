-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema todolist
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema todolist
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `todolist` DEFAULT CHARACTER SET utf8 ;
USE `todolist` ;

-- -----------------------------------------------------
-- Table `todolist`.`Genders`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolist`.`Genders` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Gender` VARCHAR(15) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `todolist`.`People`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolist`.`People` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Name` VARCHAR(45) NOT NULL,
  `LastName` VARCHAR(45) NOT NULL,
  `Birthdate` DATE NOT NULL,
  `Email` VARCHAR(45) NOT NULL,
  `IdGender` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_People_Genders_idx` (`IdGender` ASC) VISIBLE,
  CONSTRAINT `fk_People_Genders`
    FOREIGN KEY (`IdGender`)
    REFERENCES `todolist`.`Genders` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `todolist`.`Users`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolist`.`Users` (
  `Id` INT NOT NULL,
  `Username` VARCHAR(45) NOT NULL,
  `Password` VARCHAR(100) NOT NULL,
  INDEX `fk_Users_People1_idx` (`Id` ASC) VISIBLE,
  PRIMARY KEY (`Id`),
  CONSTRAINT `fk_Users_People1`
    FOREIGN KEY (`Id`)
    REFERENCES `todolist`.`People` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `todolist`.`TaskStates`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolist`.`TaskStates` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `State` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`Id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `todolist`.`Tasks`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `todolist`.`Tasks` (
  `Id` INT NOT NULL AUTO_INCREMENT,
  `Title` VARCHAR(100) NOT NULL,
  `Description` VARCHAR(250) NOT NULL,
  `IdUser` INT NOT NULL,
  `IdTaskState` INT NOT NULL,
  PRIMARY KEY (`Id`),
  INDEX `fk_Tasks_Users1_idx` (`IdUser` ASC) VISIBLE,
  INDEX `fk_Tasks_TaskStates1_idx` (`IdTaskState` ASC) VISIBLE,
  CONSTRAINT `fk_Tasks_Users1`
    FOREIGN KEY (`IdUser`)
    REFERENCES `todolist`.`Users` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Tasks_TaskStates1`
    FOREIGN KEY (`IdTaskState`)
    REFERENCES `todolist`.`TaskStates` (`Id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
