-- phpMyAdmin SQL Dump
-- version 4.4.15.7
-- http://www.phpmyadmin.net
--
-- Хост: 127.0.0.1:3306
-- Час створення: Лис 29 2016 р., 23:48
-- Версія сервера: 5.5.50
-- Версія PHP: 5.3.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База даних: `Motobike`
--

-- --------------------------------------------------------

--
-- Структура таблиці `Bikes`
--

CREATE TABLE IF NOT EXISTS `Bikes` (
  `ID` int(10) unsigned NOT NULL,
  `Model` text NOT NULL,
  `Year of prodaction` int(10) unsigned NOT NULL,
  `Engine Volume` int(10) unsigned NOT NULL,
  `Hourse Power` int(10) unsigned NOT NULL,
  `Rent START` date NOT NULL,
  `Rent END` date NOT NULL,
  `In Stock` tinyint(1) NOT NULL,
  `Fuel Consumption` int(10) unsigned NOT NULL,
  `Price per day` int(10) unsigned NOT NULL,
  `Order ID` int(10) unsigned NOT NULL
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `Bikes`
--

INSERT INTO `Bikes` (`ID`, `Model`, `Year of prodaction`, `Engine Volume`, `Hourse Power`, `Rent START`, `Rent END`, `In Stock`, `Fuel Consumption`, `Price per day`, `Order ID`) VALUES
(1, 'Kawasaki Z750', 2008, 750, 90, '2016-11-18', '2016-11-21', 1, 5, 20, 0),
(2, 'Suzuki Bandit', 2010, 650, 89, '2016-11-19', '2016-11-30', 1, 4, 25, 0);

-- --------------------------------------------------------

--
-- Структура таблиці `Reservation`
--

CREATE TABLE IF NOT EXISTS `Reservation` (
  `ID Bike` int(10) unsigned NOT NULL,
  `Name` varchar(50) NOT NULL,
  `SurName` varchar(50) NOT NULL,
  `Birdhday` date NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Phone` varchar(50) NOT NULL,
  `RentSTART` date NOT NULL,
  `STARTTime` time NOT NULL,
  `RentEND` date NOT NULL,
  `ENDTime` time NOT NULL,
  `Coments` text NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `Reservation`
--

INSERT INTO `Reservation` (`ID Bike`, `Name`, `SurName`, `Birdhday`, `Email`, `Phone`, `RentSTART`, `STARTTime`, `RentEND`, `ENDTime`, `Coments`) VALUES
(1, 'Vladyslav', 'Bidiuk', '1997-12-05', 'vladbidyuk@gmail.com', '+48739443095', '2016-11-30', '08:00:00', '2016-12-03', '20:00:00', 'Test case!!!'),
(2, 'Mikolay', 'Rudnev', '1996-03-14', 'egwefe@gmail.com', '352352353', '2016-11-09', '02:02:00', '2016-11-10', '14:03:00', 'blals fkf esfwfe');

-- --------------------------------------------------------

--
-- Структура таблиці `User`
--

CREATE TABLE IF NOT EXISTS `User` (
  `ID` int(10) unsigned NOT NULL,
  `Name` varchar(50) NOT NULL,
  `SurName` varchar(50) NOT NULL,
  `Country` varchar(50) NOT NULL,
  `City` varchar(50) NOT NULL,
  `Street` varchar(50) NOT NULL,
  `Age` int(10) unsigned NOT NULL,
  `Phone Number` varchar(50) NOT NULL,
  `Email` varchar(50) NOT NULL,
  `Black List` tinyint(1) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

--
-- Дамп даних таблиці `User`
--

INSERT INTO `User` (`ID`, `Name`, `SurName`, `Country`, `City`, `Street`, `Age`, `Phone Number`, `Email`, `Black List`) VALUES
(1, 'Vladyslav', 'Babii', 'Country', 'City', 'Street', 0, '', '', 0),
(3, 'Mikolay', 'Rudnev', 'Country', 'City', 'Street', 0, '', '', 0);

--
-- Індекси збережених таблиць
--

--
-- Індекси таблиці `Bikes`
--
ALTER TABLE `Bikes`
  ADD PRIMARY KEY (`ID`);

--
-- Індекси таблиці `Reservation`
--
ALTER TABLE `Reservation`
  ADD PRIMARY KEY (`ID Bike`);

--
-- Індекси таблиці `User`
--
ALTER TABLE `User`
  ADD PRIMARY KEY (`ID`);

--
-- AUTO_INCREMENT для збережених таблиць
--

--
-- AUTO_INCREMENT для таблиці `Bikes`
--
ALTER TABLE `Bikes`
  MODIFY `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT для таблиці `Reservation`
--
ALTER TABLE `Reservation`
  MODIFY `ID Bike` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT для таблиці `User`
--
ALTER TABLE `User`
  MODIFY `ID` int(10) unsigned NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
