<?php
// Show errors (for debugging — remove on production)
error_reporting(E_ALL);
ini_set('display_errors', 1);

// DB connection
$servername = "localhost";
$username = "root";
$password = "";
$database = "hospital_management";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Validate form
if (
    isset($_POST['first_name'], $_POST['last_name'], $_POST['email'], $_POST['address'],
          $_POST['city'], $_POST['gender'], $_POST['password'], $_POST['confirmPassword']) &&
    $_POST['password'] === $_POST['confirmPassword']
) {
    // Sanitize and hash
    $first_name = trim($_POST['first_name']);
    $last_name  = trim($_POST['last_name']);
    $email      = trim($_POST['email']);
    $address    = trim($_POST['address']);
    $city       = trim($_POST['city']);
    $gender     = $_POST['gender'];
    $password   = password_hash($_POST['password'], PASSWORD_DEFAULT);

    $sql = "INSERT INTO users (first_name, last_name, email, address, city, gender, password, date_registered)
            VALUES (?, ?, ?, ?, ?, ?, ?, NOW())";

    $stmt = $conn->prepare($sql);
    $stmt->bind_param("sssssss", $first_name, $last_name, $email, $address, $city, $gender, $password);

    if ($stmt->execute()) {
        header("Location: login.html");
        exit();
    } else {
        echo "Error: " . $stmt->error;
    }

    $stmt->close();
} else {
    echo "Please fill out all fields correctly and ensure passwords match.";
}

$conn->close();
?>
