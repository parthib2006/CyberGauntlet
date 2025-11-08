<?php
$username = $_GET['username'];
$password = $_GET['password'];
$connection = new PDO('mysql:host=localhost', 'root', '');
$query = "SELECT * FROM tusers WHERE username = '$username' AND password = '$password'";
?>