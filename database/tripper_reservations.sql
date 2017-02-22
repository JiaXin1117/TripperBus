/*
Navicat MySQL Data Transfer

Source Server         : TripperBus
Source Server Version : 50712
Source Host           : tb.washny.com:3306
Source Database       : tripper_reservations

Target Server Type    : MYSQL
Target Server Version : 50712
File Encoding         : 65001

Date: 2017-02-16 00:25:10
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for `campaigns`
-- ----------------------------
DROP TABLE IF EXISTS `campaigns`;
CREATE TABLE `campaigns` (
  `campaign_id` smallint(3) NOT NULL AUTO_INCREMENT,
  `campaign_name` varchar(25) NOT NULL,
  `start_date` date NOT NULL,
  `end_date` date NOT NULL,
  `coupon_company_id` tinyint(1) NOT NULL,
  `never_expires` tinyint(4) NOT NULL,
  PRIMARY KEY (`campaign_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of campaigns
-- ----------------------------

-- ----------------------------
-- Table structure for `campaign_bo_dates`
-- ----------------------------
DROP TABLE IF EXISTS `campaign_bo_dates`;
CREATE TABLE `campaign_bo_dates` (
  `campaign_bo_dates_id` mediumint(9) NOT NULL AUTO_INCREMENT,
  `campaign_id` tinyint(1) NOT NULL,
  `blackout_date` date NOT NULL,
  PRIMARY KEY (`campaign_bo_dates_id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of campaign_bo_dates
-- ----------------------------

-- ----------------------------
-- Table structure for `codes`
-- ----------------------------
DROP TABLE IF EXISTS `codes`;
CREATE TABLE `codes` (
  `code_id` int(7) NOT NULL AUTO_INCREMENT,
  `company_id` tinyint(1) NOT NULL,
  `campaign_id` smallint(3) NOT NULL,
  `code` varchar(20) NOT NULL,
  `one_or_two` tinyint(1) NOT NULL,
  `portions_available` tinyint(1) NOT NULL,
  `comments` varchar(75) NOT NULL,
  `price` decimal(4,0) NOT NULL,
  `reusable` tinyint(1) NOT NULL,
  `limited_schedule` tinyint(1) NOT NULL DEFAULT '1',
  `type` tinyint(1) NOT NULL,
  `max_can_detuct_from` decimal(4,0) NOT NULL,
  PRIMARY KEY (`code_id`)
) ENGINE=InnoDB AUTO_INCREMENT=31049 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of codes
-- ----------------------------

-- ----------------------------
-- Table structure for `coupon_companies`
-- ----------------------------
DROP TABLE IF EXISTS `coupon_companies`;
CREATE TABLE `coupon_companies` (
  `company_id` tinyint(2) NOT NULL AUTO_INCREMENT,
  `coupon_company` varchar(20) NOT NULL,
  PRIMARY KEY (`company_id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of coupon_companies
-- ----------------------------

-- ----------------------------
-- Table structure for `customers`
-- ----------------------------
DROP TABLE IF EXISTS `customers`;
CREATE TABLE `customers` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fname` varchar(75) NOT NULL DEFAULT '',
  `lname` varchar(75) NOT NULL DEFAULT '',
  `phnum` varchar(35) NOT NULL DEFAULT '',
  `eadd` varchar(100) DEFAULT NULL,
  `noway` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=737642 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of customers
-- ----------------------------

-- ----------------------------
-- Table structure for `datemaxcap`
-- ----------------------------
DROP TABLE IF EXISTS `datemaxcap`;
CREATE TABLE `datemaxcap` (
  `dotrav` varchar(25) NOT NULL DEFAULT '',
  `whichbus` varchar(10) NOT NULL DEFAULT '',
  `leavefrom` varchar(10) NOT NULL DEFAULT '',
  `maxnum` varchar(4) NOT NULL DEFAULT '',
  `area_id` char(2) NOT NULL DEFAULT '',
  KEY `dotrav` (`dotrav`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of datemaxcap
-- ----------------------------

-- ----------------------------
-- Table structure for `dtd_groups`
-- ----------------------------
DROP TABLE IF EXISTS `dtd_groups`;
CREATE TABLE `dtd_groups` (
  `dtd_id` int(7) NOT NULL AUTO_INCREMENT,
  `group_id` int(7) NOT NULL DEFAULT '0',
  `dtd_eta` time NOT NULL DEFAULT '00:00:00',
  `dtd_max_cap` int(3) NOT NULL DEFAULT '0',
  `dtd_date` date NOT NULL DEFAULT '0000-00-00',
  `bus_notes` varchar(45) NOT NULL,
  `bus_closed` tinyint(1) NOT NULL,
  `dtd_max_cap_coupons` varchar(2) NOT NULL,
  PRIMARY KEY (`dtd_id`)
) ENGINE=MyISAM AUTO_INCREMENT=7358 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of dtd_groups
-- ----------------------------

-- ----------------------------
-- Table structure for `page_names`
-- ----------------------------
DROP TABLE IF EXISTS `page_names`;
CREATE TABLE `page_names` (
  `page_name_id` int(7) NOT NULL AUTO_INCREMENT,
  `page_name` varchar(30) NOT NULL DEFAULT '',
  `page_path` varchar(30) NOT NULL DEFAULT '',
  PRIMARY KEY (`page_name_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of page_names
-- ----------------------------

-- ----------------------------
-- Table structure for `permissions`
-- ----------------------------
DROP TABLE IF EXISTS `permissions`;
CREATE TABLE `permissions` (
  `permission_id` int(7) NOT NULL AUTO_INCREMENT,
  `permission` varchar(30) NOT NULL DEFAULT '',
  `deleted` char(1) NOT NULL DEFAULT '',
  PRIMARY KEY (`permission_id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of permissions
-- ----------------------------
INSERT INTO `permissions` VALUES ('1', 'Users', '');
INSERT INTO `permissions` VALUES ('4', 'Bus Stops', '');
INSERT INTO `permissions` VALUES ('5', 'Max Caps', '');
INSERT INTO `permissions` VALUES ('6', 'Schedules', '');
INSERT INTO `permissions` VALUES ('7', 'Basics', '');
INSERT INTO `permissions` VALUES ('8', 'Site Search', '');
INSERT INTO `permissions` VALUES ('2', 'Personalization', '');
INSERT INTO `permissions` VALUES ('9', 'Accounts', '');
INSERT INTO `permissions` VALUES ('3', 'Reservation Work', '');
INSERT INTO `permissions` VALUES ('10', 'Move People From Bus To Bus', '');
INSERT INTO `permissions` VALUES ('11', 'Prices', '');
INSERT INTO `permissions` VALUES ('12', 'Promos', '');
INSERT INTO `permissions` VALUES ('13', 'Monthly Totals A.', '');
INSERT INTO `permissions` VALUES ('14', 'Monthly Totals P.', '');
INSERT INTO `permissions` VALUES ('15', 'Delete Groupons', '');

-- ----------------------------
-- Table structure for `permissions_to_pages`
-- ----------------------------
DROP TABLE IF EXISTS `permissions_to_pages`;
CREATE TABLE `permissions_to_pages` (
  `ptop_id` int(7) NOT NULL AUTO_INCREMENT,
  `permission_id` int(7) NOT NULL DEFAULT '0',
  `page_name` varchar(50) NOT NULL DEFAULT '',
  `deleted` char(1) NOT NULL DEFAULT '',
  PRIMARY KEY (`ptop_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of permissions_to_pages
-- ----------------------------

-- ----------------------------
-- Table structure for `point_actions`
-- ----------------------------
DROP TABLE IF EXISTS `point_actions`;
CREATE TABLE `point_actions` (
  `point_action_id` int(6) NOT NULL AUTO_INCREMENT,
  `user_id` smallint(2) NOT NULL,
  `customer_id` int(7) NOT NULL,
  `reason` varchar(100) NOT NULL,
  `points` varchar(5) NOT NULL,
  PRIMARY KEY (`point_action_id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of point_actions
-- ----------------------------

-- ----------------------------
-- Table structure for `res_actions`
-- ----------------------------
DROP TABLE IF EXISTS `res_actions`;
CREATE TABLE `res_actions` (
  `res_actions_id` int(11) NOT NULL AUTO_INCREMENT,
  `res_id` int(11) NOT NULL,
  `res_actions_admin` tinyint(1) NOT NULL,
  `res_actions_to` varchar(75) NOT NULL,
  `res_actions_type` tinyint(1) NOT NULL,
  `res_actions_datetime` datetime NOT NULL,
  `res_actions_subject` varchar(75) NOT NULL,
  `res_actions_body` text NOT NULL,
  `res_actions_seats` tinyint(1) NOT NULL,
  `res_actions_new` varchar(20) NOT NULL,
  `counter_field` int(11) NOT NULL,
  `from_phone` decimal(10,0) NOT NULL,
  `to_phone` decimal(10,0) NOT NULL,
  PRIMARY KEY (`res_actions_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23467 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of res_actions
-- ----------------------------

-- ----------------------------
-- Table structure for `res_areas`
-- ----------------------------
DROP TABLE IF EXISTS `res_areas`;
CREATE TABLE `res_areas` (
  `area_id` smallint(2) NOT NULL AUTO_INCREMENT,
  `area_name` varchar(30) NOT NULL DEFAULT '',
  `num_of_rows` smallint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`area_id`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of res_areas
-- ----------------------------
INSERT INTO `res_areas` VALUES ('1', 'New York City', '1');
INSERT INTO `res_areas` VALUES ('2', 'Washington DC Area', '2');

-- ----------------------------
-- Table structure for `res_basics`
-- ----------------------------
DROP TABLE IF EXISTS `res_basics`;
CREATE TABLE `res_basics` (
  `company_name` varchar(75) NOT NULL DEFAULT '',
  `email_from` varchar(75) NOT NULL DEFAULT '',
  `email_footers` mediumtext NOT NULL,
  `advance_reserve` smallint(3) NOT NULL DEFAULT '0',
  `max_reserve` smallint(3) NOT NULL DEFAULT '0',
  `res_start_num` mediumint(3) NOT NULL DEFAULT '0',
  `company_phone` varchar(20) NOT NULL DEFAULT '',
  `company_website` varchar(50) NOT NULL DEFAULT '',
  `company_email` varchar(60) NOT NULL DEFAULT '',
  `default_max_cap` smallint(3) NOT NULL DEFAULT '0',
  `reserve_deadline` smallint(4) NOT NULL DEFAULT '0',
  `email_notes_ta` tinyint(1) NOT NULL DEFAULT '1',
  `reservation_footer` mediumtext NOT NULL,
  `marquee` varchar(500) NOT NULL,
  `special_announcement` varchar(500) NOT NULL,
  `important_message` varchar(500) NOT NULL,
  `working_on_site` tinyint(1) NOT NULL,
  `reservation_initial_fee` decimal(4,2) NOT NULL,
  `reservation_reschedule_fee` decimal(4,2) NOT NULL,
  `wdc_fee` decimal(4,2) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of res_basics
-- ----------------------------
INSERT INTO `res_basics` VALUES ('Tripper Bus', 'Tripper Bus Reservations', '\r\nSincerely,\r\n\r\nThe Tripper Bus Company. \r\n\r\n_______________________________________________\r\n\r\n<b>Please note</b>: On Saturdays, please call the following number for inquiries only: 703.339.0333\r\n\r\nWhen traveling with us, please be at the bus stop at least 15 minutes before travel time.\r\n\r\nPlease Note: your seat is ONLY GUARANTEED for the pickup location you have specified when booking your ticket.\r\n\r\nTo change or cancel any reservation, use the Edit My Trip feature on our website. Alternatively, you may call us toll-free at 1-718-834-9214. One of our reps will gladly help.\r\n\r\nSign-up & become a member of our Rewards Program today!\r\nRemember : For every 8 one-way ticket or 4 round trip tickets you purchase under your account, you will receive a free one-way ticket next time you book with us!\r\n\r\nPlease Note: We are not responsible for damaged, lost, or stolen packages during loading or unloading.', '60', '50', '9', '1.718.834.9214', 'www.tripperbus.com', 'info@tripperbus.com', '57', '30', '1', 'Please be at the bus stop at least 15 minutes before travel time, otherwise your seat may be assigned to another passenger.\r\n<b>Your seat is ONLY GUARANTEED for the pickup location you have specified when booking your ticket.</b>\r\nThis ticket is non refundable. However, you may reschedule or put your  ticket on hold up until 12:00 am midnight prior to travel. Use the Edit My Trip feature on our website to do this. Alternatively, you may contact us at 1-718-834-9214 during business hours or email us at info@tripperbus.com. If you do not change the reservation before that time and don\'t travel, your ticket will be forfeited.\r\n\r\n<b>Please note</b>: On Saturdays, please call the following number for inquiries only: 703.339.0333\r\n\r\n\r\nPlease Note: We are not responsible for damaged, lost, or stolen packages during loading or unloading.\r\n\r\nTransportation provided by Q.T. Transport MC#453103\r\n\r\nFrom all of us at Tripper Bus - Have a safe trip!! ', 'Our new website - what do you say to it?', '', '', '0', '1.50', '1.00', '0.75');

-- ----------------------------
-- Table structure for `res_codes`
-- ----------------------------
DROP TABLE IF EXISTS `res_codes`;
CREATE TABLE `res_codes` (
  `code_id` int(7) NOT NULL AUTO_INCREMENT,
  `company_id` tinyint(1) NOT NULL,
  `campaign_id` smallint(3) NOT NULL,
  `code` varchar(20) NOT NULL,
  `price` decimal(2,0) NOT NULL,
  PRIMARY KEY (`code_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of res_codes
-- ----------------------------

-- ----------------------------
-- Table structure for `res_customers`
-- ----------------------------
DROP TABLE IF EXISTS `res_customers`;
CREATE TABLE `res_customers` (
  `customer_id` mediumint(6) NOT NULL AUTO_INCREMENT,
  `fname` varchar(15) NOT NULL,
  `lname` varchar(15) NOT NULL,
  `address` varchar(35) NOT NULL,
  `address2` varchar(35) NOT NULL,
  `city` varchar(20) NOT NULL,
  `state_id` tinyint(2) NOT NULL,
  `zip` varchar(12) NOT NULL,
  `phone` varchar(15) NOT NULL,
  `customer_email` varchar(50) NOT NULL,
  `customer_pass` varchar(12) NOT NULL,
  `ipaddress` varchar(20) NOT NULL,
  `date_joined` datetime NOT NULL DEFAULT '0000-00-00 00:00:00',
  `account_points` int(5) NOT NULL,
  `mailing_list` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`customer_id`),
  KEY `customer_id` (`customer_id`),
  KEY `customer_email` (`customer_email`)
) ENGINE=MyISAM AUTO_INCREMENT=21775 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of res_customers
-- ----------------------------

-- ----------------------------
-- Table structure for `res_groups`
-- ----------------------------
DROP TABLE IF EXISTS `res_groups`;
CREATE TABLE `res_groups` (
  `group_id` int(7) NOT NULL AUTO_INCREMENT,
  `eta` time NOT NULL DEFAULT '00:00:00',
  `max_cap` int(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`group_id`)
) ENGINE=MyISAM AUTO_INCREMENT=73 DEFAULT CHARSET=latin1 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of res_groups
-- ----------------------------
INSERT INTO `res_groups` VALUES ('1', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('2', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('3', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('4', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('5', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('6', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('7', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('8', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('9', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('10', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('11', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('12', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('13', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('14', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('15', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('16', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('17', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('18', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('19', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('20', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('21', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('22', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('23', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('24', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('25', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('26', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('27', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('28', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('29', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('30', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('31', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('32', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('33', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('34', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('35', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('36', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('37', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('38', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('39', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('40', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('41', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('42', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('43', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('44', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('45', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('46', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('47', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('48', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('49', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('50', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('51', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('52', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('53', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('54', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('55', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('56', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('57', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('58', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('59', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('60', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('61', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('62', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('63', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('64', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('65', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('66', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('67', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('68', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('69', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('70', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('71', '00:00:00', '57');
INSERT INTO `res_groups` VALUES ('72', '00:00:00', '57');

-- ----------------------------
-- Table structure for `res_group_to_dest`
-- ----------------------------
DROP TABLE IF EXISTS `res_group_to_dest`;
CREATE TABLE `res_group_to_dest` (
  `g_to_dest_id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL DEFAULT '0',
  `dest_id` mediumint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`g_to_dest_id`)
) ENGINE=MyISAM AUTO_INCREMENT=122 DEFAULT CHARSET=latin1 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of res_group_to_dest
-- ----------------------------
INSERT INTO `res_group_to_dest` VALUES ('14', '1', '3');
INSERT INTO `res_group_to_dest` VALUES ('13', '1', '2');
INSERT INTO `res_group_to_dest` VALUES ('16', '2', '3');
INSERT INTO `res_group_to_dest` VALUES ('15', '2', '2');
INSERT INTO `res_group_to_dest` VALUES ('18', '3', '3');
INSERT INTO `res_group_to_dest` VALUES ('17', '3', '2');
INSERT INTO `res_group_to_dest` VALUES ('20', '4', '3');
INSERT INTO `res_group_to_dest` VALUES ('19', '4', '2');
INSERT INTO `res_group_to_dest` VALUES ('24', '5', '3');
INSERT INTO `res_group_to_dest` VALUES ('23', '5', '2');
INSERT INTO `res_group_to_dest` VALUES ('22', '6', '3');
INSERT INTO `res_group_to_dest` VALUES ('21', '6', '2');
INSERT INTO `res_group_to_dest` VALUES ('25', '7', '2');
INSERT INTO `res_group_to_dest` VALUES ('26', '7', '3');
INSERT INTO `res_group_to_dest` VALUES ('27', '8', '2');
INSERT INTO `res_group_to_dest` VALUES ('28', '8', '3');
INSERT INTO `res_group_to_dest` VALUES ('29', '9', '2');
INSERT INTO `res_group_to_dest` VALUES ('30', '9', '3');
INSERT INTO `res_group_to_dest` VALUES ('31', '10', '2');
INSERT INTO `res_group_to_dest` VALUES ('32', '10', '3');
INSERT INTO `res_group_to_dest` VALUES ('33', '11', '2');
INSERT INTO `res_group_to_dest` VALUES ('34', '11', '3');
INSERT INTO `res_group_to_dest` VALUES ('35', '12', '2');
INSERT INTO `res_group_to_dest` VALUES ('36', '12', '3');
INSERT INTO `res_group_to_dest` VALUES ('37', '13', '2');
INSERT INTO `res_group_to_dest` VALUES ('38', '13', '3');
INSERT INTO `res_group_to_dest` VALUES ('39', '14', '2');
INSERT INTO `res_group_to_dest` VALUES ('40', '14', '3');
INSERT INTO `res_group_to_dest` VALUES ('41', '15', '2');
INSERT INTO `res_group_to_dest` VALUES ('42', '15', '3');
INSERT INTO `res_group_to_dest` VALUES ('43', '16', '2');
INSERT INTO `res_group_to_dest` VALUES ('44', '16', '3');
INSERT INTO `res_group_to_dest` VALUES ('45', '17', '2');
INSERT INTO `res_group_to_dest` VALUES ('46', '17', '3');
INSERT INTO `res_group_to_dest` VALUES ('47', '18', '2');
INSERT INTO `res_group_to_dest` VALUES ('48', '18', '3');
INSERT INTO `res_group_to_dest` VALUES ('49', '19', '2');
INSERT INTO `res_group_to_dest` VALUES ('50', '19', '3');
INSERT INTO `res_group_to_dest` VALUES ('51', '20', '2');
INSERT INTO `res_group_to_dest` VALUES ('52', '20', '3');
INSERT INTO `res_group_to_dest` VALUES ('53', '21', '2');
INSERT INTO `res_group_to_dest` VALUES ('54', '21', '3');
INSERT INTO `res_group_to_dest` VALUES ('55', '22', '2');
INSERT INTO `res_group_to_dest` VALUES ('56', '22', '3');
INSERT INTO `res_group_to_dest` VALUES ('57', '23', '2');
INSERT INTO `res_group_to_dest` VALUES ('58', '23', '3');
INSERT INTO `res_group_to_dest` VALUES ('59', '24', '2');
INSERT INTO `res_group_to_dest` VALUES ('60', '24', '3');
INSERT INTO `res_group_to_dest` VALUES ('61', '25', '2');
INSERT INTO `res_group_to_dest` VALUES ('62', '25', '3');
INSERT INTO `res_group_to_dest` VALUES ('63', '26', '2');
INSERT INTO `res_group_to_dest` VALUES ('64', '26', '3');
INSERT INTO `res_group_to_dest` VALUES ('65', '27', '2');
INSERT INTO `res_group_to_dest` VALUES ('66', '27', '3');
INSERT INTO `res_group_to_dest` VALUES ('67', '28', '2');
INSERT INTO `res_group_to_dest` VALUES ('68', '28', '3');
INSERT INTO `res_group_to_dest` VALUES ('69', '29', '2');
INSERT INTO `res_group_to_dest` VALUES ('70', '29', '3');
INSERT INTO `res_group_to_dest` VALUES ('71', '30', '2');
INSERT INTO `res_group_to_dest` VALUES ('72', '30', '3');
INSERT INTO `res_group_to_dest` VALUES ('73', '31', '2');
INSERT INTO `res_group_to_dest` VALUES ('74', '31', '3');
INSERT INTO `res_group_to_dest` VALUES ('75', '32', '2');
INSERT INTO `res_group_to_dest` VALUES ('76', '32', '3');
INSERT INTO `res_group_to_dest` VALUES ('77', '33', '2');
INSERT INTO `res_group_to_dest` VALUES ('78', '33', '3');
INSERT INTO `res_group_to_dest` VALUES ('79', '34', '1');
INSERT INTO `res_group_to_dest` VALUES ('80', '35', '1');
INSERT INTO `res_group_to_dest` VALUES ('81', '36', '1');
INSERT INTO `res_group_to_dest` VALUES ('82', '37', '1');
INSERT INTO `res_group_to_dest` VALUES ('83', '38', '1');
INSERT INTO `res_group_to_dest` VALUES ('84', '39', '1');
INSERT INTO `res_group_to_dest` VALUES ('85', '40', '1');
INSERT INTO `res_group_to_dest` VALUES ('86', '41', '1');
INSERT INTO `res_group_to_dest` VALUES ('87', '42', '1');
INSERT INTO `res_group_to_dest` VALUES ('88', '43', '1');
INSERT INTO `res_group_to_dest` VALUES ('89', '44', '1');
INSERT INTO `res_group_to_dest` VALUES ('90', '45', '1');
INSERT INTO `res_group_to_dest` VALUES ('91', '46', '1');
INSERT INTO `res_group_to_dest` VALUES ('92', '47', '1');
INSERT INTO `res_group_to_dest` VALUES ('93', '48', '1');
INSERT INTO `res_group_to_dest` VALUES ('94', '49', '1');
INSERT INTO `res_group_to_dest` VALUES ('95', '50', '1');
INSERT INTO `res_group_to_dest` VALUES ('96', '51', '1');
INSERT INTO `res_group_to_dest` VALUES ('97', '52', '1');
INSERT INTO `res_group_to_dest` VALUES ('98', '53', '1');
INSERT INTO `res_group_to_dest` VALUES ('99', '54', '1');
INSERT INTO `res_group_to_dest` VALUES ('100', '55', '1');
INSERT INTO `res_group_to_dest` VALUES ('101', '56', '1');
INSERT INTO `res_group_to_dest` VALUES ('102', '57', '1');
INSERT INTO `res_group_to_dest` VALUES ('103', '58', '1');
INSERT INTO `res_group_to_dest` VALUES ('104', '59', '1');
INSERT INTO `res_group_to_dest` VALUES ('105', '60', '1');
INSERT INTO `res_group_to_dest` VALUES ('106', '61', '1');
INSERT INTO `res_group_to_dest` VALUES ('107', '62', '1');
INSERT INTO `res_group_to_dest` VALUES ('108', '63', '1');
INSERT INTO `res_group_to_dest` VALUES ('109', '64', '1');
INSERT INTO `res_group_to_dest` VALUES ('110', '65', '1');
INSERT INTO `res_group_to_dest` VALUES ('111', '66', '1');
INSERT INTO `res_group_to_dest` VALUES ('112', '67', '1');
INSERT INTO `res_group_to_dest` VALUES ('113', '68', '1');
INSERT INTO `res_group_to_dest` VALUES ('114', '69', '2');
INSERT INTO `res_group_to_dest` VALUES ('115', '69', '3');
INSERT INTO `res_group_to_dest` VALUES ('116', '70', '2');
INSERT INTO `res_group_to_dest` VALUES ('117', '70', '3');
INSERT INTO `res_group_to_dest` VALUES ('118', '71', '2');
INSERT INTO `res_group_to_dest` VALUES ('119', '71', '3');
INSERT INTO `res_group_to_dest` VALUES ('120', '72', '2');
INSERT INTO `res_group_to_dest` VALUES ('121', '72', '3');

-- ----------------------------
-- Table structure for `res_holidays`
-- ----------------------------
DROP TABLE IF EXISTS `res_holidays`;
CREATE TABLE `res_holidays` (
  `holiday_id` int(5) NOT NULL AUTO_INCREMENT,
  `holiday_date` date NOT NULL DEFAULT '0000-00-00',
  `holiday_name` char(35) NOT NULL DEFAULT '',
  `holiday_pricing` tinyint(1) NOT NULL,
  `area_id` tinyint(4) NOT NULL,
  PRIMARY KEY (`holiday_id`)
) ENGINE=MyISAM AUTO_INCREMENT=700 DEFAULT CHARSET=latin1 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of res_holidays
-- ----------------------------

-- ----------------------------
-- Table structure for `res_max_nums`
-- ----------------------------
DROP TABLE IF EXISTS `res_max_nums`;
CREATE TABLE `res_max_nums` (
  `max_nums_id` int(5) NOT NULL AUTO_INCREMENT,
  `area_id` tinyint(1) NOT NULL DEFAULT '0',
  `group_id` smallint(2) NOT NULL DEFAULT '0',
  `max_date` date NOT NULL DEFAULT '0000-00-00',
  `max_num` smallint(3) NOT NULL DEFAULT '0',
  PRIMARY KEY (`max_nums_id`)
) ENGINE=MyISAM DEFAULT CHARSET=latin1 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of res_max_nums
-- ----------------------------

-- ----------------------------
-- Table structure for `res_payment_options`
-- ----------------------------
DROP TABLE IF EXISTS `res_payment_options`;
CREATE TABLE `res_payment_options` (
  `payments_order` tinyint(2) NOT NULL,
  `p_method` tinyint(2) NOT NULL,
  `payment_description` varchar(25) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of res_payment_options
-- ----------------------------
INSERT INTO `res_payment_options` VALUES ('1', '1', 'Credit Card');
INSERT INTO `res_payment_options` VALUES ('2', '4', 'Ivy Media');
INSERT INTO `res_payment_options` VALUES ('3', '2', 'Coupons/Points');
INSERT INTO `res_payment_options` VALUES ('5', '3', 'Cust. Already Paid');
INSERT INTO `res_payment_options` VALUES ('6', '5', 'Re-scheduled Old Trip');
INSERT INTO `res_payment_options` VALUES ('4', '0', 'No Payment');
INSERT INTO `res_payment_options` VALUES ('7', '7', 'Promotional Code');
INSERT INTO `res_payment_options` VALUES ('8', '8', 'Cash At the Bus');
INSERT INTO `res_payment_options` VALUES ('9', '9', 'Card Scanner At The Bus');
INSERT INTO `res_payment_options` VALUES ('4', '6', 'Re-Scheduled At the Bus');

-- ----------------------------
-- Table structure for `res_reservations`
-- ----------------------------
DROP TABLE IF EXISTS `res_reservations`;
CREATE TABLE `res_reservations` (
  `res_id` int(15) NOT NULL AUTO_INCREMENT,
  `customer_id` int(6) NOT NULL,
  `fname` varchar(20) CHARACTER SET latin1 NOT NULL DEFAULT 'NULL',
  `lname` varchar(20) CHARACTER SET latin1 NOT NULL DEFAULT 'NULL',
  `phone` varchar(20) CHARACTER SET latin1 NOT NULL DEFAULT 'NULL',
  `eadd` varchar(60) CHARACTER SET latin1 NOT NULL DEFAULT 'NULL',
  `time_id` int(11) NOT NULL,
  `dotrav` date NOT NULL DEFAULT '0000-00-00',
  `retdotrav` date NOT NULL DEFAULT '0000-00-00',
  `resnum` varchar(18) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `retresnum` varchar(18) CHARACTER SET latin1 NOT NULL,
  `numofseats` smallint(2) NOT NULL DEFAULT '0',
  `originalseats` smallint(2) unsigned NOT NULL DEFAULT '0',
  `seats_on_hold` smallint(2) NOT NULL,
  `madeby` smallint(1) NOT NULL,
  `ipaddress` varchar(13) CHARACTER SET latin1 NOT NULL DEFAULT '',
  `ipcountry` varchar(10) CHARACTER SET latin1 NOT NULL,
  `res_notes` text CHARACTER SET latin1 NOT NULL,
  `other_id` int(11) NOT NULL,
  `date_made` datetime NOT NULL,
  `dest_id` int(11) NOT NULL,
  `price_per_leg` decimal(6,2) NOT NULL,
  `points_used` smallint(3) NOT NULL,
  `points_earned` smallint(3) NOT NULL,
  `out_or_return` tinyint(1) NOT NULL,
  `status` tinyint(1) NOT NULL DEFAULT '1',
  `paper_trail` text CHARACTER SET latin1 NOT NULL,
  `special_notes` varchar(75) CHARACTER SET latin1 NOT NULL,
  `p_method` tinyint(1) NOT NULL,
  `last_4` varchar(4) CHARACTER SET latin1 NOT NULL,
  `trans_id` varchar(12) CHARACTER SET latin1 NOT NULL,
  `total_amount` decimal(6,2) NOT NULL,
  `warned` tinyint(1) NOT NULL,
  `us` tinyint(1) NOT NULL,
  `leavefrom` char(2) CHARACTER SET latin1 NOT NULL DEFAULT 'NU',
  `whichbus` char(1) CHARACTER SET latin1 NOT NULL DEFAULT 'N',
  `bustotal` smallint(4) NOT NULL DEFAULT '0',
  `promocode` varchar(12) CHARACTER SET latin1 NOT NULL,
  `code_id` int(11) NOT NULL,
  `showed_up` tinyint(1) NOT NULL,
  `browser_info` varchar(255) COLLATE utf8_bin NOT NULL DEFAULT '',
  `affiliate_id` tinyint(1) NOT NULL,
  PRIMARY KEY (`res_id`),
  KEY `customer_id` (`customer_id`),
  KEY `res_id` (`res_id`),
  KEY `resnum` (`resnum`),
  KEY `phone` (`phone`),
  KEY `eadd` (`eadd`),
  KEY `time_id` (`time_id`,`dotrav`)
) ENGINE=MyISAM AUTO_INCREMENT=1664255 DEFAULT CHARSET=utf8 COLLATE=utf8_bin ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of res_reservations
-- ----------------------------

-- ----------------------------
-- Table structure for `res_stops`
-- ----------------------------
DROP TABLE IF EXISTS `res_stops`;
CREATE TABLE `res_stops` (
  `stop_id` int(2) NOT NULL AUTO_INCREMENT,
  `area_id` smallint(2) NOT NULL DEFAULT '0',
  `short` varchar(30) NOT NULL DEFAULT '',
  `address` varchar(70) NOT NULL DEFAULT '',
  `city` varchar(30) NOT NULL DEFAULT '',
  `details` varchar(250) NOT NULL DEFAULT '',
  `valid` tinyint(1) NOT NULL,
  `stop_order` int(2) NOT NULL DEFAULT '0',
  `pickup` tinyint(1) NOT NULL DEFAULT '0',
  `dropoff` tinyint(1) NOT NULL DEFAULT '0',
  `default_dropoff` tinyint(1) NOT NULL DEFAULT '0',
  `stop_name` varchar(20) NOT NULL DEFAULT '',
  `add_to_pu` int(3) NOT NULL,
  `add_to_do` int(3) NOT NULL,
  `currently_active` tinyint(1) NOT NULL DEFAULT '1',
  `special_stopnote` varchar(100) NOT NULL,
  PRIMARY KEY (`stop_id`)
) ENGINE=MyISAM AUTO_INCREMENT=5 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of res_stops
-- ----------------------------
INSERT INTO `res_stops` VALUES ('1', '1', '313 W 31 St', '313 West 31 Street ', 'New York, NY 10001', 'Between 8th and 9th Ave on same side of the street as the post office, across the street from the TCI College of Technology.', '1', '1', '1', '1', '1', '', '0', '0', '1', '');
INSERT INTO `res_stops` VALUES ('2', '2', 'Arlington', '1901 N. Moore Street', 'Arlington, VA 22209', 'Rosslyn', '1', '2', '1', '1', '1', '', '0', '30', '1', '');
INSERT INTO `res_stops` VALUES ('3', '2', 'Bethesda', '4681 Willow Lane', 'Bethesda, MD 20814', 'At the corner of Wisconsin Ave , opposite side of Panera Bread , the same side of The Farm Woman\'s Market.', '1', '3', '1', '1', '1', '', '0', '0', '1', '');

-- ----------------------------
-- Table structure for `res_times`
-- ----------------------------
DROP TABLE IF EXISTS `res_times`;
CREATE TABLE `res_times` (
  `time_id` int(7) NOT NULL AUTO_INCREMENT,
  `stop_id` int(3) NOT NULL DEFAULT '0',
  `group_id` int(2) NOT NULL DEFAULT '0',
  `t_time` time NOT NULL DEFAULT '00:00:00',
  `t_date` date NOT NULL DEFAULT '0000-00-00',
  `t_weekday` char(1) NOT NULL DEFAULT '',
  `afteroron` tinyint(1) NOT NULL DEFAULT '0',
  `valid` tinyint(1) NOT NULL DEFAULT '1',
  PRIMARY KEY (`time_id`)
) ENGINE=MyISAM AUTO_INCREMENT=108 DEFAULT CHARSET=latin1 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of res_times
-- ----------------------------
INSERT INTO `res_times` VALUES ('1', '1', '1', '10:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('2', '1', '2', '12:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('3', '1', '3', '14:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('4', '1', '4', '15:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('5', '1', '5', '16:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('6', '1', '6', '17:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('7', '1', '7', '18:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('8', '1', '8', '19:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('9', '1', '9', '20:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('10', '1', '10', '10:30:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('11', '1', '11', '13:30:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('12', '1', '12', '17:00:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('13', '1', '13', '19:00:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('14', '1', '14', '10:30:00', '2016-06-07', '2', '2', '1');
INSERT INTO `res_times` VALUES ('15', '1', '15', '14:00:00', '2016-06-07', '2', '2', '1');
INSERT INTO `res_times` VALUES ('16', '1', '16', '17:00:00', '2016-06-07', '2', '2', '1');
INSERT INTO `res_times` VALUES ('17', '1', '17', '10:30:00', '2016-06-08', '3', '2', '1');
INSERT INTO `res_times` VALUES ('18', '1', '18', '17:30:00', '2016-06-08', '3', '2', '1');
INSERT INTO `res_times` VALUES ('19', '1', '19', '10:30:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('20', '1', '20', '14:00:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('21', '1', '21', '17:30:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('22', '1', '22', '19:00:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('23', '1', '23', '08:45:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('24', '1', '24', '10:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('25', '1', '25', '12:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('26', '1', '26', '16:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('27', '1', '27', '14:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('28', '1', '28', '17:30:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('29', '1', '29', '19:30:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('30', '1', '30', '08:30:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('31', '1', '31', '14:30:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('32', '1', '32', '19:00:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('33', '1', '33', '17:30:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('34', '2', '34', '07:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('35', '3', '34', '07:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('36', '2', '35', '08:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('37', '3', '35', '08:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('38', '2', '36', '09:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('39', '3', '36', '09:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('40', '2', '37', '10:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('41', '3', '37', '10:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('42', '2', '38', '12:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('43', '3', '38', '12:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('44', '2', '39', '13:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('45', '3', '39', '13:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('46', '2', '40', '15:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('47', '3', '40', '15:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('48', '2', '41', '17:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('49', '3', '41', '17:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('50', '2', '42', '19:00:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('51', '3', '42', '19:30:00', '2016-06-05', 'x', '2', '1');
INSERT INTO `res_times` VALUES ('52', '2', '43', '07:30:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('53', '3', '43', '08:10:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('54', '2', '44', '09:30:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('55', '3', '44', '10:10:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('56', '2', '45', '11:50:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('57', '3', '45', '12:30:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('58', '2', '46', '14:50:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('59', '3', '46', '15:30:00', '2016-06-06', '1', '2', '1');
INSERT INTO `res_times` VALUES ('60', '2', '47', '07:30:00', '2016-06-07', '2', '2', '1');
INSERT INTO `res_times` VALUES ('61', '3', '47', '08:10:00', '2016-06-07', '2', '2', '1');
INSERT INTO `res_times` VALUES ('62', '2', '48', '09:20:00', '2016-06-07', '2', '2', '1');
INSERT INTO `res_times` VALUES ('63', '3', '48', '10:00:00', '2016-06-07', '2', '2', '1');
INSERT INTO `res_times` VALUES ('64', '2', '49', '07:30:00', '2016-06-08', '3', '2', '1');
INSERT INTO `res_times` VALUES ('65', '3', '49', '08:10:00', '2016-06-08', '3', '2', '1');
INSERT INTO `res_times` VALUES ('66', '2', '50', '09:30:00', '2016-06-08', '3', '2', '1');
INSERT INTO `res_times` VALUES ('67', '3', '50', '10:10:00', '2016-06-08', '3', '2', '1');
INSERT INTO `res_times` VALUES ('68', '2', '51', '07:30:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('69', '3', '51', '08:10:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('70', '2', '52', '09:30:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('71', '3', '52', '10:10:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('72', '2', '53', '11:50:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('73', '3', '53', '12:30:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('74', '2', '54', '17:00:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('75', '3', '54', '17:40:00', '2016-06-09', '4', '2', '1');
INSERT INTO `res_times` VALUES ('76', '2', '55', '06:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('77', '3', '55', '06:30:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('78', '2', '56', '07:30:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('79', '3', '56', '08:10:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('80', '2', '57', '09:30:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('81', '3', '57', '10:10:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('82', '2', '58', '10:30:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('83', '3', '58', '11:10:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('84', '2', '59', '12:20:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('85', '3', '59', '13:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('86', '2', '60', '14:30:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('87', '3', '60', '15:10:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('88', '2', '61', '16:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('89', '3', '61', '16:40:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('90', '2', '62', '17:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('91', '3', '62', '17:40:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('92', '2', '63', '18:00:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('93', '3', '63', '18:40:00', '2016-06-10', '5', '2', '1');
INSERT INTO `res_times` VALUES ('94', '2', '64', '07:00:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('95', '3', '64', '07:30:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('96', '2', '65', '07:45:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('97', '3', '65', '08:15:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('98', '2', '66', '09:30:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('99', '3', '66', '10:10:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('100', '2', '67', '11:50:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('101', '3', '67', '12:30:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('102', '2', '68', '18:30:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('103', '3', '68', '19:10:00', '2016-06-11', '6', '2', '1');
INSERT INTO `res_times` VALUES ('104', '1', '69', '10:30:00', '2016-06-06', '', '1', '1');
INSERT INTO `res_times` VALUES ('105', '1', '70', '14:30:00', '2016-06-06', '', '1', '1');
INSERT INTO `res_times` VALUES ('106', '1', '71', '17:00:00', '2016-06-06', '', '1', '1');
INSERT INTO `res_times` VALUES ('107', '1', '72', '19:00:00', '2016-06-06', '', '1', '1');

-- ----------------------------
-- Table structure for `res_users`
-- ----------------------------
DROP TABLE IF EXISTS `res_users`;
CREATE TABLE `res_users` (
  `user_id` int(7) NOT NULL AUTO_INCREMENT,
  `username` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(20) NOT NULL DEFAULT '',
  `email` varchar(100) NOT NULL DEFAULT '',
  `contact_name` varchar(40) NOT NULL DEFAULT '',
  `area_id` tinyint(1) NOT NULL,
  `commission` decimal(5,4) NOT NULL DEFAULT '0.0000',
  `valid` tinyint(1) NOT NULL DEFAULT '1',
  `city` varchar(1) NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of res_users
-- ----------------------------
INSERT INTO `res_users` VALUES ('1', 'chaim', 'jagjag', 'service@terrificsites.com', 'Chaim Friedman', '2', '0.1000', '1', 'b');

-- ----------------------------
-- Table structure for `schedule_prices`
-- ----------------------------
DROP TABLE IF EXISTS `schedule_prices`;
CREATE TABLE `schedule_prices` (
  `schedule_price_id` int(7) NOT NULL AUTO_INCREMENT,
  `group_id` int(7) NOT NULL DEFAULT '0',
  `schedule_price_date` date NOT NULL DEFAULT '0000-00-00',
  `low_number` varchar(2) NOT NULL,
  `low_price` varchar(4) NOT NULL,
  `all_price` varchar(4) NOT NULL,
  `high_number` varchar(2) NOT NULL,
  `high_price` varchar(4) NOT NULL,
  PRIMARY KEY (`schedule_price_id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=latin1 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of schedule_prices
-- ----------------------------
INSERT INTO `schedule_prices` VALUES ('1', '17', '2016-06-22', '1', '1', '', '', '');

-- ----------------------------
-- Table structure for `shapes`
-- ----------------------------
DROP TABLE IF EXISTS `shapes`;
CREATE TABLE `shapes` (
  `shape_id` varchar(18) NOT NULL DEFAULT 'ny_to_dc_shape',
  `shape_pt_lat` varchar(10) NOT NULL,
  `shape_pt_lon` varchar(10) NOT NULL,
  `shape_pt_sequence` int(5) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1 ROW_FORMAT=COMPACT;

-- ----------------------------
-- Records of shapes
-- ----------------------------

-- ----------------------------
-- Table structure for `users_to_permissions`
-- ----------------------------
DROP TABLE IF EXISTS `users_to_permissions`;
CREATE TABLE `users_to_permissions` (
  `utop_id` int(7) NOT NULL AUTO_INCREMENT,
  `user_id` int(7) NOT NULL DEFAULT '0',
  `permission_id` int(7) NOT NULL DEFAULT '0',
  PRIMARY KEY (`utop_id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8 ROW_FORMAT=FIXED;

-- ----------------------------
-- Records of users_to_permissions
-- ----------------------------
INSERT INTO `users_to_permissions` VALUES ('1', '1', '1');
INSERT INTO `users_to_permissions` VALUES ('5', '1', '5');
INSERT INTO `users_to_permissions` VALUES ('2', '1', '4');
INSERT INTO `users_to_permissions` VALUES ('3', '1', '3');
INSERT INTO `users_to_permissions` VALUES ('4', '1', '2');
INSERT INTO `users_to_permissions` VALUES ('6', '1', '6');
INSERT INTO `users_to_permissions` VALUES ('16', '1', '7');
INSERT INTO `users_to_permissions` VALUES ('8', '1', '8');
INSERT INTO `users_to_permissions` VALUES ('9', '1', '9');
INSERT INTO `users_to_permissions` VALUES ('10', '1', '10');
INSERT INTO `users_to_permissions` VALUES ('11', '1', '11');
INSERT INTO `users_to_permissions` VALUES ('12', '1', '12');
INSERT INTO `users_to_permissions` VALUES ('13', '1', '13');
INSERT INTO `users_to_permissions` VALUES ('14', '1', '14');
INSERT INTO `users_to_permissions` VALUES ('15', '1', '15');

-- ----------------------------
-- Table structure for `weekmaxcap`
-- ----------------------------
DROP TABLE IF EXISTS `weekmaxcap`;
CREATE TABLE `weekmaxcap` (
  `doweek` varchar(25) NOT NULL DEFAULT '',
  `whichbus` varchar(10) NOT NULL DEFAULT '',
  `leavefrom` varchar(10) NOT NULL DEFAULT '',
  `maxnum` varchar(4) NOT NULL DEFAULT ''
) ENGINE=MyISAM DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;

-- ----------------------------
-- Records of weekmaxcap
-- ----------------------------
