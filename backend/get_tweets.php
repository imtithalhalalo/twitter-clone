<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');
error_reporting(E_ALL);
ini_set('display_errors', 1);
include("connection/connection.php");
$user_id =$_POST["user_id"];
$query = $mysqli->prepare("SELECT tweets.id,users.name,users.username,tweets.text FROM tweets,users,follows WHERE users.id=follows.following_id AND follows.following_id=tweets.user_id AND follows.follower_id=?");
$query->bind_param('i',$user_id);
$query->execute();
$array = $query->get_result();

$response = [];
    while($a=$array->fetch_assoc()){
        $response[]=$a;
    }
echo json_encode($response);
?>