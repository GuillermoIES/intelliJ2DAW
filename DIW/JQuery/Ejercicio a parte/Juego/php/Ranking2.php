<?php
header('Content-Type: text/xml');
$nombreL = $_POST['nombre'];
$puntuacionL = $_POST['puntuacion'];
//$nombreL = "dd";
//$puntuacionL = 25;
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new PDO("mysql:host=$servername;dbname=ranking", $username, $password);

$conn->exec("insert into ranking values (\"$nombreL\", $puntuacionL)");

$i = 0;
foreach ($conn->query('select * from ranking order by Puntuacion desc limit 3') as $row) {
    $nombre[$i] = $row['Nombre'];
    $puntuacion[$i] = $row['Puntuacion'];
    $i += 1;
}

echo '<?xml version="1.0" ?><ranking>';
echo "<stat><nombre>{$nombre[0]}</nombre><puntuacion>{$puntuacion[0]}</puntuacion></stat>";
echo "<stat><nombre>{$nombre[1]}</nombre><puntuacion>{$puntuacion[1]}</puntuacion></stat>";
echo "<stat><nombre>{$nombre[2]}</nombre><puntuacion>{$puntuacion[2]}</puntuacion></stat>";
echo '</ranking>';