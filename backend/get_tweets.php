<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");
$user_id =$_POST["user_id"];
$user=$_POST["user"];
$query = $mysqli->prepare("SELECT * FROM follows WHERE following_id=? OR follower_id=?");
$query->bind_param('ii',$user_id,$user);
$query->execute();
$array = $query->get_result();

$response = [];
    while($a=$array->fetch_assoc()){
        $response[]=$a;
    }

?>