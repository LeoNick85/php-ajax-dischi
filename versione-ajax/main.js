$(document).ready(function(){
    //Recupero con chiamata ajax l'elenco degli album
    $.ajax({
        url : "database/disk_list.php",
        method : "GET",
        success : function (data) {
            //Riempio il select con gli autori e il main con le card per tutti gli album del database
            authorList(data);
            printAlbum(data);
            console.log(data);
        },
        error : function () {
            alert("E' avvenuto un errore. ");
        }
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
        console.log(list[i].author);
    }
}

//Funzione per stampare l'elenco degli album, eventualmente filtrando per autore
function printAlbum(list, author_filter) {
    //Svuoto il contenitore
    $("main div.container").text("");

    //Verifico se c'è un filtro per autore come parametro, e stampo le card di conseguenza
    if (author_filter == null) {
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
}
