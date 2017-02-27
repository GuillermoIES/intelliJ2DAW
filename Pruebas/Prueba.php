<?php
//session_start();
$nombre = $_POST['nombre'];
$pwd = $_POST['pwd'];
//$pwdSha = hash('sha256', $pwd);
//echo $pwd . ' ' . $pwdSha;
$servername = "localhost";
$username = "root";
$password = "";
//$_SESSION['pwd'] = $pwd;
// Create connection
$conn = new PDO("mysql:host=$servername;dbname=test", $username, $password);

$conn->exec("insert into usuario values (\"$nombre\", \"$pwd\")");

