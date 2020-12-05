-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 27, 2020 at 11:38 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cooks`
--

-- --------------------------------------------------------

--
-- Table structure for table `banners`
--

CREATE TABLE `banners` (
  `id` int(11) DEFAULT NULL,
  `bannerName` varchar(150) DEFAULT NULL,
  `bannerImgUrl` varchar(300) DEFAULT NULL,
  `positionID` smallint(6) DEFAULT NULL,
  `hyperLink` varchar(300) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `banners`
--

INSERT INTO `banners` (`id`, `bannerName`, `bannerImgUrl`, `positionID`, `hyperLink`) VALUES
(NULL, NULL, NULL, NULL, NULL),
(NULL, 'corosel', 'upload\\product_img\\bannerImgUrl1606472450470Screenshot (10).png', 32, 'www.google.com'),
(NULL, 'corosel', 'upload\\banner_img\\bannerImgUrl1606472701700Screenshot (10).png', 32, 'www.google.com'),
(NULL, 'corosel', 'upload\\banner_img\\bannerImgUrl1606472726586Screenshot (10).png', 32, 'www.google.com');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
