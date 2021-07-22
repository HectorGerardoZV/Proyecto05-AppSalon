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

getServices();