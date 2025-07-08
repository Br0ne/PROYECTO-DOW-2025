-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 08-07-2025 a las 07:32:25
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `arriendos_api`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `arriendos`
--

CREATE TABLE `arriendos` (
  `id` int(11) NOT NULL,
  `nombre_cliente` varchar(50) DEFAULT NULL,
  `rut_cliente` varchar(10) DEFAULT NULL,
  `tipo_vehiculo` varchar(20) DEFAULT NULL,
  `patente_vehiculo` varchar(6) DEFAULT NULL,
  `fecha_inicio` datetime DEFAULT NULL,
  `fecha_fin` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `arriendos`
--

INSERT INTO `arriendos` (`id`, `nombre_cliente`, `rut_cliente`, `tipo_vehiculo`, `patente_vehiculo`, `fecha_inicio`, `fecha_fin`) VALUES
(3, 'Rolfe Dallyn', '12990261-6', 'Sedan', 'HBKZ97', '2024-08-24 19:35:30', '2025-06-27 09:34:49'),
(4, 'Nari Goodbody', '18002062-7', 'Sedan', 'RPRD78', '2024-05-29 09:40:33', '2025-06-27 20:06:13'),
(5, 'Tilly Winthrop', '16681758-0', 'SUV', 'OJFZ50', '2025-04-02 01:20:05', '2025-01-30 11:58:56'),
(6, 'Winonah Drinkel', '10255134-1', 'Sedan', 'HQCL56', '2024-02-16 04:01:05', '2025-05-03 00:46:47'),
(7, 'Sari Favela', '14548433-8', 'SUV', 'DHLX50', '2025-03-05 22:32:28', '2025-06-27 20:20:12'),
(8, 'Jonathan Omrod', '14014523-3', 'SUV', 'JUVS03', '2024-07-10 09:56:02', '2025-06-27 20:53:36'),
(10, 'Bessie Tousey', '11288068-7', 'Camioneta', 'TJKR40', '2024-12-15 01:02:05', '2025-05-31 15:38:57'),
(11, 'Delora Caron', '10370343-2', 'SUV', 'YHPF29', '2024-04-18 03:14:24', '2025-05-06 08:04:43'),
(14, 'Rose Mabon', '12413213-6', 'Camioneta', 'BYYF79', '2024-04-07 11:13:08', '2025-01-21 07:40:46'),
(15, 'Koressa Ottewill', '14138332-0', 'Sedan', 'NGYF65', '2025-05-01 16:53:00', '2025-06-27 20:23:58'),
(16, 'Murvyn Henniger', '12325890-9', 'Camioneta', 'UCQA87', '2024-03-05 22:29:47', '2025-01-20 04:15:49'),
(17, 'Annie Dran', '14195148-1', 'Camioneta', 'XUXX46', '2024-07-11 22:04:01', NULL),
(18, 'Barrie Siddens', '10140055-0', 'Sedan', 'NQIG11', '2025-01-26 12:26:12', '2025-02-21 16:48:04'),
(19, 'Inge Ondrousek', '15272728-8', 'Sedan', 'JJQB96', '2024-04-29 21:23:27', '2024-10-14 04:18:44'),
(20, 'Nester Chadwick', '10556563-1', 'Sedan', 'XSZZ87', '2024-01-10 01:48:43', '2024-08-13 14:11:33'),
(21, 'Melisa Ferriman', '13081503-5', 'Sedan', 'PEJX71', '2025-04-05 00:53:52', '2024-04-10 07:14:20'),
(23, 'Warden Cranmere', '14702852-8', 'SUV', 'QGOI41', '2024-03-16 14:34:24', '2024-06-22 18:43:58'),
(25, 'Gib Borgesio', '17304275-8', 'Sedan', 'JXZA47', '2025-04-18 13:12:08', '2024-08-04 21:51:31'),
(26, 'Norton Mundford', '18769364-0', 'Sedan', 'YHDE58', '2024-09-14 07:53:27', '2025-06-27 20:20:33'),
(27, 'Cy Cawthorne', '12873252-4', 'SUV', 'FSWC91', '2024-03-26 04:53:34', '2025-06-01 16:45:17'),
(29, 'Tadio Gimert', '16873045-1', 'Camioneta', 'IQBJ52', '2024-01-14 05:35:43', '2025-06-27 21:00:19'),
(30, 'Minnie Allridge', '11331333-2', 'Camioneta', 'DDMN55', '2024-03-17 19:21:25', '2025-07-06 23:54:47'),
(31, 'Stefania Worman', '19081912-3', 'Camioneta', 'NVCS00', '2025-01-08 06:34:38', '2024-08-07 21:55:43'),
(32, 'Mair Kagan', '15529810-8', 'Camioneta', 'YBFL97', '2024-02-26 14:31:10', '2024-04-21 04:50:49'),
(33, 'Shelbi Cosins', '16767248-1', 'Sedan', 'APTB37', '2024-06-01 02:15:24', '2024-04-28 02:46:09'),
(34, 'Heall Ackhurst', '10722046-8', 'Camioneta', 'FBQQ46', '2024-09-29 22:45:17', '2024-09-30 00:57:03'),
(35, 'Malissia Di Maggio', '17262084-5', 'Camioneta', 'CXVX56', '2025-03-02 12:08:00', '2025-06-27 20:58:18'),
(36, 'Vina Hovell', '17059468-0', 'Camioneta', 'UGLB07', '2024-09-18 08:09:38', '2025-06-27 20:21:16'),
(37, 'Joshua Davydkov', '15641017-5', 'SUV', 'XEJU27', '2025-02-25 08:37:12', NULL),
(38, 'Fae Arthur', '13028340-7', 'Sedan', 'GFRK57', '2024-07-14 18:31:20', '2025-02-28 03:29:11'),
(39, 'Lonnie Gerriets', '16980633-4', 'Sedan', 'IEAN29', '2024-03-09 05:32:02', '2024-12-13 16:35:47'),
(41, 'Web Ives', '11357117-3', 'Camioneta', 'MXKZ80', '2025-02-08 14:22:22', '2024-01-18 01:43:05'),
(42, 'Florencia Gentreau', '16866596-0', 'Camioneta', 'JKWW90', '2024-10-30 11:42:23', '2025-06-27 20:23:25'),
(43, 'Rustie Arkill', '14323190-4', 'SUV', 'UKUT01', '2024-04-21 06:43:05', '2025-07-08 01:23:09'),
(44, 'Bealle Fowgies', '10684938-8', 'Sedan', 'QIIF93', '2024-03-03 08:09:30', '2025-06-27 20:58:37'),
(45, 'Johan Croci', '10285771-0', 'Camioneta', 'DEVT92', '2024-02-28 02:37:02', NULL),
(46, 'Bernardine Conman', '14446762-3', 'SUV', 'OWYI23', '2024-02-06 15:10:05', NULL),
(48, 'Devondra O\'Corren', '17887486-9', 'Sedan', 'PXNO76', '2024-07-04 19:33:39', '2025-04-05 16:46:38'),
(49, 'Cherrita Pitsall', '10329807-0', 'Sedan', 'NANL95', '2024-09-28 15:35:24', NULL),
(50, 'Merle Moreland', '11165630-4', 'Camioneta', 'BZKD71', '2024-02-13 06:30:09', '2024-09-15 08:00:00'),
(51, 'Sarge Boydon', '12602366-4', 'Sedan', 'GNNT65', '2025-01-21 12:09:53', '2024-04-25 19:08:20'),
(52, 'Edith Westnedge', '19560189-0', 'Sedan', 'FKPP14', '2025-02-12 02:03:13', NULL),
(53, 'Kendell Reeson', '13488049-0', 'Camioneta', 'LQQX87', '2024-01-28 11:05:39', NULL),
(54, 'Monte McGrayle', '10719377-9', 'Sedan', 'EJIZ18', '2024-11-22 03:57:35', NULL),
(55, 'Scott Ostick', '15128602-4', 'Sedan', 'TRNP63', '2024-05-18 10:25:59', '2024-10-10 16:52:38'),
(56, 'Gray Donati', '12241853-8', 'Sedan', 'GCGU25', '2024-09-13 13:05:22', '2024-08-30 14:42:28'),
(57, 'Evelina Jozef', '16540662-0', 'Sedan', 'HDKD59', '2024-09-15 00:51:05', NULL),
(58, 'Sheffy Janney', '15733859-8', 'Camioneta', 'THND92', '2024-06-01 10:42:46', NULL),
(59, 'Augustus Eltringham', '18920038-2', 'Sedan', 'MXLE46', '2024-04-26 04:18:53', NULL),
(60, 'Antonin Shea', '17556837-7', 'Sedan', 'WZCU35', '2024-09-19 01:43:06', '2024-06-13 02:50:23'),
(61, 'Christin Donat', '11241728-2', 'SUV', 'JFDJ88', '2024-04-16 06:27:45', '2025-06-27 21:00:27'),
(62, 'Emerson Joan', '17398668-8', 'Camioneta', 'LXPU02', '2024-10-19 05:37:07', '2025-06-27 20:59:01'),
(63, 'Sebastian Mays', '14095145-4', 'SUV', 'KVNK57', '2024-05-28 05:29:22', NULL),
(64, 'Giana Emanuel', '10870720-1', 'Camioneta', 'WGBF99', '2025-04-16 12:51:40', NULL),
(65, 'Grier Symms', '16642239-0', 'Camioneta', 'EIIO87', '2024-03-26 07:07:37', NULL),
(66, 'Jolyn Ellerey', '11712276-2', 'Camioneta', 'KXMK56', '2024-03-19 03:58:12', '2025-06-27 22:53:44'),
(67, 'Genia Tague', '15318260-0', 'Sedan', 'UTFS24', '2025-05-04 13:11:32', '2024-08-17 23:46:17'),
(68, 'Devan Itzhaki', '13689943-5', 'Camioneta', 'XWVJ44', '2024-09-17 11:22:53', NULL),
(69, 'Floyd Sutliff', '11372164-6', 'SUV', 'TTOJ59', '2024-06-08 09:18:32', NULL),
(70, 'Gaye Tolussi', '10617645-8', 'SUV', 'ZZGZ72', '2024-01-06 12:06:45', '2024-09-30 14:40:33'),
(71, 'Norene Kramer', '18655324-2', 'SUV', 'QQRJ86', '2024-05-23 08:33:35', '2024-12-01 04:58:00'),
(72, 'Edwina Jeste', '18969304-1', 'Camioneta', 'AZLW63', '2024-04-13 11:44:55', '2024-09-21 01:44:32'),
(73, 'Jarib Bader', '15321431-3', 'Sedan', 'XBIQ89', '2024-06-28 05:46:00', '2024-05-30 13:14:53'),
(74, 'Ben Capstick', '16473479-8', 'Camioneta', 'NWDN64', '2025-05-05 02:13:12', '2025-04-15 01:28:16'),
(75, 'Em McRuvie', '19734953-7', 'SUV', 'EKEY86', '2024-05-31 22:50:54', '2025-02-05 11:52:18'),
(76, 'Constantino Favel', '18458256-4', 'Camioneta', 'XWBA60', '2024-10-10 17:33:57', '2025-05-20 20:13:49'),
(77, 'Emilio Widmoor', '12343433-1', 'Sedan', 'MQDZ98', '2024-12-03 05:22:01', '2024-03-12 07:58:48'),
(78, 'Artair Leveridge', '13981474-7', 'SUV', 'DJRS40', '2024-10-20 21:18:34', NULL),
(79, 'Alden Attwell', '19760099-8', 'Sedan', 'IVPE01', '2024-11-21 01:48:12', NULL),
(80, 'Nevsa Firebrace', '16391481-8', 'SUV', 'AAYX75', '2024-01-10 21:23:11', '2024-01-13 16:27:14'),
(81, 'Christy Linnitt', '12882281-1', 'SUV', 'RDWQ36', '2024-09-28 12:36:57', '2024-07-16 15:22:03'),
(82, 'Rudiger Gouldbourn', '18987048-4', 'Camioneta', 'CGZK50', '2024-09-24 01:29:04', '2025-06-27 22:55:46'),
(83, 'Peter Toffalo', '15628466-4', 'SUV', 'OOLR70', '2025-02-08 06:18:28', '2025-07-07 21:28:24'),
(84, 'Alfy Tinston', '19487225-5', 'Camioneta', 'ARMB16', '2024-08-27 23:32:48', '2025-01-14 03:39:15'),
(85, 'Prescott Elcoux', '14985522-7', 'Sedan', 'ZGHP65', '2025-04-06 19:52:02', NULL),
(86, 'Dasie Cheal', '17507967-7', 'SUV', 'ONMF74', '2024-10-17 21:44:41', '2024-04-11 10:33:43'),
(87, 'Leilah Shreve', '13574378-3', 'SUV', 'UFCP72', '2024-11-18 14:26:16', NULL),
(88, 'Lenka Dodgshon', '14406119-7', 'Sedan', 'AMND08', '2024-12-17 21:18:58', '2024-10-16 11:07:00'),
(89, 'Vivi Pethybridge', '19223951-7', 'Sedan', 'ZARH18', '2025-01-02 00:42:08', NULL),
(90, 'Auria Mussotti', '19000290-7', 'SUV', 'AAAS59', '2024-03-05 10:38:50', '2024-08-30 01:18:00'),
(91, 'Benito Sachno', '17905849-3', 'Sedan', 'MKNX36', '2024-05-19 11:49:00', '2025-02-03 05:44:15'),
(92, 'Evangeline Hoff', '18570453-2', 'Camioneta', 'JZHG82', '2024-11-27 23:17:08', '2024-12-13 23:40:45'),
(93, 'Morena Mountstephen', '12097882-3', 'Camioneta', 'KYRW53', '2025-04-30 23:23:01', NULL),
(94, 'Alene Staynes', '11661977-3', 'Sedan', 'ZTMH09', '2024-10-03 11:17:14', '2024-08-29 20:42:10'),
(95, 'Jami Douglass', '16598591-5', 'SUV', 'IKJR26', '2025-04-16 18:45:08', NULL),
(96, 'Suellen O\'Hoey', '13753198-6', 'Sedan', 'CKSO28', '2024-06-02 06:21:19', '2025-04-27 23:04:34'),
(97, 'Viviana Ranfield', '19560865-3', 'Sedan', 'MJJD78', '2024-11-30 22:46:49', NULL),
(98, 'Roxi Gasperi', '16078350-5', 'Camioneta', 'YCFF15', '2024-01-01 16:51:50', '2025-05-23 10:41:06'),
(99, 'Reuven Greendale', '16601295-4', 'SUV', 'IKDJ95', '2025-06-24 23:32:00', '2024-03-07 18:41:01'),
(100, 'Malissa Grenter', '15794220-0', 'SUV', 'QVLZ07', '2024-01-20 05:46:37', '2024-06-16 03:07:16'),
(101, 'Juan ', '14355632-7', 'SUV', 'SDFF45', '2025-07-07 20:55:13', NULL),
(102, 'Fernando', '20532343-4', 'Camioneta', 'FDSF34', '2025-07-08 01:25:13', NULL),
(103, 'Bruno', '12345234-7', 'Camioneta', 'KDFR84', '2025-07-08 01:25:48', NULL),
(104, 'Rafael', '12435754-5', 'Camioneta', 'KFDJ67', '2025-07-08 03:25:48', NULL),
(105, 'Gabriel', '7384634-4', 'Sedan', 'FHCS34', '2025-07-08 03:28:15', NULL),
(106, 'Rene puente', '2745364-k', 'Camioneta', 'RENE69', '2025-07-08 04:31:31', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `email` varchar(50) NOT NULL,
  `password` varchar(60) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`email`, `password`) VALUES
('ernesto@gmail.com', '$2b$10$lOR049lCCvzPNEP4uXPPA.sk6NSeYh/wXlsEvKl4sz9Ell3ZYZlmG'),
('Juan1@yahoo.com', '$2b$10$sz3Od.YHtNU7PTnYCZyqWu31cZVsY3yXifeBs.FwxyCjv/lWcMa4S'),
('juan@gmail.com', '$2b$10$Wf51jhgAJr8jGFyB9wR.9ubjkDjMAohk.WzpSUSnuq/8rQGmTSrAW'),
('Pablo@live.ru', '$2b$10$8JPw7BHBs0P4q5VYlgMOy.I01SKEscoWeFvt6xekXfHfXp8hW0EYq'),
('pedro13@gmail.com', 'si35'),
('pedro@gmail.com', '$2b$10$6uZBYEhRpnmCuiwcuhZUcOybNRBDJqxIGneo8Xiz61Y9EqAfp5rOm'),
('superman@usm.cl', '$2b$10$80ElHgPn2mT/zvomlQxa6OxGuA1rzb6nAXs10kO0kRexZ0WOdTgja');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `arriendos`
--
ALTER TABLE `arriendos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `arriendos`
--
ALTER TABLE `arriendos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=107;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
