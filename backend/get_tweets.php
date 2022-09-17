<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");
 
$password =hash("sha256",$_POST["password"]);
$email=$_POST["email"];

$query = $mysqli->prepare("SELECT * FROM users WHERE email=? AND password=?");
$query->bind_param('ss',$email,$password);
$query->execute();
$array = $query->get_result();
$num_rows = $array->num_rows;

$response = [];
if($num_rows > 0){
    $response["success"] = true;

}else{
    $response["success"] = false;
    
}
echo json_encode($response);

?>