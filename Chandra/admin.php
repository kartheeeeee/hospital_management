<?php
$servername = "localhost";
$username = "root";
$password = "suba";
$database = "hospital_management";

$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "SELECT id, first_name, last_name, email, address, city, gender, date_registered FROM users";
$result = $conn->query($sql);

echo "<h2>Registered Users</h2>";
echo "<table border='1' cellpadding='10'>";
echo "<tr>
        <th>ID</th><th>Name</th><th>Email</th><th>Address</th>
        <th>City</th><th>Gender</th><th>Date Registered</th>
      </tr>";

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        echo "<tr>
                <td>{$row['id']}</td>
                <td>{$row['first_name']} {$row['last_name']}</td>
                <td>{$row['email']}</td>
                <td>{$row['address']}</td>
                <td>{$row['city']}</td>
                <td>{$row['gender']}</td>
                <td>{$row['date_registered']}</td>
              </tr>";
    }
} else {
    echo "<tr><td colspan='7'>No users found.</td></tr>";
}

echo "</table>";
$conn->close();
?>
