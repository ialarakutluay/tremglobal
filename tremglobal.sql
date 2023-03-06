/*
 Navicat MySQL Data Transfer

 Source Server         : Tremglobal.
 Source Server Type    : MySQL
 Source Server Version : 50740 (5.7.40)
 Source Host           : localhost:3306
 Source Schema         : tremglobal

 Target Server Type    : MySQL
 Target Server Version : 50740 (5.7.40)
 File Encoding         : 65001

 Date: 06/03/2023 11:02:34
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for users
-- ----------------------------
DROP TABLE IF EXISTS `users`;
CREATE TABLE `users`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  `phone` varchar(255) CHARACTER SET utf32 COLLATE utf32_turkish_ci NOT NULL,
  `reference` varchar(255) CHARACTER SET utf8 COLLATE utf8_turkish_ci NOT NULL,
  `created_date` timestamp NOT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 25 CHARACTER SET = utf8 COLLATE = utf8_turkish_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of users
-- ----------------------------
INSERT INTO `users` VALUES (17, 'Alara Kutluay', 'deneme@gmail.com', '05514402477', 'http://localhost:3000/', '2023-03-04 01:26:29');

SET FOREIGN_KEY_CHECKS = 1;
