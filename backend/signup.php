<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");

$name = $_POST["name"];
$password =hash("sha256",$_POST["password"]);
$email=$_POST["email"];
$username=strstr($email,'@',true);
$month=$_POST["month"];
$date=$_POST["date"];
$year=$_POST["year"];
$gender=$_POST["gender"];

$birthdate=$year."-".$month."-".$date;

$query = $mysqli->prepare("INSERT INTO users(email, password,username, name, birthdate, gender) VALUE (?, ?, ?, ?, ?, ?)");
$query->bind_param("ssssss", $email, $password,$username,$name,$birthdate,$gender);
$query->execute();


$response = [];
$response["success"] = true;

echo json_encode($response);

?>