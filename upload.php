<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_FILES['file']) && isset($_POST['session'])) {
    $session = $_POST['session'];
    $uploadDir = "uploads_$session/";
    if (!is_dir($uploadDir)) {
        mkdir($uploadDir, 0777, true);
    }
    $filePath = $uploadDir . basename($_FILES['file']['name']);
    move_uploaded_file($_FILES['file']['tmp_name'], $filePath);
}
?>
