<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST["name"];
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $agree = isset($_POST["agree"]) ? "Yes" : "No";

    // Combine data into a string
    $userData = "Name: $name\nUsername: $username\nEmail: $email\nPassword: $password\nAgreed to terms: $agree\n";

    // Save data to a text file
    $file = fopen("userdata.txt", "a");
    fwrite($file, $userData . "\n\n");
    fclose($file);

    // Redirect to welcome page
    header("Location: welcome.html");
    exit();
}
?>
