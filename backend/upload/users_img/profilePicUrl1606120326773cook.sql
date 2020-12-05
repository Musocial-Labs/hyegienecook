-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 15, 2020 at 09:11 AM
-- Server version: 8.0.18
-- PHP Version: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cook`
--

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `id` int(11) NOT NULL,
  `catName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `parentCategoryId` int(11) DEFAULT NULL,
  `status` int(5) DEFAULT '0',
  `createdTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `orders`
--

CREATE TABLE `orders` (
  `orderId` int(11) NOT NULL,
  `userid` int(25) DEFAULT NULL,
  `transactionNo` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `transactionStatus` varchar(80) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `orderDetails` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `orderStatus` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `refund` varchar(40) COLLATE utf8mb4_general_ci DEFAULT 'NO',
  `paymentTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `catId` int(11) DEFAULT NULL,
  `menuName` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `calories` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `protein` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fat` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `carbohydrates` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `fibre` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `productImage` varchar(225) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `costPrice` float(10,2) DEFAULT NULL,
  `regularPrice` float(10,2) DEFAULT NULL,
  `sellPrice` float(10,2) DEFAULT NULL,
  `createdTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `siteconfig`
--

CREATE TABLE `siteconfig` (
  `siteEmail` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `siteMobile` bigint(255) DEFAULT NULL,
  `smtpHost` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `smtpEmail` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `smtpUsername` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `smtpPassword` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `smtpSecType` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `smtpPort` smallint(255) DEFAULT NULL,
  `activePaymentMethod` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `paytmMID` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `paytmMkey` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `paytmWebsite` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `paytmIndustryType` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `paytmChannelID` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `paytmTransUrl` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `paytmStatusUrl` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `razorpayKeyId` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `razorpayKeySecret` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `name` longtext COLLATE utf8mb4_general_ci,
  `ipaddress` varchar(16) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `incart` varchar(180) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `mobile` varchar(80) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `email` varchar(80) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `regTime` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `lastlogin` datetime DEFAULT NULL,
  `deviceType` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  `secretKey` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`orderId`);

--
-- Indexes for table `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `orders`
--
ALTER TABLE `orders`
  MODIFY `orderId` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
