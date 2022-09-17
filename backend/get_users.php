<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");
 
$user_id =$_POST["user_id"];

$query = $mysqli->prepare("SELECT * FROM users WHERE id!=?");
$query->bind_param('i',$user_id);
$query->execute();
$array = $query->get_result();

$response = [];
    while($a=$array->fetch_assoc()){
        $response[]=$a;
    }
   
echo json_encode($response);

?>