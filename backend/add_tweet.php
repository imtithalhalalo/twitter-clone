<?php
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');
header('Access-Control-Allow-Headers: Origin, Content-Type, Accept, Authorization, X-Request-With');

include("connection/connection.php");

$text = $_POST["text"];
$user_id=$_POST["user_id"];

$query = $mysqli->prepare("INSERT INTO tweets(text,user_id) VALUE (?, ?)");
$query->bind_param("si", $text, $user_id);
$query->execute();

// $tweetidQuery=$mysqli->prepare("SELECT LAST_INSERT_ID()");
// $tweetid=$tweetidQuery->execute();
// echo $tweetid;

// if (isset($_POST['imgUpload'])) {
//     $base64=$_POST["base64"];
//     $bin = base64_decode($base64);
//     $im = imageCreateFromString($bin);
//     $img_file = './assets';
//     // $file_path="./assets/".uniqid();
//     // file_put_contents($file_path,base64_decode($base64));
//     $imageQuery=$mysqli->prepare("INSERT INTO images(path,tweet_id,user_id) VALUE (?, ?, ?)");
//     $imageQuery->bind_param("ssi", $file_path, $tweetid,$user_id);
//     $query->execute();
// }
$response = [];
$response["success"] = true;

echo json_encode($response);

?>