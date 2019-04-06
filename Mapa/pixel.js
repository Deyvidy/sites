//https://github.com/rombdn/img-touch-canvas
( function( ) {    
    var canvas = document.getElementsByTagName('canvas')[0];
    var ctx = canvas.getContext('2d');
    //canvas.width = 350;//330
    //canvas.height = 400;

    var auxCanvas = document.createElement('canvas');
    var auxContexto = auxCanvas.getContext('2d');
    auxCanvas.width = 8000;
    auxCanvas.height = 4000;

    var gkhead = new Image;
    //Province_ID_map
    //var path = "provinces.bmp";
    var path = "World98.png";
    gkhead.src = path;

    var newImage = new Image;
    var img;

    var imageData;  
    
    
    var pais = {};


    var colorSelect = document.getElementById( 'star-color' );   
    colorSelect.addEventListener( 'change', function() {
        var p = this.value;
        pais = paises[p];
        console.log(pais);
    }, false );	

    var div = document.getElementById('rgb');
    var country = document.getElementById('country');
    var teste1 = document.getElementById('id');
    var teste2 = document.getElementById('pais');

    //captura a cor do input color em valor hexadecimal
    var colorSelected = document.getElementById("color");
    colorSelected.addEventListener('change', function() {
        var teste = this.value;
        console.log(teste);

    }, false)

    gkhead.addEventListener('load', function() {              
        auxContexto.drawImage(gkhead,0,0);        

        img = auxCanvas.toDataURL();
       
        newImage.src = img;

        ctx.drawImage(newImage, 0, 0);
        teste();

    }, false);

    canvas.addEventListener('mousedown',function(evt){
            
        //Evento que captura a cor do pixel
        var x = evt.pageX - this.offsetLeft;
        var y = evt.pageY - this.offsetTop;
        
        
            var imageData = ctx.getImageData( x, y, 1, 1);
            var pixel = imageData.data;
            //console.log(pixel[0] + ' ' + pixel[1] + ' ' + pixel[2] + ' ' + pixel[3])
            
            div.innerHTML = pixel[0] + ' ' + pixel[1] + ' ' + pixel[2] + ' ' + pixel[3];
            nameOfColor(pixel)
            provinciaClicada.r = pixel[0];
            provinciaClicada.g = pixel[1]
            provinciaClicada.b = pixel[2]
            provinciaClicada.a = pixel[3]   

    },false);


    canvas.addEventListener('touchstart', function(evt){
     
        //Evento que captura a cor do pixel
        var x = evt.touches[0].pageX - this.offsetLeft;
        var y = evt.touches[0].pageY - this.offsetTop;
    
        var imageData = ctx.getImageData( x, y, 1, 1);
        var pixel = imageData.data;
        console.log(pixel[0] + ' ' + pixel[1] + ' ' + pixel[2] + ' ' + pixel[3])
        div.innerHTML = pixel[0] + ' ' + pixel[1] + ' ' + pixel[2] + ' ' + pixel[3];
        nameOfColor(pixel)
        provinciaClicada.r = pixel[0];
        provinciaClicada.g = pixel[1]
        provinciaClicada.b = pixel[2]
        provinciaClicada.a = pixel[3]   

    },false);
    
    function nameOfColor(arr) {
        for ( var i = 0; i < provincia.length; i++ ) {
            if ( arr[0] == provincia[i].rgb.r &&
                 arr[1] == provincia[i].rgb.g &&
                 arr[2] == provincia[i].rgb.b &&
                 arr[3] == provincia[i].rgb.a ) {

                country.innerHTML = provincia[i].nome;
            }
        }

        var obj = { r: arr[0], g: arr[1], b: arr[2], a: arr[3] };
        var po = getId(obj);
        var p = getIndex(po)
        
        if(p.index != undefined) {
            teste1.innerHTML = 'Id da regiao ' + paises[p.paiz].cores[p.index].id
            teste2.innerHTML = 'O dono atual da regiao é ' + paises[p.paiz].nome
        } else {
            teste1.innerHTML = 'Regiao desconhecida'
            teste2.innerHTML = 'Regiao sem dono'
        }
        
    }
  
    function changeStarColor( ){
                                        //posição em x, posição em y, tamanho em width, tamanho e height
        imageData = auxContexto.getImageData( 0, 0, auxCanvas.width, auxCanvas.height );
        var pixels = imageData.data;
        var newColor  =  pais.cor;/*JSON.parse( this.value );*/
        var i, len;  
        var cor = {};

        for( i = 0, len = pixels.length; i < len; i += 4 ) {

            //verifica se a faixa de cores do pixel atual está na faixa que queremos mudar, se sim, efetua a troca para os valores da cor escolhida
            for ( var j = 0; j < pais.cores.length; j++ ) {
                //laço que pecorre o array de regioes
                if( pixels[i] == pais.cores[j].rgb.r && pixels[i+1] == pais.cores[j].rgb.g && pixels[i+2] == pais.cores[j].rgb.b  && pixels[i+3] == pais.cores[j].rgb.a) { //A cor não é preta

                    cor = gerarCor(pais.cores.length, j, newColor.r, newColor.g, newColor.b, newColor.a);

                    pixels[i] = cor.r //canal vermelho
                    pixels[i+1] = cor.g, //canal verde
                    pixels[i+2] = cor.b; //canal azul
                    pixels[i+3] = cor.a//esse seria o canal alpha, não precisamos modificá-lo.

                    
                    pais.cores[j].auxRgb.r = cor.r;
                    pais.cores[j].auxRgb.g = cor.g;
                    pais.cores[j].auxRgb.b = cor.b;
                    pais.cores[j].auxRgb.a = cor.a;
                    
                }
            }
            
        }
       
        //Aqui digo a que as variaveis que definem a cor assumem o valor da nova cor substituindo assim a antiga
        
       for ( var j = 0; j < pais.cores.length; j++ ) {            
            pais.cores[j].rgb.r = pais.cores[j].auxRgb.r;
            pais.cores[j].rgb.g = pais.cores[j].auxRgb.g;
            pais.cores[j].rgb.b = pais.cores[j].auxRgb.b;
            pais.cores[j].rgb.a = pais.cores[j].auxRgb.a;
        }

        for (var i = 0; i < provincia.length; i++) {
            for ( var j = 0; j < pais.cores.length; j++ ) {           
                if(provincia[i].nome == pais.cores[j].nome) {
                    provincia[i].rgb.r = pais.cores[j].rgb.r
                    provincia[i].rgb.g = pais.cores[j].rgb.g
                    provincia[i].rgb.b = pais.cores[j].rgb.b
                    provincia[i].rgb.a = pais.cores[j].rgb.a
                }   
            }
        }

        //Coloca os pixels modificados de volta ao canvas.
                                //imagem alterada, posição em x, posição em y
        auxContexto.putImageData(imageData, 0, 0);
        img = auxCanvas.toDataURL();
        newImage.src = img;
        teste()
    }

    function teste(){
        var gesturableImg = new ImgTouchCanvas({
            canvas: canvas,
            path: img,
            desktop: true
        });
        
    }
    
    function gerarCor (tamanho, index, r, g, b ,a) {        
        var x = 24;
        var rgb = {
            r: r,
            g: g,
            b: b,
            a: a
        };    
        
        if (index < 24){
            rgb.a -= index;
            return rgb; 
        } else {            
            if(index >= 24) {
                if(rgb.b < rgb.r && rgb.r > rgb.g) {
                    rgb.r -= 5;
                } else if (rgb.b > rgb.r && rgb.b > rgb.g) {
                    rgb.b -= 5;
                } else if (rgb.g > rgb.r && rgb.g > rgb.b) {
                    rgb.g -= 5;
                } 
                rgb.a -= index - x;                                                    
                return rgb;
            }                
        } 
    }
    
    // Metodos para adicionar uma nova provincia a um pais
    var provinciaClicada = {
        r : 0,
        g : 0,
        b : 0,
        a : 0 
    };

    // buttoes dos paises
    var btn = document.getElementById('btn');
    btn.addEventListener('click', function(){
        //pais = paises[0];
        capturarProvincia(pais);
    });

    function capturarProvincia ( pais ) {
        var pixel = provinciaClicada;
        var faz = false;

        for(var i = 0; i < pais.cores.length; i++) {
            if ( pixel.r == pais.cores[i].rgb.r &&
                 pixel.g == pais.cores[i].rgb.g && 
                 pixel.b == pais.cores[i].rgb.b && 
                 pixel.a == pais.cores[i].rgb.a ) {
                faz = true;              
            }
        }
        var verificar = getId( pixel );

        var ja = false;
        for(var j = 0; j < paises.length; j++) {
            for( var i = 0; i < paises[j].cores.length; i++ ) {
                if( paises[j].cores[i].id == verificar || paises[j].cores[i].id == verificar ) {
                    ja = true;
                }
            }
        }
               
        if(faz) {
            console.log("Essa provincia ja faz parte do nosso pais");
        } else if ( ja ) {
            console.log("Essa provincia faz parte de outro pais");
            var pos = getIndex(verificar);
            paises[pos.paiz].cores.splice(pos.index,1);
            getProv(pixel);
        } else {
            console.log('Essa provincia ainda não faz parte do nosso pais');
            getProv(pixel);
        }
        changeStarColor( );
    }

    function getProv(pixel) {
        var provi = {};
        for(var i = 0; i < provincia.length; i++) {
            if ( pixel.r == provincia[i].rgb.r &&
                 pixel.g == provincia[i].rgb.g &&
                 pixel.b ==  provincia[i].rgb.b && 
                 pixel.a ==  provincia[i].rgb.a ) {
                provi = provincia[i];
                pais.cores.push(provi);
                break;
            }
        }
    }
    function getIndex ( id ) {
        var index;
        var paiz;
        for(var i = 0; i < paises.length; i++) {
            for(var j = 0; j < paises[i].cores.length; j++) {
                if( paises[i].cores[j].id == id ) {
                    index = j;
                    paiz = i;
                }
            }
        }
        return {index, paiz}
            
    }
    function getId( pix ) {
        for(var i = 0; i < provincia.length; i++) {           
            if( provincia[i].rgb.r == pix.r &&
                provincia[i].rgb.g == pix.g &&
                provincia[i].rgb.b == pix.b &&
                provincia[i].rgb.a == pix.a ) {
                return provincia[i].id;
            }           
        }
    }

}());

var provincia = [
    {id: 0, nome : 'Amazonas', rgb: {r: 251, g: 89, b: 145, a: 255}, auxRgb: {r: 251, g: 89, b: 145, a: 255}},
    {id: 1, nome : 'Amapa', rgb: {r: 98, g: 47, b: 84, a: 255}, auxRgb: {r: 98, g: 47, b: 84, a: 255}},
    {id: 2, nome : 'Acre', rgb: {r: 223, g: 70, b: 141, a: 255}, auxRgb: {r: 223, g: 70, b: 141, a: 255}},  
    {id: 3, nome : 'Roraima', rgb: { r: 190, g: 119, b: 91, a: 255}, auxRgb: { r: 190, g: 119, b: 91, a: 255}},
    {id: 4, nome : 'Para', rgb: {r: 214, g: 73, b: 89, a: 255}, auxRgb: {r: 214, g: 73, b: 89, a: 255}},
    {id: 5, nome : 'Mato grosso', rgb: {r: 41, g: 179, b: 7, a: 255}, auxRgb: {r: 41, g: 179, b: 7, a: 255}},
    {id: 6, nome : 'Maranhao', rgb: {r: 83, g: 116, b: 207, a: 255}, auxRgb: {r: 83, g: 116, b: 207, a: 255}},
    {id: 7, nome : 'Rodonia', rgb: {r: 98, g: 15, b: 238, a: 255}, auxRgb: {r: 98, g: 15, b: 238, a: 255}},
    {id: 8, nome : 'Tocotins', rgb: {r: 48, g: 63, b: 87, a: 255}, auxRgb: {r: 48, g: 63, b: 87, a: 255}},
    {id: 9, nome : 'Goias', rgb: {r: 39, g: 197, b: 19, a: 255}, auxRgb: {r: 39, g: 197, b: 19, a: 255}},
    {id: 10, nome : 'Mato Grosso do Sul', rgb: {r: 104, g: 229, b: 140, a: 255}, auxRgb: {r: 104, g: 229, b: 140, a: 255}},
    {id: 11, nome : 'Minas gerais', rgb: {r: 22, g: 197, b: 190, a: 255}, auxRgb: {r: 22, g: 197, b: 190, a: 255}},
    {id: 12, nome : 'Piaui', rgb: {r: 65, g: 159, b: 173, a: 255}, auxRgb: {r: 65, g: 159, b: 173, a: 255}},
    {id: 13, nome : 'Bahia', rgb: {r: 121, g: 196, b: 99, a: 255}, auxRgb: {r: 121, g: 196, b: 99, a: 255}},
    {id: 14, nome : 'São Paulo', rgb: {r: 85, g: 45, b: 57, a: 255}, auxRgb: {r: 85, g: 45, b: 57, a: 255}},
    {id: 15, nome : 'Ceara', rgb: {r: 250, g: 206, b: 148, a: 255}, auxRgb: {r: 250, g: 206, b: 148, a: 255}},
    {id: 16, nome : 'Espirito Santos', rgb: {r: 122, g: 236, b: 80, a: 255}, auxRgb: {r: 122, g: 236, b: 80, a: 255}},
    {id: 17, nome : 'Rio de Janeiro', rgb: {r: 248, g: 94, b: 30, a: 255}, auxRgb: {r: 248, g: 94, b: 30, a: 255}},
    {id: 18, nome : 'Parana', rgb: {r: 242, g: 165, b: 141, a: 255}, auxRgb: {r: 242, g: 165, b: 141, a: 255}},
    {id: 19, nome : 'Santa Cantarina', rgb: {r: 227, g: 251, b: 105, a: 255}, auxRgb: {r: 227, g: 251, b: 105, a: 255}},
    {id: 20, nome : 'Rio Grande do SUl', rgb: {r: 213, g: 157, b: 252, a: 255}, auxRgb: {r: 213, g: 157, b: 252, a: 255}},
    {id: 21, nome : 'Rio Grande do Norte', rgb: {r: 166, g: 64, b: 46, a: 255}, auxRgb: {r: 166, g: 64, b: 46, a: 255}},
    {id: 22, nome : 'Paraiba', rgb: {r: 26, g: 194, b: 195, a: 255}, auxRgb: {r: 26, g: 194, b: 195, a: 255}},
    {id: 23, nome : 'Pernambuco', rgb: {r: 233, g: 208, b: 149, a: 255}, auxRgb: {r: 233, g: 208, b: 149, a: 255}},
    {id: 24, nome : 'Alagoas', rgb: {r: 139, g: 126, b: 179, a: 255}, auxRgb: {r: 139, g: 126, b: 179, a: 255}},
    {id: 25, nome : 'Sergipe', rgb: {r: 238, g: 178, b: 38, a: 255}, auxRgb: {r: 238, g: 178, b: 38, a: 255}},
    {id: 26, nome : 'Teste1', rgb: {r: 206, g: 130, b: 70, a: 255}, auxRgb: {r: 206, g: 130, b: 70, a: 255}},
    {id: 27, nome : 'Teste2', rgb: {r: 79, g: 52, b: 90, a: 255}, auxRgb: {r: 79, g: 52, b: 90, a: 255}},
    {id: 28, nome : 'Teste3', rgb: {r: 142, g: 11, b: 107, a: 255}, auxRgb: {r: 142, g: 11, b: 107, a: 255}},
    {id: 29, nome : 'Teste4', rgb: {r: 246, g: 182, b: 212, a: 255}, auxRgb: {r: 246, g: 182, b: 212, a: 255}},
    {id: 30, nome : 'Teste5', rgb: {r: 174, g: 107, b: 31, a: 255}, auxRgb: {r: 174, g: 107, b: 31, a: 255}},
    {id: 31, nome : 'Teste6', rgb: {r: 244, g: 115, b: 152, a: 255}, auxRgb: {r: 244, g: 115, b: 152, a: 255}},
    {id: 32, nome : 'Teste7', rgb: {r: 121, g: 33, b: 155, a: 255}, auxRgb: {r: 121, g: 33, b: 155, a: 255}},
    {id: 33, nome : 'Teste8', rgb: {r: 127, g: 115, b: 205, a: 255}, auxRgb: {r: 127, g: 115, b: 205, a: 255}}
];

var paises = [
    {   
        id: 0,
        nome: "brasil",
        cor: {r:240, g:0, b:0, a:255},
        cores : []
    },
    {   
        id: 1,
        nome: "eua",
        cor: {r:0, g:0, b:240, a:255},
        cores: []
    },
    {   
        id: 2,
        nome: "argentina",
        cor: {r:240, g:250, b:0, a:255},
        cores: []
    },
    {   
        id: 3,
        nome: "venezuela",
        cor: {r:0, g:240, b:0, a:255},
        cores: []
    },
    {   
        id: 4,
        nome: "bolivia",
        cor: {r:135, g:31, b:120, a:255},
        cores: []
    }
]


