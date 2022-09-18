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
$base64Profile=$_POST["base64Profile"];
$base64Cover=$_POST["base64Cover"];

$birthdate=$year.'-'.$month.'-'.$day;

    $file_pathh="C:/xampp/htdocs/twitter-clone/frontend/images/covers/";
    $image_partss = explode(";base64,", $base64Profile);
    $image_type_auxx = explode("image/", $image_parts[0]);
    $image_typee = $image_type_auxx[1];
    $profile_base64 = base64_decode($image_partss[1]);
    $fileprofile =  $file_pathh. uniqid() .$image_typee ;
    file_put_contents($fileprofile, $profile_base64);

    $file_path="C:/xampp/htdocs/twitter-clone/frontend/images/profiles/";
    $image_parts = explode(";base64,", $base64Cover);
    $image_type_aux = explode("image/", $image_parts[0]);
    $image_type = $image_type_aux[1];
    $cover_base64 = base64_decode($image_parts[1]);
    $filecover =  $file_path. uniqid() .".png" ;
    file_put_contents($filecover, $cover_base64);

    $query = $mysqli->prepare("UPDATE users SET name=?,birthdate=?,profile=?,cover=? WHERE id=?");
    $query->bind_param("ssssi", $name,$birthdate,$fileprofile,$filecover, $user_id);
    $query->execute();
    

 $response = [];
$response["success"] = true;

echo json_encode($response);

?>