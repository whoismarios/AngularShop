# Angular Shop

This is a simple demo Online Shop in Angular

##Start

To clone the Project paste the following code to your terminal:
```bash
git clone https://github.com/whoismarios/AngularShop.git
```

Then you have to change the directory:
```bash
cd AngularShop/
```

Install Dependencies  
```bash
npm install
```

Place the File 'get_products.php' in your Localhost 
Folder.
This should be the Path:
```bash
http://localhost/AngularShop/get_products.php
```

Make sure, that you got your Database running.
Paste the following Code to your Query Box:

```bash
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Datenbank: `angularShopDB`
--
CREATE DATABASE IF NOT EXISTS `angularShopDB` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE `angularShopDB`;

CREATE TABLE IF NOT EXISTS `products` (
  `productID` int(32) NOT NULL AUTO_INCREMENT,
  `name` varchar(64) NOT NULL,
  `price` int(32) NOT NULL,
  PRIMARY KEY (`productID`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

INSERT INTO `products` (`productID`, `name`, `price`) VALUES
(1, 'iPhone 14 Pro Max', 1499),
(2, 'iPhone 14 Pro', 1299),
(5, 'iPhone 13 Pro Max', 1299),
(6, 'iPhone 13 Pro', 1099);
COMMIT;
```
or use the sql-File inside the backend/files - Folder

And finally you can run the serve script
```bash
ng serve
```