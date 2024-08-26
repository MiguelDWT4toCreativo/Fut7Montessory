<?php
// db.php
$host = 'db';  // Nombre del servicio del contenedor de MySQL o la dirección IP del host donde está corriendo MySQL
$port = '3306';  // Especifica el puerto donde está escuchando MySQL
$dbname = 'fut7';
$user = 'aaron';
$pass = 'creativo';

try {
    $pdo = new PDO("mysql:host=$host;port=$port;dbname=$dbname", $user, $pass);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
} catch (PDOException $e) {
    die("Error en la conexión: " . $e->getMessage());
}
?>
