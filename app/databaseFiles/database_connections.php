<?php

$host='localhost';
$db = 'employee';
$username = 'usercom';
$password = '123';

$dsn = "pgsql:host=$host;port=5432;dbname=$db;user=$username;password=$password";
 
try{
	logToFile("create a PostgreSQL database connection");
	$conn = new PDO($dsn);
 
	//logToFile("display a message if connected to the PostgreSQL successfully");
	//if($conn){
		//logToFile("Connected to the <strong>$db</strong> database successfully!");
	//}
}catch (PDOException $e){
	logToFile("report error message");
	logToFile($e->getMessage());
}

?>