$(document).ready(function(){
    //Recupero con chiamata ajax l'elenco degli album
    $.ajax({
        url : "database/disk_list.php",
        method : "GET",
        success : function (data) {
            //Riempio il select con gli autori e il main con le card per tutti gli album del database
            authorList(data);
            printAlbum(data);
        },
        error : function () {
            alert("E' avvenuto un errore. ");
        }
    });

    //Rifaccio la chiamata ajax in caso di cambio alla select dell'autore
    $("#author-list").change(function(){
        var selected_author = {
            "author": $(this).val()
        };
        console.log(selected_author);
        $.ajax({
            url : "database/disk_list.php",
            method : "GET",
            data: selected_author,
            success : function (data) {
                //Riempio il select con gli autori e il main con le card per tutti gli album del database
                printAlbum(data);
            },
            error : function () {
                alert("E' avvenuto un errore.");
            }
        });
    });
})

//FUNZIONI
//Funzione per riempire la select con l'elenco degli autori presenti
function authorList(list) {
    for (var i = 0; i < list.length; i++) {
        var template_html = $("#author-list-template").html();
        var html_element = {
            author : list[i].author
        };
        var template_function = Handlebars.compile(template_html);
        var html_finale = template_function(html_element);
        $("#author-list").append(html_finale);
    }
}

//Funzione per stampare l'elenco degli album, eventualmente filtrando per autore
function printAlbum(list) {
    //Svuoto il contenitore
    $("main div.container").text("");

    //Stampo le card con ciclo for
    for (var i = 0; i < list.length; i++) {
        var template_html = $("#album-card-template").html();
        var html_element = {
            "img-url": list[i].poster,
            "title": list[i].title,
            "author": list[i].author,
            "genre": list[i].genre,
            "year": list[i].year
        };
        var template_function = Handlebars.compile(template_html);
        var html_finale = template_function(html_element);
        $("main div.container").append(html_finale);
    }
}
