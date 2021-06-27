/*
Navicat MySQL Data Transfer

Source Server         : mysql
Source Server Version : 50726
Source Host           : localhost:3306
Source Database       : parking3

Target Server Type    : MYSQL
Target Server Version : 50726
File Encoding         : 65001

Date: 2021-05-23 23:21:08
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for admin
-- ----------------------------
DROP TABLE IF EXISTS `admin`;
CREATE TABLE `admin` (
  `pno` int(11) DEFAULT NULL,
  `pname` varchar(255) DEFAULT NULL,
  `plant` varchar(255) DEFAULT NULL,
  `phoneno` int(12) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of admin
-- ----------------------------
INSERT INTO `admin` VALUES ('111', '沈兆坤', '超级管理员', '1551655506');

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `name` varchar(255) DEFAULT NULL,
  `cartype` varchar(255) DEFAULT NULL,
  `carno` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('沈坤坤', 'B', '豫A123456');
INSERT INTO `car` VALUES ('坤', 'C', '豫A589');
INSERT INTO `car` VALUES ('坤', 'A', '豫A4546');

-- ----------------------------
-- Table structure for orders
-- ----------------------------
DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `carno` varchar(255) DEFAULT NULL,
  `ordersno` int(11) DEFAULT NULL,
  `outtime` datetime DEFAULT NULL,
  `intime` datetime DEFAULT NULL,
  `ordermoney` varchar(255) DEFAULT NULL,
  `boolean` int(11) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of orders
-- ----------------------------
INSERT INTO `orders` VALUES ('豫A123456', '1118335614', '2021-05-24 13:25:40', '2021-05-24 07:26:51', '29.9', '0');
INSERT INTO `orders` VALUES ('豫A589', '1242248', '2021-05-23 11:10:05', '2021-05-23 11:10:01', '0', '0');
INSERT INTO `orders` VALUES ('豫A589', '8376220', null, '2021-05-23 11:14:13', null, '0');

-- ----------------------------
-- Table structure for pos
-- ----------------------------
DROP TABLE IF EXISTS `pos`;
CREATE TABLE `pos` (
  `carno` varchar(255) DEFAULT NULL,
  `posno` int(11) NOT NULL,
  `posdes` varchar(255) DEFAULT NULL,
  `posboolean` varchar(11) DEFAULT NULL,
  PRIMARY KEY (`posno`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of pos
-- ----------------------------
INSERT INTO `pos` VALUES ('豫A123456', '11221', '鼓楼停车场A区', '1');
INSERT INTO `pos` VALUES ('', '11222', '鼓楼停车场A区', '1');
INSERT INTO `pos` VALUES ('豫A589', '11224', '鼓楼停车场A区', '1');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phoneno` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '沈兆坤', '1551655506');
INSERT INTO `user` VALUES ('10', '坤', '1551833561');
