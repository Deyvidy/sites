$(document).ready( function() {
    var btn = $('#btn-contato');
    

    btn.click( function( e ) {
        var nome = $('#name-contato').val();
        var email = $('#email-contato').val();
        var conteudo = $('#message-contato').val();
        var dados = {
            nome ,
            email,
            conteudo
        }

        $.post("/api/v1/email", JSON.parse(JSON.stringify(dados)), function(data, status){
           if(status == 'success') {
               nome = $('#name-contato').val('');
               email = $('#email-contato').val('');
               conteudo = $('#message-contato').val('');
           }
        });
        e.preventDefault();
    })

    

    $.get("/api/v1/blog/posts", function(data, status){
        if(status == 'success') {           
            var conteudo = $('#conteudo-blog');
            for(var i = 0; i < data.jobs.length; i++) {
                if (data.jobs[i].image == undefined) {
                    data.jobs[i].image = data.jobs[0].image.url
                }

                conteudo.append( 
                    '<div class="accordion" id="accordionExample">' +

                        '<div class="blog pb-3" id="id-'+ data.jobs[i].slug +'">' +

                            '<div class="col-md-10 offset-md-1  col-sm-12" id="headingOne">' +                               
                                    
                                '<div>' +
                                    '<a class="" data-toggle="collapse" data-target="#collapseOne'+ i +'" aria-expanded="true" aria-controls="collapseOne">' +
                                        '<h3 class="semi-bold mt-1 text-dark">' + data.jobs[i].title + '</h3>' +
                                        '<div class="mb-4"></div>' +
                                        '<div class="blog-image mb-4 radius-5 s-dp-1-3">' +                                                           
                                            '<img src="' + data.jobs[i].image.url + '" class="blog-figure fit-cover type-1" alt="blog images">' +
                                        '</div>' +
                                    '</a>' +
                                '</div>' +
                                                            
                            '</div>' +

                            '<div id="collapseOne'+ i +'" class="collapse" aria-labelledby="headingOne" data-parent="#accordionExample">' +
                                '<div class="col-md-10 offset-md-1  col-sm-12">' +
                                    '<article class="blog pb-5 type-1 mb-50">' +
                                        
                                        '<p class="m-mb-30">' +   
                                            data.jobs[i].content +                           
                                        '</p>' +
                                    '</article>' +                   
                                '</div>' +
                            '</div>' +
                            
                        '</div>' +                       
                       
                    '</div>'               
                )
            }
            
        }
    });

})
/*

'<div class="row" id="id-'+ data.jobs[i].slug +'">' + 
'<div class="col-md-10 offset-md-1  col-sm-12">' +
    '<article class="blog pb-5 type-1 mb-50">' +
        '<div>' +
            '<h3 class="semi-bold mt-1 text-dark">' + data.jobs[i].title + '</h3>' +
            '<div class="mb-4"></div>' +
        '</div>' +
        '<div class="blog-image mb-4 radius-5 s-dp-1-3">' +                                                           
            '<img src="' + data.jobs[i].image.url + '" class="blog-figure fit-cover type-1" alt="blog images">' +
        '</div>' +
        '<p class="m-mb-30">' +   
            data.jobs[i].content +                           
        '</p>' +
    '</article>' +                   
'</div>' +
'</div>'           */
