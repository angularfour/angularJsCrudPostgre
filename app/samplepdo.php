<?php
  $dbuser = 'admLibrary';
  $dbpass = '123';
  $host = 'localhost';
  $dbname = 'dbLibrary';
  $connect;
  try{
    $connec = new PDO("pgsql:host=$host;dbname=$dbname", $dbuser, $dbpass);
  }catch (PDOException $e) {
    echo "Error : " . $e->getMessage() . "<br/>";
    die();
  }

  $sql = "SELECT book_id, book_name, author, publisher, price FROM \"Book\" ORDER BY book_id";
  $rs = $connec->query($sql)->fetchAll();
  foreach ($rs as $row) 
  {
    print $row['book_name'] . " ";
    print $row['author'] . "-->";
    print $row['price'] . "<br>";
  }
?>