<?php
//session_start();
$nombre = $_POST['nombre'];
$pwd = $_POST['pwd'];
//$pwdSha = hash('sha256', $pwd);
$servername = "localhost";
$username = "root";
$password = "";
//echo $nombre . ' ' . $pwdSha . '<br/>';
// Create connection
$conn = new PDO("mysql:host=$servername;dbname=test", $username, $password);

foreach($conn->query("select * from usuario where nombre=\"$nombre\"") as $row){
//    echo $row['password'];
    if($pwd == $row['password']){
        echo 'good';
    } else {
        echo 'no good';
    }
}


