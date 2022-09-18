<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");


$blocker_id=$_POST["blocker_id"];
$blocking_id=$_POST["blocking_id"];

$query = $mysqli->prepare("INSERT INTO blocks (blocker_id, blocking_id) VALUE (?, ?)");
$query->bind_param("ii", $blocker_id, $blocking_id);
$query->execute();


$response = [];
$response["success"] = true;

echo json_encode($response);

?>