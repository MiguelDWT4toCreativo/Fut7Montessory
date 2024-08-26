<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

include 'db.php';

function sendResponse($status, $message) {
    http_response_code($status);
    echo json_encode(['status' => $message]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // if (!isset($_POST['token']) || !isset($_POST['cliente'])) {
    //     sendResponse(400, 'Datos incompletos');
    // }

    // $token = $_POST['token'];
    // $cliente = $_POST['cliente'];

    try {
        // Verificar si el token existe y no ha expirado
        // $stmt = $pdo->prepare("SELECT customer_id FROM customer_auth WHERE token = ? AND expires_at > NOW()");
        // $stmt->execute([$token]);
        // $auth = $stmt->fetch(PDO::FETCH_ASSOC);

        // if (!$auth) {
        //     sendResponse(401, 'Token inválido o expirado');
        // }

        // // Verificar que el cliente existe y su id coincide con el customer_id del token
        // $stmt = $pdo->prepare("SELECT id FROM Cliente WHERE correo = ?");
        // $stmt->execute([$cliente]);
        // $clienteData = $stmt->fetch(PDO::FETCH_ASSOC);

        // if (!$clienteData || $auth['customer_id'] !== $clienteData['id']) {
        //     sendResponse(403, 'Cliente no autorizado o no encontrado');
        // }

        // Insertar la reserva si las validaciones son correctas
        $stmt = $pdo->prepare("SELECT * FROM Reserva;");
        $stmt->execute();    
        $result = $stmt->fetchAll(PDO::FETCH_ASSOC);
        
        http_response_code(200);
        echo json_encode($result);
        exit;
    } catch (PDOException $e) {
        sendResponse(500, 'Error en la base de datos: ' . $e->getMessage());
    }
} else {
    sendResponse(405, 'Método no permitido');
}
?>
