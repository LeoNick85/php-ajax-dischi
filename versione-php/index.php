<?php
    include "database/disk_list.php"
?>

<!DOCTYPE html>
<html lang="en" dir="ltr">
    <head>
        <meta charset="utf-8">
        <link rel="stylesheet" href="../dist/style.css">
        <title>Esercitazione #37.1 - Showroom dischi in PHP</title>
    </head>
    <body>
        <header>
            <h1>Lista dischi</h1>
        </header>
        <main>
            <?php
            var_dump($dischi);
            ?>
        </main>
    </body>
</html>
