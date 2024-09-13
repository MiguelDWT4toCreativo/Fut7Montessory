<?php

use Stripe\Billing\Alert;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

include 'db.php';

function sendResponse($status, $message)
{
    http_response_code($status);
    echo json_encode(['status' => $message]);
    exit;
}

function sendData($status, $token, $user)
{
    http_response_code($status);
    echo json_encode(['token' => $token, 'user' => $user]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if (!isset($_POST['correo']) || !isset($_POST['password'])) {
        sendResponse(400, 'Datos incompletos');
    }

    $correo = $_POST['correo'];
    $password = $_POST['password'];

    try {
        // Verificar si el usuario existe
        $stmt = $pdo->prepare("SELECT id, nombre, password FROM Cliente WHERE correo = ?");
        $stmt->execute([$correo]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        if ($user && password_verify($password, $user['password'])) {
            // Generar un token único
            $token = base64_encode(openssl_random_pseudo_bytes(64));

            // Fecha de expiración del token (opcional, aquí se establece para 24 horas)
            $expires_at = date('Y-m-d H:i:s', strtotime('+24 hours'));

            // Guardar el token y el ID del cliente en la tabla customer_auth
            $insertStmt = $pdo->prepare("INSERT INTO customer_auth (token, customer_id, expires_at) VALUES (?, ?, ?)");
            $insertStmt->execute([$token, $user['id'], $expires_at]);

            // Verificar si el usuario es administrador (correo == 'admin@admin.com')
            $isAdmin = ($correo === 'miguel@gmail.com') ? true : false;

            // Enviar respuesta con token, nombre y si es admin o no
            sendResponse(200, ['token' => $token, 'nombre' => $user['nombre'], 'isAdmin' => $isAdmin]);
        } else {
            sendResponse(401, 'Correo o contraseña incorrectos');
        }
    } catch (PDOException $e) {
        sendResponse(500, 'Error en la base de datos: ' . $e->getMessage());
    }
} else {
    sendResponse(405, 'Método no permitido');
}
