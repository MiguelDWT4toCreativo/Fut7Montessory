<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
header('Content-Type: application/json');

require_once './lib/stripe-php-15.7.0/init.php';

include 'db.php';
include 'secrets.php';

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

    switch ($total) {
        case 1: $total = 500; break;
        case 2: $total = 750; break;
        case 3: $total = 800; break;
        default: sendResponse(400, 'Datos incompletos');
    }

    try {
        $stmt = $pdo->prepare("SELECT customer_id FROM customer_auth WHERE token = ? AND expires_at > NOW()");
        $stmt->execute([$token]);
        $auth = $stmt->fetch(PDO::FETCH_ASSOC);
        if (!$auth) {
            sendResponse(401, 'Token inválido o expirado');
        }
        
        $stmt = $pdo->prepare("SELECT NOT EXISTS (SELECT 1 FROM Reserva WHERE inicio < ? AND finalizacion > ?) AS no_registros;");
        $stmt->execute([$fecha . "T" . $finalizacion . ":00", $fecha . "T" . $inicio . ":00"]);
        $existentDate = $stmt->fetch(PDO::FETCH_ASSOC);
        if ($existentDate['no_registros'] == 0) {
            sendResponse(403, 'Horario no disponible');
        }
                
        $stripe = new \Stripe\StripeClient($stripeSecretKey);

        $intent = $stripe->paymentIntents->create([
        'amount' => $total,
        'currency' => 'usd',
        ]);

        // $stripe->paymentIntents->create([
        //     'amount' => 1099,
        //     'currency' => 'usd',
        //     'payment_method_types' => ['card'],
        //     'metadata' => ['order_id' => '6735'],
        //   ]);
                
        $stmt = $pdo->prepare("INSERT INTO Reserva (clienteId, paymentIntent, status, customerData, numeroAsistentes, fecha, inicio, finalizacion, total)
         VALUES (?, ?, 'pendiente', '{}', ?, NOW(), ?, ?, ?)");
        $stmt->execute([
            $auth['customer_id'],
            $intent->client_secret,
            $numero_asistentes,
            $fecha . "T" . $inicio . ":00",
            $fecha . "T" . $finalizacion . ":00",
            $total
        ]);
        
        $reservaId = $pdo->lastInsertId();

        sendResponse(200, $intent->client_secret);
    } catch (PDOException $e) {
        sendResponse(500, 'Error en la base de datos: ' . $e->getMessage());
    }
} else {
    sendResponse(405, 'Método no permitido');
}
?>
