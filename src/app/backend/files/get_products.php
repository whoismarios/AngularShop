<?php

header('Access-Control-Allow-Origin: *');


    // Connect to the database
    $host = "localhost";
    $username = "root";
    $password = "";
    $database = "angularShopDB";

    $conn = new mysqli($host, $username, $password, $database);

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $sql = "SELECT * FROM products";
    $result = $conn->query($sql);

    $products = array();

    if ($result->num_rows > 0) {
            
        while ($row = $result->fetch_assoc()) {
            // Add each product to the products array
            $products[] = array(
            "name" => $row["name"],
            "price" => $row["price"]
            );
        }
    }

    // Return the products array as JSON
    echo json_encode($products);

    // Close the database connection
    $conn->close();

?>
