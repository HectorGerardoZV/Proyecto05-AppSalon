<?php

require "includes/functions.php";

$servicios = getServices();

echo json_encode($servicios);
