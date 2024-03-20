<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $indicativo = $_POST["country"];
    $numero = $_POST["numero"];
    $subject = $_POST["Subject"];
    $destinatario = "reservas@turismocity.co";

    $mensaje = "Numero de telefono: +" . $indicativo . " " . $numero;

    if (mail($destinatario, $subject, $mensaje)) {
        header("Location: " . $_POST["_next"]);
        exit();
    } else {
        echo "Hubo un problema al enviar el correo. Por favor, intenta nuevamente.";
    }
} else {
    echo "Acceso no válido.";
}
?>
