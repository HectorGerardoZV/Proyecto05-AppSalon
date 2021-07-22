<?php



$database = mysqli_connect("localhost","root","adminhector","appsalon");
if(!$database){
echo "Error with the connection";
exit;
}