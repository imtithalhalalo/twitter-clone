<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");

$tweet_id=$_POST["tweet_id"];

$query = $mysqli->prepare("SELECT COUNT(*) AS num FROM likes WHERE tweet_id=?");
$query->bind_param("i" ,$tweet_id);
$query->execute();

$array = $query->get_result();
$num_rows = $array->num_rows;

$response = [];
    while($a=$array->fetch_assoc()){
        $response[]=$a;
    }

    
echo json_encode($response);

?>