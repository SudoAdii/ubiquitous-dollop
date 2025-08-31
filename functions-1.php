<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['command'])) {
    file_put_contents('functions-1.html', htmlspecialchars($_POST['command']));
}
header('Location: victim-1.html');
?>
