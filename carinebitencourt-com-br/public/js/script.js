$(document).ready(function( ){

    carregar( 0, 3 );

    $("#carregarMaisTodos").click(function( event ){
        event.preventDefault();

        var inicio = $('#todoss .thumbnail').length;
        carregar( inicio, 1 );
    });
    

    function carregar ( inicio, maximo ) {
        var dados = { inicio : inicio, maximo : maximo };

        $.post("/api/v1/jobs", JSON.parse(JSON.stringify(dados)), function(data, status){
            todos (data);
        });

        /* Retorna o total de dados do banco */
        $.get("/api/v1/jobs/count", JSON.parse(JSON.stringify(dados)), function(data, status){
            var contar = $('#todoss .thumbnail').length;
            if (data.jobs == contar) {
                $('#carregarMaisTodos').hide();
            }            
        });

    
    };

    function todos (data) {
        data.jobs.forEach(function(dados) {
            $('#todoss').append(
                '<a href="#" class="thumbnail" data-toggle="modal" data-target="#' + dados.name + ' ">' + 
                    '<img class="my-3 mx-3 img-fluid"src=" ' + dados.image[0].url + ' ">' +
                '</a>'
            );

            if (dados.tag == '5c5fadd34ecbe71c0404d64c') {
                $('#webss').append(
                    '<a href="#" class="thumbnail" data-toggle="modal" data-target="#' + dados.name + ' ">' + 
                        '<img class="my-3 mx-3 img-fluid"src=" ' + dados.image[0].url + ' ">' +
                    '</a>'
                );
            };

            if (dados.tag == '5c60f45225703114f0caedfc') {
                $('#impressoss').append(
                    '<a href="#" class="thumbnail" data-toggle="modal" data-target="#' + dados.name + ' ">' + 
                        '<img class="my-3 mx-3 img-fluid"src=" ' + dados.image[0].url + ' ">' +
                    '</a>'
                );
            };

            if (dados.tag == '5c60f45e25703114f0caedfd') {
                $('#logotiposs').append(
                    '<a href="#" class="thumbnail" data-toggle="modal" data-target="#' + dados.name + ' ">' + 
                        '<img class="my-3 mx-3 img-fluid"src=" ' + dados.image[0].url + ' ">' +
                    '</a>'
                );
            };

            if (dados.tag == '5c60f46b25703114f0caedfe') {
                $('#midiasSociaiss').append(
                    '<a href="#" class="thumbnail" data-toggle="modal" data-target="#' + dados.name + ' ">' + 
                        '<img class="my-3 mx-3 img-fluid"src=" ' + dados.image[0].url + ' ">' +
                    '</a>'
                );
            };

        });
    };

})
  