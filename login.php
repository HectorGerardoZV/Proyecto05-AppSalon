<?php

require "includes/functions.php";

$user = isAdmin();

echo json_encode($user);
