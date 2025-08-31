<?php
$outputs = [];
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['session']) && isset($_POST['output'])) {
    $session = $_POST['session'];
    $output = $_POST['output'];
    $file = "outputs_$session.txt";
    file_put_contents($file, $output . PHP_EOL, FILE_APPEND);
}
if (isset($_GET['session'])) {
    $session = $_GET['session'];
    $file = "outputs_$session.txt";
    if (file_exists($file)) {
        $outputs = file($file, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
    }
    header('Content-Type: application/json');
    echo json_encode($outputs);
}
?>
