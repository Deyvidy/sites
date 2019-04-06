var Vetor = [];
var len = Vetor.length;
var time = 90;

var canvas = document.getElementById('canvas');
var ctx = canvas.getContext("2d");

create(50)
randomArr()
draw(Vetor);

function create(number){
    Vetor = [];
    for(var i=1; i <= number; i++){
        Vetor.push(i);
    }
    len = Vetor.length;
    return Vetor;
}

function randomArr(){
    var index = len, random;
    while(0!==index){
        random = Math.floor(Math.random() * index);
        index -= 1;
        swapIndex(Vetor,index,random);
    }
    draw(Vetor);
    return Vetor;
}

function swapIndex(arr,i,j){
    var temp = arr[i];
    var aux = arr[j]
    arr[i] = arr[j];
    arr[j] = temp;
    return { arr, aux, temp};
}

function draw(arr, temp){
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "black";
    ctx.fillRect(0, 580, 1000, 4);
    for (var i = 0; i < len; i++) {
        ctx.beginPath();
        
        if( arr[i] == temp) {
            ctx.fillStyle = "green";
        } else {
            ctx.fillStyle = "blue";
        }
        
        
        ctx.fillRect( i*20, 580 - arr[i]*8 , 15, arr[i]*8 ); //desenha na tela os retangulos que representa os numeros
        ctx.fillStyle = "red"; // desenha os numerais em cima de cada retangulo
        ctx.font = "12px Arial";
        ctx.fillText( arr[i], i*20, 578 - arr[i]*8 );
        
        ctx.closePath();
        
    }
   
}

function sleep(ms){
    return new Promise(resolve =>setTimeout(resolve,ms));
}     

function refresh(){
    location.reload();
}
