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
    if (!isset($_POST['token']) || !isset($_POST['cliente']) || !isset($_POST['numero_asistentes']) || 
        !isset($_POST['fecha']) || !isset($_POST['inicio']) || !isset($_POST['finalizacion']) || !isset($_POST['total'])) {
        sendResponse(400, 'Datos incompletos');
    }

    $token = $_POST['token'];
    $cliente = $_POST['cliente'];
    $numero_asistentes = $_POST['numero_asistentes'];
    $fecha = $_POST['fecha'];
    $inicio = $_POST['inicio'];
    $finalizacion = $_POST['finalizacion'];
    $total = $_POST['total'];

    try {
        // Verificar si el token existe y no ha expirado
        $stmt = $pdo->prepare("SELECT customer_id FROM customer_auth WHERE token = ? AND expires_at > NOW()");
        $stmt->execute([$token]);
        $auth = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$auth) {
            sendResponse(401, 'Token inválido o expirado');
        }

        // Verificar que el cliente existe y su id coincide con el customer_id del token
        $stmt = $pdo->prepare("SELECT id FROM Cliente WHERE correo = ?");
        $stmt->execute([$cliente]);
        $clienteData = $stmt->fetch(PDO::FETCH_ASSOC);

        if (!$clienteData || $auth['customer_id'] !== $clienteData['id']) {
            sendResponse(403, 'Cliente no autorizado o no encontrado');
        }
        
        // Verificar que el cliente existe y su id coincide con el customer_id del token
        $stmt = $pdo->prepare("SELECT NOT EXISTS (SELECT 1 FROM Reserva WHERE inicio < ? AND finalizacion > ?) AS no_registros;");
        $stmt->execute([$fecha . "T" . $finalizacion . ":00", $fecha . "T" . $inicio . ":00"]);
        $existentDate = $stmt->fetch(PDO::FETCH_ASSOC);

        // Si no hay registros, enviar una respuesta indicando que el horario no está disponible
        if ($existentDate['no_registros'] == 0) {
            sendResponse(403, 'Horario no disponible');
        }


        // Insertar la reserva si las validaciones son correctas
        $stmt = $pdo->prepare("INSERT INTO Reserva (clienteId, numeroAsistentes, fecha, inicio, finalizacion, total) VALUES (?, ?, NOW(), ?, ?, ?)");
        $stmt->execute([
            $auth['customer_id'], 
            $numero_asistentes, 
            $fecha . "T" . $inicio . ":00", 
            $fecha . "T" . $finalizacion . ":00", 
            $total
        ]);

        // Obtener el ID de la última inserción
        $reservaId = $pdo->lastInsertId();

        // Recuperar la información completa de la reserva recién insertada, incluyendo la fecha
        $stmt = $pdo->prepare("SELECT fecha FROM Reserva WHERE id = ?");
        $stmt->execute([$reservaId]);
        $reservaData = $stmt->fetch(PDO::FETCH_ASSOC);

        sendResponse(200, $reservaData['fecha']);
    } catch (PDOException $e) {
        sendResponse(500, 'Error en la base de datos: ' . $e->getMessage());
    }
} else {
    sendResponse(405, 'Método no permitido');
}
?>
