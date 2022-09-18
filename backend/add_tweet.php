<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");

$text = $_POST["text"];
$user_id=$_POST["user_id"];
$image_base64=$_POST["base64Image"];

$query = $mysqli->prepare("INSERT INTO tweets(text,user_id) VALUE (?, ?)");
$query->bind_param("si", $text, $user_id);
$query->execute();
$tweetid=1;
    $file_path="../frontend/images";
    $image_parts = explode(";base64,", $image_base64);
    $image_type_aux = explode("image/", $image_parts[0]);
    $image_type = $image_type_aux[1];
    $image_base64 = base64_decode($image_parts[1]);
    $file =  $file_path. uniqid() .$image_type ;
    echo $file;
    //file_put_contents($file, $image_base64);
    move_uploaded_file($file, $image_base64);

    $query = $mysqli->prepare("INSERT INTO tweet_images(path,tweet_id,user_id) VALUE (?, ?, ?)");
    $query->bind_param("sii", $file,$tweetid, $user_id);
    $query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>