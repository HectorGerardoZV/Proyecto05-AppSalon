<?php

function getServices(): array{
    try {

        
        //Impport the conection
        require("databases.php");
        $database->set_charset("utf8"); //este te falta y funciona
        //SQL Code
        $sqlCode = "SELECT * FROM services";
        $query = mysqli_query($database, $sqlCode);
        //Data recolection
        $services = [];
        while ($row = mysqli_fetch_assoc($query)) {
            $services[] = $row;
        }
        return $services;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

function isAdmin(){
    try {

        //Import the conection
        require("databases.php");
        $database->set_charset("utf8");
        //SQL Code
        $sqlCode = "SELECT userName, password FROM user WHERE password = 'thebestbarber'";
        $query = mysqli_query($database, $sqlCode);
        $row = mysqli_fetch_assoc($query);
        return $row;
    } catch (\Throwable $th) {
        var_dump($th);
    }
}

getServices();