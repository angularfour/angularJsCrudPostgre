<?php 

include '../log/logger.php';

require_once 'database_connections.php';

$sql = "SELECT emp_id, emp_name, emp_email, emp_gender, emp_address from emp_details";
//$dsn = "mysql:host=localhost;dbname=employee";
//$conn = new PDO($dsn,"usercom",123);

$arr = array();
try{
  $result = $conn->query($sql)->fetchAll(PDO::FETCH_ASSOC);
  //foreach($result as $row){
    //echo $row['emp_id'];
   // echo $row[0];
  //}
}catch(PDOException $e) {
  logToFile($e->getMessage());
  die();
}
echo $json_info = json_encode($result);
logToFile($json_info);
  
?>