<?php
  header("Access-Control-Allow-Origin: *");
  header("Access-Control-Allow-Headers: *");

  $data = json_decode(file_get_contents('php://input'),true); 
  $ref = $_SERVER['HTTP_REFERER'];
  
  try {
    $dsn = "mysql:host=localhost;dbname=tremglobal;charset=utf8mb4";
    $user = "root";
    $passwd = "";
  
    $db = new PDO($dsn, $user, $passwd);
    $db-> setAttribute (PDO :: ATTR_ERRMODE, PDO :: ERRMODE_WARNING);
    
    $query = $db->prepare("INSERT INTO users SET name=?, email=?, phone=?, reference=?, created_date=?");
    $insert = $query->execute(array($data['name'],$data['mail'],$data['phone'],$ref,date("y-m-d h:i:s")));
            
  } catch ( PDOException $e ){
      echo "Bir Hata Oluştu: ".$e->getMessage();
  }




  