<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");

$user_id=$_POST["user_id"];
$tweet_id=$_POST["tweet_id"];

$query = $mysqli->prepare("INSERT INTO likes(user_id, tweet_id) VALUE (?, ?)");
$query->bind_param("ii", $user_id, $tweet_id);
$query->execute();


$response = [];
$response["success"] = true;

echo json_encode($response);

?>