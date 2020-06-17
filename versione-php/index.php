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
            <img src="../dist/img/logo.png" alt="Logo">
            <h1>Album Showroom</h1>
        </header>
        <main>
            <div class="container">
                <?php
                foreach ($dischi as $key => $value) {
                    ?> <div class="album-card"> <?php
                    ?> <div class="album-card-up"> <?php
                        echo '<img src="' . $dischi[$key]["poster"] . '" alt="Poster">';
                        echo '<h2>' . $dischi[$key]["title"] . '</h2>';
                        echo '<h3>' . $dischi[$key]["author"] . '</h3>';
                        ?></div>
                        <div class="album-card-down"> <?php
                        echo '<h4>' . $dischi[$key]["genre"] . '</h4>';
                        echo '<h5>' . $dischi[$key]["year"] . '</h5>';
                        ?> </div>
                    </div> <?php
                }
                ?>
            </div>
        </main>
    </body>
</html>
