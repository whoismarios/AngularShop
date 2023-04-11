<?php

header('Access-Control-Allow-Origin: *');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "angularShopDB";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind SQL statement
$stmt = $conn->prepare("INSERT INTO user (firstname, lastname, email, password) VALUES (?, ?, ?, ?)");
$stmt->bind_param("ssss", $firstname, $lastname, $email, $password);

// Set parameters and execute statement
$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$password = $_POST['password'];
$stmt->execute();

echo "New record created successfully";

$stmt->close();
$conn->close();
?>
