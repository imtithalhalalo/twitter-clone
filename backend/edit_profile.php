<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");

$user_id = $_POST["user_id"];
$name = $_POST["name"];
$day=$_POST["day"];
$month=$_POST["month"];
$year=$_POST["year"];
$profile_base64=$_POST["base64Profile"];
$cover_base64=$_POST["base64Cover"];

$birthdate=$year.'-'.$month.'-'.$day;

    $file_path="http::/localhost/twitter-clone/frontend/images/profiles";
    $image_parts = explode(";base64,", $profile_base64);
    $image_type_aux = explode("image/", $image_parts[0]);
    $image_type = $image_type_aux[1];
    $image_base64 = base64_decode($image_parts[1]);
    $file =  $file_path. uniqid() .$image_type ;
    move_uploaded_file($file, $image_base64);

    $file_path="http::/localhost/twitter-clone/frontend/images/covers";
    $image_parts = explode(";base64,", $cover_base64);
    $image_type_aux = explode("image/", $image_parts[0]);
    $image_type = $image_type_aux[1];
    $image_base64 = base64_decode($image_parts[1]);
    $file =  $file_path. uniqid() .$image_type ;
    move_uploaded_file($file, $image_base64);

    $query = $mysqli->prepare("UPDATE users SET name=?,birthdate=?,profile=?,cover=? WHERE id=?");
    $query->bind_param("ssssi", $name,$birthdate,$profile,$cover, $user_id);
    $query->execute();
    

 $response = [];
$response["success"] = true;

echo json_encode($response);

?>