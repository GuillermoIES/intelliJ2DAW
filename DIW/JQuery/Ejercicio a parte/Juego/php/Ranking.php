<?php
/**
 * Created by IntelliJ IDEA.
 * User: alumno
 * Date: 21/02/2017
 * Time: 13:32
 */
header('Content-Type: text/xml');
$nombreL = $_POST['nombre'];
$puntuacionL = $_POST['puntuacion'];
//$nombreL = "dd";
//$puntuacionL = 15;
$servername = "localhost";
$username = "root";
$password = "";

// Create connection
$conn = new PDO("mysql:host=$servername;dbname=ranking", $username, $password);

// set the resulting array to associative
$i = 0;
foreach ($conn->query('select * from ranking order by Rank') as $row) {
    $rank[$i] = $row['Rank'];
    $nombre[$i] = $row['Nombre'];
    $puntuacion[$i] = $row['Puntuacion'];
    $i += 1;
}
if($puntuacionL < $puntuacion[2]) {$pos = 4;}
else if ($puntuacionL > $puntuacion[2] && $puntuacionL < $puntuacion[1]) {$pos = 3;}
else if ($puntuacionL > $puntuacion[1] && $puntuacionL < $puntuacion[0]) {$pos = 2;}
else if ($puntuacionL > $puntuacion[0]) {$pos = 1;}


if($pos == 4){
    echo '<?xml version="1.0" ?><ranking>';
    echo "<stat><rank>{$rank[0]}</rank><nombre>{$nombre[0]}</nombre><puntuacion>{$puntuacion[0]}</puntuacion></stat>";
    echo "<stat><rank>{$rank[1]}</rank><nombre>{$nombre[1]}</nombre><puntuacion>{$puntuacion[1]}</puntuacion></stat>";
    echo "<stat><rank>{$rank[2]}</rank><nombre>{$nombre[2]}</nombre><puntuacion>{$puntuacion[2]}</puntuacion></stat>";
    echo '</ranking>';
} else if($pos == 3) {
    $conn->exec("DELETE FROM ranking WHERE Rank = 3");
    $conn->exec("insert into ranking values (\"$nombreL\", $puntuacionL, 3)");
    echo '<?xml version="1.0" ?><ranking>';
    echo "<stat><rank>{$rank[0]}</rank><nombre>{$nombre[0]}</nombre><puntuacion>{$puntuacion[0]}</puntuacion></stat>";
    echo "<stat><rank>{$rank[1]}</rank><nombre>{$nombre[1]}</nombre><puntuacion>{$puntuacion[1]}</puntuacion></stat>";
    echo "<stat><rank>3</rank><nombre>$nombreL</nombre><puntuacion>$puntuacionL</puntuacion></stat>";
    echo '</ranking>';
} else if($pos == 2){
    $conn->exec("DELETE FROM ranking WHERE Rank = 3");
    $conn->exec("DELETE FROM ranking WHERE Rank = 2");
    $conn->exec("insert into ranking values (\"$nombre[1]\", $puntuacion[1], 3)");
    $conn->exec("insert into ranking values (\"$nombreL\", $puntuacionL, 2)");
    echo '<?xml version="1.0" ?><ranking>';
    echo "<stat><rank>{$rank[0]}</rank><nombre>{$nombre[0]}</nombre><puntuacion>{$puntuacion[0]}</puntuacion></stat>";
    echo "<stat><rank>2</rank><nombre>$nombreL</nombre><puntuacion>$puntuacionL</puntuacion></stat>";
    echo "<stat><rank>{$rank[1]}</rank><nombre>{$nombre[1]}</nombre><puntuacion>{$puntuacion[1]}</puntuacion></stat>";
    echo '</ranking>';
} else {
    $conn->exec("DELETE FROM ranking WHERE Rank = 3");
    $conn->exec("DELETE FROM ranking WHERE Rank = 2");
    $conn->exec("DELETE FROM ranking WHERE Rank = 1");

    $conn->exec("insert into ranking values (\"$nombre[1]\", $puntuacion[1], 3)");
    $conn->exec("insert into ranking values (\"$nombre[0]\", $puntuacion[0], 2)");
    $conn->exec("insert into ranking values (\"$nombreL\", $puntuacionL, 1)");
    echo '<?xml version="1.0" ?><ranking>';
    echo "<stat><rank>1</rank><nombre>$nombreL</nombre><puntuacion>$puntuacionL</puntuacion></stat>";
    echo "<stat><rank>{$rank[0]}</rank><nombre>{$nombre[0]}</nombre><puntuacion>{$puntuacion[0]}</puntuacion></stat>";
    echo "<stat><rank>{$rank[1]}</rank><nombre>{$nombre[1]}</nombre><puntuacion>{$puntuacion[1]}</puntuacion></stat>";
    echo '</ranking>';
}

?>